import { toast } from "react-toastify";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Card from "./components/Card";

export type Organization = {
  name: string;
  accounts: {
    name: string;
    deals: {
      value: string;
      status: string;
      started_at: Date
    }[];
  }[];
};

function App() {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>("all");

  useEffect(() => {
    setLoading(true);
    const getOrganizations = async () => {
      await fetch(`http://localhost:3002/organizations?status=${statusFilter}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) return res.json();
        })
        .then((data) => {
          setOrganizations(data);
        })
        .catch((err) => {
          console.error("Error fetching deals: ", err);
          toast.error("Error fetching deals");
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getOrganizations();
  },  [statusFilter]);

  const calculateValues = (organizations: Organization[]) => {
    let netValue = 0;
    let probabilityValue = 0;

    organizations.forEach((organization) => {
      organization.accounts.forEach((account) => {
        account.deals.forEach((deal) => {
          const dealValue = parseFloat(deal.value);
          if (deal.status === "closed") {
            netValue += dealValue;
          } else if (deal.status === "open") {
            probabilityValue += dealValue;
          }
        });
      });
    });

    return { netValue, probabilityValue };
  };

  const { netValue, probabilityValue } = calculateValues(organizations);

  if (organizations === undefined) {
    return null;
  }

  if(loading){
    return (
      <div>Loading...</div>
    )
  }

  return (
    <>
      <div suppressHydrationWarning>
        <Header netValue={netValue} probabilityValue={probabilityValue} />
        <div>
          <main>
            <div className="body">
              <div className="filters-container">
                <label>Status Filter:</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="open">Open</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
              <Card organizations={organizations} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;

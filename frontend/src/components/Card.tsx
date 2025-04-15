import React from "react";
import { Organization } from "../App";

const Card: React.FC<{
  organizations: Organization[];
}> = ({ organizations }) => {
  // Function to calculate net and probability values
  const calculateTotals = (organizations: Organization[]) => {
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

  // Calculate the totals
  const { netValue, probabilityValue } = calculateTotals(organizations);

  if (organizations.length === 0) return null;

  return (
    <div className="cards-container">
      {organizations.map((organization, orgIndex) => (
        <div key={orgIndex} className="card border">
          <div className="card-header">
            <h2 className="organization-name">{organization.name}</h2>
            {/* Display the net and probability values below the organization name */}
            <p className="totals">
              ${netValue.toFixed(2)} | ${probabilityValue.toFixed(2)}
            </p>
          </div>
          <div className="card-body">
            {organization.accounts
              .filter((account) => account.deals.length > 0)
              .map((account, accIndex) => (
                <div key={accIndex}>
                  {account.deals.map(
                    (deal, dealIndex) =>
                      deal?.value && (
                        <div key={dealIndex} className="deal-item">
                          <span className="account-name">{account.name}</span>
                          <span className="deal-amount">${deal.value}</span>
                        </div>
                      )
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

  export interface Account {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    deals: Deal[];
  }
  
  export interface Organization {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    accounts: Account[];
  }
  
  export interface RawDealData {
    organization_id: number;
    organization_name: string;
    organization_created_at: string;
    organization_updated_at: string;
  
    account_id: number;
    account_name: string;
    account_created_at: string;
    account_updated_at: string;
  
    deal_id: number;
    deal_value: string;
    deal_status: string;
    deal_started_at: string;
    deal_ended_at: string;
    deal_created_at: string;
    deal_updated_at: string;
  }
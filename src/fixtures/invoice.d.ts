export interface Bank {
  bank_code: string;
  collection_type: string;
  transfer_amount: number;
  bank_branch: string;
  account_holder_name: string;
  identity_amount: number;
}

export interface RetailOutlet {
  retail_outlet_name: string;
}

export interface EWallet {
  ewallet_type: string;
}

export interface QRCode {
  qr_code_type: string;
}

export interface DirectDebit {
  direct_debit_type: string;
}

export interface Paylater {
  paylater_type: string;
}

export interface Invoice {
  id: string;
  external_id: string;
  user_id: string;
  status: string;
  merchant_name: string;
  merchant_profile_picture_url: string;
  amount: number;
  payer_email: string;
  description: string;
  expiry_date: string;
  invoice_url: string;
  available_banks: Bank[];
  available_retail_outlets: RetailOutlet[];
  available_ewallets: EWallet[];
  available_qr_codes: QRCode[];
  available_direct_debits: DirectDebit[];
  available_paylaters: Paylater[];
  should_exclude_credit_card: boolean;
  should_send_email: boolean;
  created: string;
  updated: string;
  currency: string;
}

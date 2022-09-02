export interface Stock {
  sku: string;
  stock: number;
}

export enum TransactionType {
  ORDER = "order",
  REFUND = "refund",
}

export interface Transaction {
  sku: string;
  type: TransactionType;
  qty: number;
}

export interface CurrentStockResponse {
  sku: string;
  qty: number;
}

export const ERROR_MESSAGE = "SKU NOT FOUND!";

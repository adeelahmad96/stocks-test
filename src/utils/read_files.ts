import path from "path";
import { Stock, Transaction } from "../types";
const fs = require("fs").promises;

const STOCK_PATH = path.join(__dirname, "../../data/stock.json");
const TRANSACTIONS_PATH = path.join(__dirname, "../../data/transactions.json");

export const getStocks = async (): Promise<Stock[]> => {
  const buffer = await fs.readFile(STOCK_PATH);
  return JSON.parse(buffer.toString());
};

export const getTransactions = async (): Promise<Transaction[]> => {
  const buffer = await fs.readFile(TRANSACTIONS_PATH);
  return JSON.parse(buffer.toString());
};

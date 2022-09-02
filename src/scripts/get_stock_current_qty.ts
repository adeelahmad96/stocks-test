import {
  CurrentStockResponse,
  ERROR_MESSAGE,
  Stock,
  TransactionType
} from "../types";
import { getStocks, getTransactions } from "../utils/read_files";

export async function getStockLevel(
  sku: string
): Promise<CurrentStockResponse> {
  const [stocks, transactions] = await Promise.all([
    getStocks(),
    getTransactions(),
  ]);
  const stock = stocks.find((s: Stock) => s.sku === sku);
  const stockTransactions = transactions.filter((t) => t.sku === sku);
  if (!stock && !stockTransactions?.length) throw ERROR_MESSAGE;

  let currentQty = stock?.stock ?? 0;
  stockTransactions.forEach((transaction) => {
    if (transaction.type === TransactionType.ORDER)
      currentQty = currentQty - transaction.qty;
    if (transaction.type === TransactionType.REFUND)
      currentQty = currentQty + transaction.qty;
  });

  return { sku, qty: currentQty };
}

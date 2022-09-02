import { ERROR_MESSAGE } from "../src/types";
import { getStockLevel } from "../src/scripts/get_stock_current_qty";

describe("Should verify all test cases", () => {
  test("should get current stock level for given sku", async () => {
    const TEST_SKU = "TVN783304/18/16";
    const currentStockLevel = await getStockLevel(TEST_SKU);
    expect(currentStockLevel).toBeTruthy();
    expect(currentStockLevel.sku).toBe(TEST_SKU);
    expect(currentStockLevel.qty).toBe(8067);
  });

  test("should throw error for sku not present in stock and transactions", async () => {
    const TEST_SKU = "TVN783304/18/163";
    try {
      await getStockLevel(TEST_SKU);
    } catch (e) {
      expect(e).toBe(ERROR_MESSAGE);
    }
  });
});

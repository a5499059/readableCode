import generateTestObjects from "./generateTestObjects.js";
import printStockTransactions from "./printStockTransactions.js";

const stocks = [];
const prices = [];
const numShares = [];

generateTestObjects(stocks,prices,numShares);
printStockTransactions(stocks,prices,numShares);

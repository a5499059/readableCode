export default function generateTestObjects(stocks,prices,numShares){

// Define the number objects to create
const numStockObjects = 10;
const numPriceObjects = 10;
const numNumSharesObjects = 10;

// Get the current time
let currentTime = new Date();

// Iterate through the number of Stock objects to create
for (let i = 0; i < numStockObjects; i++) {
  const stock = {
    time: new Date(currentTime.getTime() + (i + 1) * 1000), 
    ticker_symbol: generateTickerSymbol(), 
  };
  stocks.push(stock);
}

// Iterate through the number of Price objects to create
for (let i = 0; i < numPriceObjects; i++) {
  const price = {
    time: new Date(currentTime.getTime() + (i + 2) * 1000), 
    price: generatePrice(), 
  };
  prices.push(price);
}

// Iterate through the number of num_shares objects to create
for (let i = 0; i < numNumSharesObjects; i++) {
  const numShare = {
    time: new Date(currentTime.getTime() + (i + 3) * 1000),
    number_of_shares: generateNumberOfShares(),
  };
  numShares.push(numShare);
}

// create test data functions
function generateTickerSymbol() {
    return Math.random().toString(36).substring(2, 6);
  }

function generatePrice() {
  return Math.floor(Math.random() * 999999) + 300;
}

function generateNumberOfShares() {
    return Math.floor(Math.random() * 999) + 1;
  }  
}

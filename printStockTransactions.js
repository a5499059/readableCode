export default function printStockTransactions(stocks,prices,numShares) {  
    // ３つの配列を一度にイテレートする。
    let stockIter = stocks[Symbol.iterator]();
    let priceIter = prices[Symbol.iterator]();
    let numSharesIter = numShares[Symbol.iterator]();

    // １つ目をセット
    let stockResult = stockIter.next();
    let priceResult = priceIter.next();
    let numSharesResult = numSharesIter.next();
    let stockTime = stockResult.value.time;
    let priceTime = priceResult.value.time;
    let numSharesTime = numSharesResult.value.time;

    while (true) {
      // ３つの行に同じtimeが含まれていない場合は、最も過去の行をスキップする。
      // Note: 最も過去の行が２つ一致していることもあるので、"<="は"<"にできない。
      if (stockTime.getTime() != priceTime.getTime() || stockTime.getTime() != numSharesTime.getTime()) {
        if (stockTime.getTime() <= priceTime.getTime() && stockTime.getTime() <= numSharesTime.getTime()) {
            stockResult = stockIter.next();
            if ( stockResult.done ) break;
            stockTime = stockResult.value.time;
        } else if (priceTime.getTime() <= stockTime.getTime() && priceTime.getTime() <= numSharesTime.getTime()) {
            priceResult = priceIter.next();
            if ( priceResult.done ) break;       
            priceTime = priceResult.value.time;
        } else if (numSharesTime.getTime() <= stockTime.getTime() && numSharesTime.getTime() <= priceTime.getTime()) {
            numSharesResult = numSharesIter.next();
            if ( numSharesResult.done ) break;      
            numSharesTime = numSharesResult.value.time;
        }
        continue;
      }  
      // 一致した行を印字する。
      console.log("@", '時間:'+stockTime, 'シンボル:'+stockResult.value.ticker_symbol, '価格:'+priceResult.value.price, '数:'+numSharesResult.value.number_of_shares);
      stockResult = stockIter.next();
      priceResult = priceIter.next();
      numSharesResult = numSharesIter.next();
      if ( stockResult.done || priceResult.done || numSharesResult.done )  break;
      stockTime = stockResult.value.time;
      priceTime = priceResult.value.time;
      numSharesTime = numSharesResult.value.time;
    }
}
  

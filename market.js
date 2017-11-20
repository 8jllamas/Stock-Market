//imports your code to be tested
const Stock = require("./stock.js");
const Portfolio = require("./portfolio.js");

//Imports my code to run your examples against the economic forcast
//const Forecast = require("./forcast");

function main(){

    //create all of your stocks
    let s1 = new Stock("Netflix", "NFLX", "NASDAQ", 192.80, 73);
    let s2 = new Stock("Sony", "SNE", "NASDAQ", 45.37, 265);
    let s3 = new Stock("Activision Blizzard", "ATVI", "NASDAQ", 62.41,202 );
    let s4 = new Stock("Amazon", "AMZN", "NASDAQ", 1128.10, 10);

    //build your Portfolio
    let myport = new Portfolio();
    myport.add(s1);
    myport.add(s2);
    myport.add(s3);
    myport.add(s4);

    //test portfolio

    console.log(myport.totalValue());
    console.log("---------");
    console.log(myport);
}

main();

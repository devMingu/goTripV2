console.log("CURRENCY");
const axios = require("axios");
const cheerio = require("cheerio");



const getExchange = async () => {
  return new Promise(async (resolve, reject) => {
      try{
        let html = await axios.get("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%ED%99%98%EC%9C%A8");  
        let exchangeList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("div.rate_tlt h3").children("a").children('span.dw');

        $bodyList.each(function(i, elem) {
            exchangeList[i] = {
                price: $(this).find('strong').text(),
            } 
        });
        resolve(exchangeList);
      }catch(error){
        reject(error);
      }
  });
}

getExchange().then((exchanges) => {
  console.log("exchanges = ", exchanges);
  console.log(exchanges[0]['price']);
}).catch((err)=>{
    console.log("NOT FOUND");
})
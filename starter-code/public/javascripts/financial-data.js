axios.get("https://api.coindesk.com/v1/bpi/historical/close.json?star=&end=")
.then(response=>{
    //const keys = Object.values(response.data.bpi)
    //const val =  Object.keys(response.data.bpi)
    printTheChart(response.data)
});

 const stockInfo  = axios.create({
    baseURL: 'https://api.iextrading.com/1.0/stock/',
  });
  
  let stockTicket = "amzn";
  
  stockInfo.get(`${stockTicket}/chart`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
  });

let printTheChart = ((stockData) => {
    let ctx = document.getElementById('myChart').getContext('2d');
let stockLabels = Object.keys(stockData.bpi)
let stockPrice = Object.values(stockData.bpi)
    let chart = new Chart (ctx,{
        type:"line",
        data:{
           labels:stockLabels,
           datasets:[{
               label:"Bitcoin",
               borderColor:"red",
               data:stockPrice,
           }] 
        }
    })
 })


  


  ///printTheChart();

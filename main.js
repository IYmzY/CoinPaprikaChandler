let coinpaprika = "https://api.coinpaprika.com/v1"
let coin_id = "btc-bitcoin";
let startDate = "1608508800";
let endDate = "1611187200";

const coinPaprikaCandlestick = () => {
    fetch(`${coinpaprika}/coins/${coin_id}/ohlcv/historical?start=${startDate}&end=${endDate}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            let options = {
                chart: {
                    type: "candlestick",
                },
                series: [{
                    data: data.map((coinpaprikaData) => [new Date(coinpaprikaData.time_open).getTime(), coinpaprikaData.open, coinpaprikaData.high, coinpaprikaData.low, coinpaprikaData.close])
                }],
            };

            let chart = new ApexCharts(document.querySelector("#chart"), options);

            chart.render();
        })
}
coinPaprikaCandlestick()


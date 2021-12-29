// Save it in a variable for testing in the browser terminal

const APP = new Vue({
    el: '#app',
    data() {
        return {
            coins: null,
            detailedCoin: null,
            coinsLoded: [],
            API: 'https://api.coingecko.com/api/v3',
        }


    },
    methods: {

        fetchCoins() {

            fetch(`${this.API}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
                .then(response => {
                    return response.json();
                })
                .then(response => {
                    this.coins = response;
                });

        },

        // This function adds the currency to a list of loaded currencies to identify
        // Which currency is being requested and if it has already been loaded, do not make the request again for
        // request the information, and if it is not in the list of loaded currencies, make the request

        addCoin(coin) {

            // The only purpose of this setTimeOut, is that you can see the loading effect
            // For sample purposes

            setTimeout(() => {

                if (this.coinsLoded.find(element => element == coin) == undefined) {

                    // fetch

                    this.coinsLoded = [...this.coinsLoded, coin];
                }

            }, 1000);
        },
    },

    mounted() {
        this.fetchCoins();
    },

})
// La gurdo en una variable para hacer pruebas en la terminal del navegador

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

        // Esta funcion añade la moneda a una lista de monedas cargadas para identificar
        // Cual moneda se esta solicitando y si ya se ha cargado, no volver a hacer el request para
        //solicitar la informacion

        addCoin(coin) {
            //El unico proposito de este setTimeOut, es que se pueda ver el efecto de carga
            //Para fines de muestra
            setTimeout(() => {

                if (this.coinsLoded.find(element => element == coin) == undefined) {

                    fetch

                    this.coinsLoded = [...this.coinsLoded, coin];
                }

            }, 1000);



        },
    },

    mounted() {
        this.fetchCoins();
    },

})
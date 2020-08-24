import elements from "./currency.js";

export default {
    url: "",
    ajax: new XMLHttpRequest(),
    currencyCoin: "",
    currencySelected: "",
    euro: "EUR-BRL",
    dolar: "USD-BRL",
    result: "",
    checkInput: '/^[0-9]\b]+$/',
    getUrl() {

        this.currencyType();

        this.ajax.open("GET", "https://economia.awesomeapi.com.br/"+this.currencyCoin, true);
        this.ajax.send();

        this.ajax.onreadystatechange = () => {
            if (this.ajax.readyState === 4 && this.ajax.status == 200) {
                this.data = JSON.parse(this.ajax.responseText);
                
                this.currencySelected = this.data[0].high;
                this.result = this.inputReal.value * this.currencySelected;
                this.inputRes.innerText = this.result.toFixed(2);
            }
        }
    },
    
    convertCoin() {
        elements.getElements.call(this); 
        this.getElements;

        this.inputReal.oninput = () => {
            this.getUrl();
            
        }
        this.coinType.onchange = () => {
            this.getUrl();
        }
    },

    currencyType() {        
        if (this.coinType.value == "Euro") {
            this.currencyCoin = this.euro;
            this.symbol.innerText = "€";
        } else if (this.coinType.value == "Dolar") {
            this.currencyCoin = this.dolar;
            this.symbol.innerText = "US$"
        }
    }
}
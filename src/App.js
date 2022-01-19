import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.currencies = [
      "AED",
      "AFN",
      "ALL",
      "AMD",
      "ANG",
      "AOA",
      "ARS",
      "AUD",
      "AWG",
      "AZN",
      "BAM",
      "BBD",
      "BDT",
      "BGN",
      "BHD",
      "BIF",
      "BMD",
      "BND",
      "BOB",
      "BRL",
      "BSD",
      "BTC",
      "BTN",
      "BWP",
      "BYN",
      "BZD",
      "CAD",
      "CDF",
      "CHF",
      "CLF",
      "CLP",
      "CNH",
      "CNY",
      "COP",
      "CRC",
      "CUC",
      "CUP",
      "CVE",
      "CZK",
      "DJF",
      "DKK",
      "DOP",
      "DZD",
      "EGP",
      "ERN",
      "ETB",
      "EUR",
      "FJD",
      "FKP",
      "GBP",
      "GEL",
      "GGP",
      "GHS",
      "GIP",
      "GMD",
      "GNF",
      "GTQ",
      "GYD",
      "HKD",
      "HNL",
      "HRK",
      "HTG",
      "HUF",
      "IDR",
      "ILS",
      "IMP",
      "INR",
      "IQD",
      "IRR",
      "ISK",
      "JEP",
      "JMD",
      "JOD",
      "JPY",
      "KES",
      "KGS",
      "KHR",
      "KMF",
      "KPW",
      "KRW",
      "KWD",
      "KYD",
      "KZT",
      "LAK",
      "LBP",
      "LKR",
      "LRD",
      "LSL",
      "LYD",
      "MAD",
      "MDL",
      "MGA",
      "MKD",
      "MMK",
      "MNT",
      "MOP",
      "MRU",
      "MUR",
      "MVR",
      "MWK",
      "MXN",
      "MYR",
      "MZN",
      "NAD",
      "NGN",
      "NIO",
      "NOK",
      "NPR",
      "NZD",
      "OMR",
      "PAB",
      "PEN",
      "PGK",
      "PHP",
      "PKR",
      "PLN",
      "PYG",
      "QAR",
      "RON",
      "RSD",
      "RUB",
      "RWF",
      "SAR",
      "SBD",
      "SCR",
      "SDG",
      "SEK",
      "SGD",
      "SHP",
      "SLL",
      "SOS",
      "SRD",
      "SSP",
      "STD",
      "STN",
      "SVC",
      "SYP",
      "SZL",
      "THB",
      "TJS",
      "TMT",
      "TND",
      "TOP",
      "TRY",
      "TTD",
      "TWD",
      "TZS",
      "UAH",
      "UGX",
      "USD",
      "UYU",
      "UZS",
      "VES",
      "VND",
      "VUV",
      "WST",
      "XAF",
      "XAG",
      "XAU",
      "XCD",
      "XDR",
      "XOF",
      "XPD",
      "XPF",
      "XPT",
      "YER",
      "ZAR",
      "ZMW",
      "ZWL",
    ];
    this.state = {
      base: "USD",
      other: "AFN",
      value: 0,
      converted: 0,
    };
  }

  handleInputChange = ({ target }) => {
    this.setState(
      { value: target.value, converted: null },
      this.calculateExchangeRate,
    );
  };

  handleOptionChange = ({ target }) => {
    this.setState((state) => {
      return { ...state, [target.name]: target.value };
    }, this.calculateExchangeRate);
  };

  calculateExchangeRate = () => {
    const state = this.state;
    const value = state.value > 0 ? parseFloat(state.value) : 0;
    fetch(`https://api.exchangerate.host/latest?base=${state.base}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          converted: data.rates[state.other] * value,
        }),
      )
      .catch((err) => console.log("Error fetching rates: ", err));
  };
  render() {
    const state = this.state;
    return (
      <div className="App">
        <h1>Currency Exchange</h1>
        <div className="container">
          <select
            name="base"
            value={state.base}
            onChange={this.handleOptionChange}
          >
            {this.currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <input
            type="number"
            name="value"
            value={state.value}
            onChange={this.handleInputChange}
            min={0}
          />
        </div>
        <div className="container">
          <select
            name="other"
            value={state.other}
            onChange={this.handleOptionChange}
          >
            {this.currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="converted"
            value={state.converted === null ? "loading..." : state.converted}
            disabled
            min={0}
          />
        </div>
      </div>
    );
  }
}

export default App;

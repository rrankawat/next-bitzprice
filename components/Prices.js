class Prices extends React.Component {
  state = {
    currency: "EUR",
  };

  render() {
    let list = "";

    if (this.state.currency === "USD") {
      list = (
        <li className="list-group-item">
          Bitcoin rate for {this.props.bpi.bpi.USD.description}:{" "}
          <span className="badge badge-primary">
            {this.props.bpi.bpi.USD.code}
          </span>{" "}
          <strong>{this.props.bpi.bpi.USD.rate}</strong>
        </li>
      );
    } else if (this.state.currency === "GBP") {
      list = (
        <li className="list-group-item">
          Bitcoin rate for {this.props.bpi.bpi.GBP.description}:{" "}
          <span className="badge badge-primary">
            {this.props.bpi.bpi.GBP.code}
          </span>{" "}
          <strong>{this.props.bpi.bpi.GBP.rate}</strong>
        </li>
      );
    } else if (this.state.currency === "EUR") {
      list = (
        <li className="list-group-item">
          Bitcoin rate for {this.props.bpi.bpi.EUR.description}:{" "}
          <span className="badge badge-primary">
            {this.props.bpi.bpi.EUR.code}
          </span>{" "}
          <strong>{this.props.bpi.bpi.EUR.rate}</strong>
        </li>
      );
    }

    return (
      <div>
        <select
          className="form-control my-4"
          onChange={(e) => this.setState({ currency: e.target.value })}
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>

        <ul className="list-group">{list}</ul>
      </div>
    );
  }
}

export default Prices;

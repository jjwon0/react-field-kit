const React = require('react');
const CreditCardField = require('../../src/CreditCardField.jsx');

class CreditCardFieldInput extends React.Component {
  constructor() {
    super();
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      rawValue: '',
      formattedValue: '',
      cardType: ''
    };
  }

  onChange(field) {
    this.setState({
      rawValue: field.value(),
      formattedValue: field.text()
    });
  }

  cardTypeDidChange(cardType) {
    this.setState({
      cardType
    });
  }

  render() {
    return (
      <div>
        <CreditCardField value={this.state.rawValue}
                                 cardTypeDidChange={this.cardTypeDidChange.bind(this)}
                                 unfocusedPlaceholder="Credit Card"
                                 focusedPlaceholder="1234 1234 1234 1234"
                                 onChange={this.onChange.bind(this)} />
        <p>RAW: {this.state.rawValue}</p>
        <p>FORMATTED: {this.state.formattedValue}</p>
        <p>CardType: {this.state.cardType}</p>
      </div>
    )
  }
}

module.exports = CreditCardFieldInput;

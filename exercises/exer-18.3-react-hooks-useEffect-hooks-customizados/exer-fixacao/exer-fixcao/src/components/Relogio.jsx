import React from 'react';

class Relogio extends React.Component {
  constructor(){
    super();

    this.gerarNumero = this.gerarNumero.bind(this);

    this.state = {
      number: 0,
    }
  }
  gerarNumero() {
    const newNumber = 10;
    this.setState({ number: newNumber})
  }

  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{ number }</h1>
      </div>
    );
  }
}

export default Relogio;
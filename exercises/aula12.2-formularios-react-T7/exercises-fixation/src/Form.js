import React from 'react';
import './Form.css';
import InputName from './InputNome';
import TextArea from './TextArea';

class Form extends React.Component {

constructor() {
  super()

  this.handleEvent = this.handleEvent.bind(this);

  this.state = {
    blocoApartamento: "",
    nome: "",
    idade: 0,
    vaiComparecer: false,
  }
}

handleEvent({ target }) {
  console.log(target);
  const { name } = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  this.setState({
    [name]: value,
  })
}

  render() {
    return (
      <div>
        <h1>Reunião de condominio</h1>
        <form className="form">
          <TextArea handleEvent={this.handleEvent} />
          <InputName handleEvent={this.handleEvent} />
          <label>
            Idade
            <input type="number" name="idade" value={this.state.idade} onChange={this.handleEvent} />
          </label>

          <label>
            Irei comparecer
          <input type="checkbox" name="vaiComparecer" value={this.state.vaiComparecer} onChange={this.handleEvent} />
          </label>
        </form>
      </div>
    )
  }
}

export default Form;

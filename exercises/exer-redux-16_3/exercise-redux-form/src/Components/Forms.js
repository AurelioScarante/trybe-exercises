import React from 'react';
import Estados from '../services/Estados';

class Forms extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <label>
            Nome
            <input type="text"/>
          </label>
          <label>
            Email
            <input type="text"/>
          </label>
          <label>
            CPF
            <input type="number"/>
          </label>
          <label>
            Endereço
            <input type="text"/>
          </label>
          <label>
            Cidade
            <input type="text"/>
          </label>
          <label>Estado</label>
          <select name="Estates">
            {Estados.map((estado) =>
              <option>{ estado }</option>
            )}
          </select>
          <label>
            Nome
            <input type="text"/>
          </label>
        </fieldset>
      </form>
    );
  }
}

export default Forms;

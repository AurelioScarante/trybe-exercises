import React, { Component } from 'react';
import MyContext from './MyContext';

class Daugther extends Component {

  render() {
    return (
      <div>
        <h4>Eu sou a filhaaaaaa</h4>
        <MyContext.Consumer>
          { value => (
            <div>
              <p>{`Eu tenho ${value.money} para gastar`}</p>
              <button onClick={ value.spendMoney }>Gastar</button>
            </div> 
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

export default Daugther;

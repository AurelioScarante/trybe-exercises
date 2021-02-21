import React from 'react';

class TextArea extends React.Component {
  render() {
    const { handleEvent } = this.props;
    return(
      <label>
      Diga qual seu bloco e numero de apartamento:
      <textarea name="blocoApartamento" onChange={handleEvent}/>
    </label>
    )
  }
}

export default TextArea;
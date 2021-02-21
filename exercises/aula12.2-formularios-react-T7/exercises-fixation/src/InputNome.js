import React from 'react';

class InputName extends React.Component {
  render() {
    const { handleEvent } = this.props;
    return (
      <label>
            Nome
            <input type="text" name="nome" onChange={handleEvent} />
          </label>
    )
  }
}

export default InputName;
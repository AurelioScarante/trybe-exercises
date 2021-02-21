import React from 'react';
import List from './components/List';
import InputsList from './components/InputsList';

class App extends React.Component {
  render() {
    return (
      <div>
        <InputsList />
        <List />
      </div>
    );
  }
}

export default App;
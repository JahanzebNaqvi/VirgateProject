import React from 'react';
import Header from './Header'
import SearchBox from './SearchBox'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <SearchBox/>
      </>
    )
  }
}

export default App;

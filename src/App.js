import React from 'react';
import Header from './Header'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey,faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchBox from './SearchBox'

library.add(faEnvelope, faKey,faSearch);

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

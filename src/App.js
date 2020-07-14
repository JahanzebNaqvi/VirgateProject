import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey,faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchBox from './SearchBox'
import MainContent from './MainContent'

library.add(faEnvelope, faKey,faSearch);

class App extends React.Component {
  render() {
    return (
      <Container fluid>
      <Header />
      <SearchBox/>
      <MainContent/>
      </Container >
    )
  }
}

export default App;

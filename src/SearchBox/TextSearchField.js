import React from 'react';
import FormText from 'react-bootstrap/FormText';

class TextFieldSearch extends React.Component {
  render() {
      const {label,placeholder} = this.props;
    return (
      <div className='SearchInput'>

      <label className ='SearchLabel'>{label}</label>
     <input type="text" className ='SearchText' placeholder={placeholder}/>
      </div>
    )
  }
}

export default TextFieldSearch;

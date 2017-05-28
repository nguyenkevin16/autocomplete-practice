import React from 'react';

class FormulaEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formula: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ formula: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('A formula was submitted: ' + this.state.formula);
    console.log('A formula was submitted: ' + this.state.formula);
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit }>
        <h1>Formula Editor</h1>
        <input type='text' 
              onChange={ this.handleChange } 
              value={ this.state.formula } />
        <input type="submit" value="Submit" />
      </form>
    )
  }
};

export default FormulaEditor;
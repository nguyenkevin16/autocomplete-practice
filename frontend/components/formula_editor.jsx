import React from 'react';

class FormulaEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formula: '',
      keyword: '',
      context: '',
      field: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getContext = this.getContext.bind(this);
    this.getChoices = this.getChoices.bind(this);
  }

  getContext(formula, pos) {
    let startOfContext = pos - 1;
    if (startOfContext < 0) {
      startOfContext = 1;
    }
    while (startOfContext > 0) {
      let char = formula[startOfContext];
      if (char === " " || char === "(" || char === ")" || char === ",") {
        startOfContext++;
        break;
      }
      startOfContext--;
    }
    let endOfContext = pos;
    return formula.substring(startOfContext, endOfContext);
  }

  getChoices(context) {
    if (!context || context === "") {
      return [];
    }
    
    const keywords = ['sum', 'min', 'avg', 'max', 'count', '@revenue', '@quantity', '@created_at'];  
    return keywords.filter(function(choice){ return choice.indexOf(context) !== -1 });
  }

  handleChange(event) {
    event.preventDefault();

    let context = this.getContext(event.target.value, event.target.value.slice(0, event.selectionStart).length)
    let suggestions = this.getChoices(context);
    
    this.setState({ 
      formula: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
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
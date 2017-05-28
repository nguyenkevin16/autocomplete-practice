import React from 'react';

class FormulaEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formula: ''
    }
  }

  

  render() {
    return(
      <div className='FormulaEditor'>
        <h1>Formula Editor</h1>
        <input type='text'
              value='' />
      </div>
    )
  }
};

export default FormulaEditor;
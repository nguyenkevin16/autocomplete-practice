import React from 'react';
import ReactDOM from 'react-dom';

import FormulaEditor from './components/formula_editor'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<FormulaEditor/>, root);
});
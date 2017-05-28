import React from 'react';

const FormulaSuggestions = ({ suggestions }) => {
  const listItems = suggestions.map((el) => 
    <li key={el}>
      { el }
    </li>
  )

  return (
    <ul> 
      { listItems } 
    </ul>
  );
}

export default FormulaSuggestions;
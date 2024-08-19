import React, {useState} from 'react';
import "./css/styles.css"
const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
      const value = event.target.value;
      setSearchTerm(value);
      onSearch(value); // Llama a la función de búsqueda cuando el usuario escribe
  };

  return (
      <div className='search-box'>
          <input
              type="text"
              placeholder="Buscar Pokémon"
              value={searchTerm}
              onChange={handleInputChange}
          />
      </div>
  );
};

export default SearchBox;

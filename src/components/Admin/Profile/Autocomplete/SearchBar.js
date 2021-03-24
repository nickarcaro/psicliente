import React, { useState, ChangeEvent } from 'react';
import 'antd/dist/antd.css';
import { Input, AutoComplete } from 'antd';
import { PropertySafetyFilled } from '@ant-design/icons';

const SearchBar = (props) => {
  console.log(props);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setsearchResults] = useState([]);

  const getSearchTerm = (searchTerm) =>{
    setSearchTerm(searchTerm);
  };
  return (
    <AutoComplete>
      <Input.Search 
      size="large" 
      placeholder="Ingrese la opción" 
      value={props.term}
      onChange ={getSearchTerm}
      enterButton />
    </AutoComplete>
  );
};
export default SearchBar;
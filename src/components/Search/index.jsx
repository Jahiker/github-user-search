import React, { useState } from 'react';
import { Stack, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Search({ inputUser, setInputUser }) {
  const [valueInput, setValueInput] = useState('');

  const handleSubmit = () => {
    setInputUser(valueInput);
  };

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  };

  return (
    <Stack
      direction="row"
      sx={{
        marginTop: '30px',
        width: '80%',
        position: 'relative',
      }}
    >
      <TextField
        id="outlined-basic"
        label="GitHub User"
        placeholder="Octocat"
        variant="outlined"
        size="small"
        value={valueInput}
        onChange={onSearchValueChange}
        sx={{
          width: '100%',
        }}
      />
      <IconButton
        onClick={handleSubmit}
        sx={{
          position: 'absolute',
          right: '0',
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
}

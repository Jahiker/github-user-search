import React, { useState } from 'react';
import { Container } from '@mui/material';
import Search from './components/Search';

export default function App() {

  const [inputUser, setInputUser] = useState('octocat');
  const [userState, seUserState] = useState(inputUser);

  return (
    <Container
      sx={{
        background: 'whitesmoke',
        width: '80vw',
        height: '500px',
        borderRadius: '16px',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Search inputUser={inputUser} setInputUser={setInputUser} />
    </Container>
  );
}

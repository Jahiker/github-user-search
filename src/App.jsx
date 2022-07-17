import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';

import Search from './components/Search';
import UserCard from './containers/userCard';

import { getGithubUsers } from './services/users';

export default function App() {

  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState(inputUser);
  const [notFound, setNotFound] = useState(false); 

  const gettingUser = async (user) => {
    const searchedUser = await getGithubUsers(user);

    if (userState === 'octocat') {
      localStorage.setItem('octocat', JSON.stringify(searchedUser));
    }

    if (searchedUser.message === 'Not Found') {
      const { octocat } = localStorage;
      setInputUser(JSON.parse(octocat));
      setNotFound(true);
    } else {
      setUserState(searchedUser);
      setNotFound(false);
    }

    console.log("🚀 ~ file: App.jsx ~ line 13 ~ gettingUser ~ searchedUser", {
      searchedUser,
      userState,
      octocat: localStorage.getItem('octocat')
    });
  }

  useEffect(() => {
    gettingUser(inputUser);
  }, [inputUser])


  return (
    <Container
      sx={{
        background: 'whitesmoke',
        width: '80vw',
        height: 'auto',
        borderRadius: '16px',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Search inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard userState={userState} />
    </Container>
  );
}

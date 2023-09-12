import React from 'react';
import UsersPage from './components/UsersPage';
import users from "./data/users";

const App = () => {
  return <UsersPage users={users} />
}

export default App;

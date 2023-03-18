import React, { useState } from 'react';
import db from './db.json';
import { ProfileCard } from './ProfileCard/ProfileCard.jsx';
import styled from '@emotion/styled';

export const App = () => {
  const [users] = useState(db.users);

  return (
    <List>
      {users.map(user => (
        <ProfileCard key={user.id} user={user} />
      ))}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  @media (min-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

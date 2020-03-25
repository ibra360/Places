import React from 'react';
import UsersList from '../components/UsersList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Ibrahim',
      places: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhAIBSNNNTLOkgyYP0wc7YULHyncT5ANRlbsJq2AiHD9diNi9R'
    }];
  // console.log(USERS);

  return <UsersList items={USERS} />
};

export default Users;

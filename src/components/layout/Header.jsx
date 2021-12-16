import React from 'react';
import { useUser } from '../../context/UserContext';

const Header = () => {
  //CONDITION ? do this if true : Do this if false
  const { user } = useUser();
  return (
    <header>
      {user ? (
        // ? is separating the condition from what you want to happen
        <p>
          Signing Guestbook: <span>{user}</span>
        </p>
      ) : (
        //true scenario is on the right side
        //false scenario is on the left side
        <p>Sign in</p>
      )}
    </header>
  );
};

export default Header;

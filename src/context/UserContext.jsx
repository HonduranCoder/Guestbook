import { useContext, createContext, useState } from 'react';

// create our context
const UserContext = createContext();
// create a user provider that takes in the children
// create text
// use the user provider context
const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// custom hook
const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('Provider needed');
  }
  return context;
};

export { UserProvider, useUser };

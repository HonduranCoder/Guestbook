import { useContext, createContext, useState } from 'react';
// create the context
const EntryContext = createContext();
// create the EntryProvider component
const EntryProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  return (
    <EntryContext.Provider value={{ entries, setEntries }}>
      {children}
    </EntryContext.Provider>
  );
};
// inside the return, our 'value' prop is the value we are providing as the 'context' value
// create custom hook (custom function prefixed with the word 'use')
// inside the hook, context is the value being provided.
// export the provider component and the custom hook
const useEntries = () => {
  const context = useContext(EntryContext);
  if (context === undefined) {
    throw new Error('need Provider');
  }
  return context;
};

export { EntryProvider, useEntries };

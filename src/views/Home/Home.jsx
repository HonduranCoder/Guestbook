import EntryList from '../../components/EntryList/EntryList';
import GuestBook from '../../components/Guestbook/Guestbook';
import { EntryProvider } from '../../context/EntryContext.jsx';

const Home = () => {
  return (
    <>
      <EntryProvider>
        <GuestBook />
        <EntryList />
      </EntryProvider>
    </>
  );
};

export default Home;

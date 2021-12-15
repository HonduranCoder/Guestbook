import EntryList from '../../components/EntryList/EntryList';
import GuestBook from '../../components/GuestBook/GuestBook';
import { EntryProvider } from '../../context/EntryContext';

const Home = () => {
  return (
    <>
      <GuestBook />
      <EntryList />
    </>
  );
};

export default Home;

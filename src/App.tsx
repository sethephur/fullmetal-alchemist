import './App.css';
import { CharacterRatings } from './CharacterRatings';
import { Header } from './Header';
import data from '../public/fma-data';
import { CharacterCards } from './CharacterCards';

function App() {
  return (
    <>
      <Header />
      <CharacterRatings data={data} />
      <CharacterCards data={data} />
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/navigation.component';
import MainNews from './components/hero/hero.component';
import News from './components/news-container/news-container.component';
import RankedNews from './components/ranked-container/ranked-news-container.component';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <MainNews />
      <News />
      <RankedNews />
    </div>
  );
}

export default App;

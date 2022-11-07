import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/navigation.component';
import MainNews from './components/main-news/main-news.component';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <MainNews />
    </div>
  );
}

export default App;

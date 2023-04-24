import './App.css';
import BusinessList from './Components/BusinessList';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      <h1 className='header'>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;

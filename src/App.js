import './App.css';
import BusinessList from './Components/BusinessList';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      <div>
        <SearchBar />
      </div>
      <BusinessList />
    </div>
  );
}

export default App;

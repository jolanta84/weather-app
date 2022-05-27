import { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header/Header";
import SearchLocation from './components/SearchLocation/SearchLocation';
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  // const [repoList, setRepolist] = useState([]);
  // const [isFetching, setIsFetching] = useState(true);

  const API_URL = 'https://api.openweathermap.org/data/2.5/';
  const API_KEY = '0f49db41c8ba9fd435696694d7607902';

  useEffect(() => {
    if (city) {
      axios
        .get(`${API_URL}weather?q=${city}&appid=${API_KEY}&units=metric&lang=pl`)
        .then((data) => {
          console.log(data.data);
          // setRepolist(data.data);
          // setIsFetching(false);
        });
    }
  }, [city]);
  return (
    <div className="App">
      <Header />
      <SearchLocation />
    </div>
  );
}

export default App;

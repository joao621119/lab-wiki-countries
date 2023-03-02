import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import Hearder from './components/Hearder';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

const apiURL = 'https://ih-countries-api.herokuapp.com/countries'

function App() {

  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)

const getCountries = async () => {
  try {
    let response = await axios.get(apiURL)
    setCountries(response.data)
    setLoading(false)
  } catch (error) {
    console.log(error)
  }
}

  useEffect(() => {
    getCountries()
  }, [])

  return (
    <div className="App">
      <Hearder/>

      {loading && <h1>Loading...</h1>}
      {!loading && countries.map((country) => (
        <CountriesList country={country} key={country._id}/>
      ))}

      <Routes>
        <Route path="/country-details/:id" element={loading ? ( <h1>Loading</h1>) : (<CountryDetails countries={countries}/> )}/>
      </Routes>
    </div>
  );
}

export default App;

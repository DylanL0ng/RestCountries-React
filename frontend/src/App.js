import React, { useState } from 'react'
import CountryCard from './components/CountryCard';

import './App.css'
import Searchbar from './components/Searchbar';

const REQUEST_STATES = {
  no_request: 1,
  waiting_request: 2,
  recieved_request: 3
}

function App() {

  const [fetchingData, setFetchingData] = useState(REQUEST_STATES.no_request);
  const [errorMessage, setErrorMessage] = useState(undefined)
  const [countriesData, setCountriesData] = useState([{}]);
  
  const handleSubmit = async e => {
    e.preventDefault()

    var search_input = e.target[0].value;

    if (search_input.trim().length === 0) return;

    setFetchingData(REQUEST_STATES.waiting_request);
    setErrorMessage(undefined);

    try {
      const response = await fetch(`http://${process.env.REACT_APP_EXPRESS_IP}:${process.env.REACT_APP_EXPRESS_PORT}/countries/${search_input}`);
      if (!response.ok)
      {
        setErrorMessage("Sorry, no country could be found. Please try again.")
        return
      }
      
      const data = await response.json();
      
      setCountriesData(data);
      setFetchingData(REQUEST_STATES.recieved_request);
    } catch (error) {
      console.error('Error fetching data..', error.message)
      setErrorMessage("Sorry, no country could be found. Please try again.")
    }
  }

  return (
    <>
      <header>
        <Searchbar onSubmit={handleSubmit} />
      </header>

      {errorMessage === undefined && fetchingData === REQUEST_STATES.waiting_request && <div className='loading--prompt'><span className='loader'></span>Retrieving data...</div>}
      {errorMessage === undefined && fetchingData === REQUEST_STATES.recieved_request && <section className='country--results'>
          {countriesData.map((item, idx) => {
            return <CountryCard key={idx} data={item} />
          })}
        </section>}
      {errorMessage && <p className='error--prompt'>{errorMessage}</p>}
    </>
  )
}

export default App
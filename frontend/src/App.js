import React, { useState } from 'react'
import CountryCard from './components/CountryCard';
import Searchbar from './components/Searchbar';

import './App.css'

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
      <header data-testid="cypress-header">
        <Searchbar onSubmit={handleSubmit} />
      </header>

      {/* 
        If there's no error message present, and data is being
        fetched then display a loading prompt.
      */}
      {
        errorMessage === undefined &&
        fetchingData === REQUEST_STATES.waiting_request &&
        <div className='loading--prompt'>
          <span className='loader'></span>
          Retrieving data...
        </div>
      }
      
      {/* 
        If data has been retrieved and there's no error present
        then map through and display each country with relevant
        country data
      */}
      {
        errorMessage === undefined &&
        fetchingData === REQUEST_STATES.recieved_request &&
        <section data-testid={'cypress-countryresults'} className='country--results'>
          {countriesData?.map((data, key) => <CountryCard key={key} index={key} data={data} /> )}
        </section>
      }

      {/* 
        If theres an error, show the error prompt
      */}
      {errorMessage && <p data-testid={'cypress-errorprompt'} className='error--prompt'>{errorMessage}</p>}
    </>
  )
}

export default App
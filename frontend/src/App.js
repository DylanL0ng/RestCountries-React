import React, { useState } from 'react'
import CountryCard from './components/CountryCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function App() {

  const STATES = {
    no_request: 1,
    waiting_request: 2,
    recieved_request: 3
  }

  const [countriesData, setCountriesData] = useState([{}]);
  const [countryName, setCountryName] = useState('');
  const [fetchingData, setFetchingData] = useState(STATES.no_request);
  const [responseOkay, setResponseOkay] = useState(undefined);

  const handleSubmit = async e => {
    e.preventDefault()
    setFetchingData(STATES.waiting_request);
    setResponseOkay(null);
    try {
      const response = await fetch(`http://localhost:3030/countries/${countryName}`);
      if (!response.ok)
      {
        setResponseOkay(false);
        throw new Error('failed');
      }
      
      const data = await response.json();
      
      setCountriesData(data);
      setFetchingData(STATES.recieved_request);
      setResponseOkay(true);
    } catch (error) {
      console.error('Error fetching data..', error.message)
      setResponseOkay(false);
    }
  }

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <div className='input--group'>
            <input type='text' placeholder='Country' value={countryName} onChange={e => setCountryName(e.target.value)} />
            <button className='icon'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </form>
      </header>

      {responseOkay === null && fetchingData === STATES.waiting_request && <div className='loading--prompt'><span className='loader'></span>Retrieving data...</div>}
      {responseOkay === true && fetchingData === STATES.recieved_request && <section className='country--results'>
          {countriesData.map((item, idx) => {
            return <CountryCard key={idx} data={item} />
          })}
        </section>}
      {responseOkay === false && <p>Cannot find Country</p>}
    </>
  )
}

export default App
import React from 'react';
import "./CountryCard.css";

const CountryCard = ({data, index}) => {
  // https://stackoverflow.com/questions/2901102/how-to-format-a-number-with-commas-as-thousands-separators
  const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="country--card">
        <div className='country--flag' style={{backgroundImage: `url(${data.flags.svg})`}}>
        </div>
        <div data-testid={`cypress-country-stats-${index}`} className='country--stats'>
          <p data-testid={`cypress-country-name-${index}`} className='country--name'>{data?.name?.common} {data.flag}</p>
          <ul>
            <li data-testid={`cypress-country-region-${index}`}>
              <span className='label'>Region: </span>
              {data?.region}
            </li>
            <li data-testid={`cypress-country-capital-${index}`}>
              <span className='label'>Capital: </span>
              {data?.capital}
            </li>
            <li data-testid={`cypress-country-population-${index}`}>
              <span className='label'>Population: </span>
              {numberWithCommas(data?.population)}
            </li>
          </ul>
        </div>
    </div>
  );
};

export default CountryCard;

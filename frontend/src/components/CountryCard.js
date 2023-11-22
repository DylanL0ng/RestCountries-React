import React from 'react';
import "./CountryCard.css";

const CountryCard = ({data}) => {
  // https://stackoverflow.com/questions/2901102/how-to-format-a-number-with-commas-as-thousands-separators
  const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="country--card">
        <div className='country--flag' style={{backgroundImage: `url(${data.flags.svg})`}}>
        </div>
        <div className='country--stats'>
          <p className='country--name'>{data?.name?.common} {data.flag}</p>
          <ul>
            <li>
              <span className='label'>Region: </span>
              {data?.region}
            </li>
            <li>
              <span className='label'>Capital: </span>
              {data?.capital}
            </li>
            <li>
              <span className='label'>Population: </span>
              {numberWithCommas(data?.population)}
            </li>
          </ul>
        </div>
    </div>
  );
};

export default CountryCard;

import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


import "./Searchbar.css"

export default function Searchbar({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
        <div className='input--group'>
        <input data-testid={`cypress-searchbar`} type='text' placeholder='Country' />
        <button data-testid={`cypress-searchbutton`} className='icon'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        </div>
    </form>
    )
}

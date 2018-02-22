import React from 'react'
import './SortBy.css';

function SortBy({
  onFilter,
  rankByCertification
}) {
  return (
    <div className='container'>
      <div className='row'>
        <div className={`filter-button ${rankByCertification && 'active-filter'}`} onClick={
            (event) => {
              onFilter()
            }
          }>
            CERTIFICATE COUNT
        </div>
        <div className={`filter-button ${!rankByCertification && 'active-filter'}`} onClick={
            (event) => {
              onFilter()
            }
          }>
            FORUM VOTES
        </div>
      </div>
    </div>
  )
}

export default SortBy
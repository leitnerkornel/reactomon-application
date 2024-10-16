import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import './Pagination.css'

const Pagination = ({
  offset,
  totalCount,
  limit,
  changeOffset,
  itemsPerPageOptions,
  changeLimit
}) => {
  const [selectedPageIndex, setSelectedPageIndex] = useState(0)

  useEffect(() => {
    setSelectedPageIndex(Math.ceil(offset / limit))
  }, [offset, limit])

  return (
    <>
      <div className="items-per-page-container">
        <div className="items-per-page-text-container">
          <div className="items-per-page-text">Items per page:</div>
        </div>
        <div className="items-per-page">
          {itemsPerPageOptions.map((option) => (
            <div
              key={uuidv4()}
              className={`items-per-page-number-container ${limit === option ? 'active-items-per-page' : ''}`}
              onClick={() => changeLimit(option)}
            >
              <div className="items-per-page-number">{option}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="pagination">
        {[...Array(Math.ceil(totalCount / limit))].map((item, index) => (
          <div
            key={uuidv4()}
            className={`pagination-number-container ${selectedPageIndex === index ? 'active-page' : ''}`}
            onClick={() => changeOffset(index * limit)}
          >
            <div className="pagination-number">{index + 1}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Pagination

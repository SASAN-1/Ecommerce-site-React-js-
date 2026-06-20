import React from 'react'
import { Link } from 'react-router'

const PageNotFound = () => {
  return (
    <div className='pnf-body'>
        <div className='pnf'>
          <h1 className='pnf-head'>404 - Page Not Found</h1>
          <Link to="/" className='home-btn'>Go Home</Link>
        </div>
    </div>
  )
}

export default PageNotFound
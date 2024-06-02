import React from 'react'
import "./ErrorPage.css"
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='error-page'>
        <div className='error-page-content'>
        <h2 className='error-page-heading'>
            404
        </h2>
        <p className='error-page-text'>Page Not Found</p>
        

        <div className='error-page-button'>
          <Link to={"/"}>
          Back To Homepage
          </Link>
        </div>
        </div>

    </div>
  )
}

export default ErrorPage
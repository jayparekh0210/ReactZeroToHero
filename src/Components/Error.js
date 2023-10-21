import React from 'react'
import { useRouteError } from "react-router-dom"

const Error = () => {
    const error  = useRouteError();
  return (
    <div>
        <h1>{`Error ${error.status}`}</h1>
        <h3>{error.statusText} </h3>
        <p>{error?.data}</p>
    </div>
  )
}

export default Error
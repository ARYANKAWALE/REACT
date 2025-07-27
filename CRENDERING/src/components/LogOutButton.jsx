import React from 'react'

export const LogOutButton = ({ setLoggedIn }) => {
  return (
    <button onClick={() => setLoggedIn(false)}>Log Out</button>
  )
}

export default LogOutButton
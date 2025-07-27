import React from 'react'

export const LoginButton = ({ setLoggedIn }) => {
  return (
    <button onClick={() => setLoggedIn(true)}>
        Login
    </button>
  )
}
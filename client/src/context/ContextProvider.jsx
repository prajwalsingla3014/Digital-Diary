/** @format */

import React, { createContext, useState, useEffect } from 'react'

export const LoginContext = createContext(null)

const ContextProvider = ({ children }) => {
  const [account, setAccount] = useState('')

  useEffect(() => {
    const getData = async () => {
      const user = await localStorage.getItem('userInfo')
      const userinfo = JSON.parse(user)
      setAccount(userinfo)
    }
    getData()
  }, [])

  console.log('User ', account)

  return (
    <LoginContext.Provider value={{ account, setAccount }}>
      {children}
    </LoginContext.Provider>
  )
}

export default ContextProvider

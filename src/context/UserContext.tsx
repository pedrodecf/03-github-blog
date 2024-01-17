import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface UserContextType {
  user: object | undefined
}

export const UserContext = createContext({} as UserContextType)

interface UserProviderProps {
  children: ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState()
  useEffect(() => {
    api.get('https://api.github.com/users/pedrodecf').then(function (response) {
      setUser(response.data)
    })
  }, [])

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}

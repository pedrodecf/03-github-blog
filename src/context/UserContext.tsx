import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface UserProps {
  login?: string
  avatar_url?: string
  url?: string
  followers?: number
  company?: string
  name?: string
  bio?: string
}

interface UserContextType {
  user: UserProps
}

export const UserContext = createContext({} as UserContextType)

interface UserProviderProps {
  children: ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserProps>({})
  useEffect(() => {
    api.get('https://api.github.com/users/pedrodecf').then(function (response) {
      setTimeout(() => setUser(response.data), 1000)
    })
  }, [])

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}

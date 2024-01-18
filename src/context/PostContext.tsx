import { api } from '../lib/axios'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface PostsProps {
  url?: string
  html_url?: string
  number?: number
  title?: string
  comments?: number
  created_at?: string
  body?: string
  user?: {
    login?: string
  }
}

interface PostContextType {
  posts: PostsProps[]
  search: string
  SearchPost: (query: string) => void
}

export const PostContext = createContext({} as PostContextType)

interface PostProviderProps {
  children: ReactNode
}

export function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<PostsProps[]>([])
  const [search, setSearch] = useState<string>('')

  function SearchPost(query: string) {
    setSearch(query)
  }

  useEffect(() => {
    api
      .get(
        `https://api.github.com/search/issues?q=${search}%20repo:rocketseat-education/reactjs-github-blog-challenge`,
      )
      .then(function (response) {
        setPosts(response.data.items)
      })
  }, [search])
  return (
    <PostContext.Provider value={{ posts, search, SearchPost }}>
      {children}
    </PostContext.Provider>
  )
}

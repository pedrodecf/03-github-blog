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
}

export const PostContext = createContext({} as PostContextType)

interface PostProviderProps {
  children: ReactNode
}

export function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<PostsProps[]>([])

  // useEffect(() => {
  //   api
  //     .get(
  //       'https://api.github.com/search/issues?q=%20repo:pedrodecf/github-blog',
  //     )
  //     .then(function (response) {
  //       setPosts(response.data.items)
  //     })
  // }, [])

  //   api
  //     .get(
  //       'https://api.github.com/search/issues?q=%20repo:rocketseat-education/reactjs-github-blog-challenge',
  //     )
  //     .then(function (response) {
  //       setPosts(response.data)
  //     })
  // }, [])
  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  )
}

import { PostInfo } from '../../components/PostInfo'
import { PostContent, ViewContainer } from './styles'
import { api } from '../../lib/axios'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

interface ViewPostProps {
  html_url?: string
  user?: {
    login: string
  }
  comments?: number
  created_at?: string
  title?: string
  body?: string
}

export function View() {
  const [viewPost, setViewPost] = useState<ViewPostProps>({})
  const { id } = useParams()
  api
    .get(
      `https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`,
    )
    .then(function (response) {
      setViewPost(response.data)
    })
  return (
    <ViewContainer>
      <PostInfo
        url={viewPost.html_url}
        comments={viewPost.comments}
        date={viewPost.created_at}
        title={viewPost.title}
        username={viewPost.user?.login}
      />
      <PostContent>{viewPost.body}</PostContent>
    </ViewContainer>
  )
}

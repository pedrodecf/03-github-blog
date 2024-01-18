import { PostInfo } from '../../components/PostInfo'
import { PostContent, ViewContainer } from './styles'
import { api } from '../../lib/axios'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'

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
      {viewPost.body === undefined ? (
        <div className="loadingBar">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#3294F8"
            ariaLabel="three-dots-loading"
          />
        </div>
      ) : (
        <PostContent>{viewPost.body}</PostContent>
      )}
    </ViewContainer>
  )
}

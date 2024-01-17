import { PostContainer, PostTitleContainer } from './styles'
import { Link } from 'react-router-dom'

interface PostProps {
  link?: string
  title?: string
  date?: string
  description?: string
}

export function Post({ link, title, date, description }: PostProps) {
  return (
    <PostContainer>
      <PostTitleContainer>
        <Link to={`/view/${link}`}>
          <h2>{title}</h2>
        </Link>
        <span>{date}</span>
      </PostTitleContainer>
      <p>{description}</p>
    </PostContainer>
  )
}

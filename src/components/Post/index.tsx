import { PostContainer, PostTitleContainer } from './styles'
import { Link } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

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
        <span>
          {date &&
            formatDistanceToNow(new Date(date), {
              addSuffix: true,
              locale: ptBR,
            })}
        </span>
      </PostTitleContainer>
      <p>{description}</p>
    </PostContainer>
  )
}

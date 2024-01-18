import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  Chat,
  GithubLogo,
} from '@phosphor-icons/react'
import {
  PostContainer,
  InfoContainer,
  PostInfoContainer,
  PostContent,
} from './styles'
import { Link } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostInfoProps {
  title?: string
  username?: string
  date?: string
  comments?: number
  url?: string
}

export function PostInfo({
  title,
  username,
  date,
  comments,
  url,
}: PostInfoProps) {
  return (
    <PostContainer>
      {username === undefined ? (
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
        <PostContent>
          <InfoContainer>
            <div className="firstLineContainer">
              <Link to={'/'}>
                <CaretLeft size={12} weight="bold" /> VOLTAR
              </Link>
              <a href={url} target="_blank" rel="noreferrer">
                VER NO GITHUB <ArrowSquareOut size={12} weight="bold" />
              </a>
            </div>
            <h1>{title}</h1>
            <PostInfoContainer>
              <span>
                <GithubLogo size={18} />
                {username}
              </span>

              <span>
                <Calendar size={18} />
                {date &&
                  formatDistanceToNow(new Date(date), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
              </span>

              <span>
                <Chat size={18} />
                {comments} {comments === 1 ? 'comentário' : 'comentários'}
              </span>
            </PostInfoContainer>
          </InfoContainer>
        </PostContent>
      )}
    </PostContainer>
  )
}

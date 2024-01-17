import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  Chat,
  GithubLogo,
} from '@phosphor-icons/react'
import { PostContainer, InfoContainer, PostInfoContainer } from './styles'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

export function PostInfo() {
  const { user } = useContext(UserContext)
  return (
    <PostContainer>
      <InfoContainer>
        <div className="firstLineContainer">
          <Link to={'/'}>
            <CaretLeft size={12} weight="bold" /> VOLTAR
          </Link>
          <a href="https://github.com/pedrodecf">
            VER NO GITHUB <ArrowSquareOut size={12} weight="bold" />
          </a>
        </div>
        <h1>JavaScript data types and data structures</h1>
        <PostInfoContainer>
          <span>
            <GithubLogo size={18} />
            {user.login}
          </span>

          <span>
            <Calendar size={18} />
            Há 1 dia
          </span>

          <span>
            <Chat size={18} />
            32 seguidores
          </span>
        </PostInfoContainer>
      </InfoContainer>
    </PostContainer>
  )
}

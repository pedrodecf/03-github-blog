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
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { ThreeDots } from 'react-loader-spinner'

export function PostInfo() {
  const { user } = useContext(UserContext)
  return (
    <PostContainer>
      {Object.keys(user).length === 0 ? (
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
        </PostContent>
      )}
    </PostContainer>
  )
}

import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  UserList,
} from '@phosphor-icons/react'
import {
  ImgContainer,
  ProfileContainer,
  InfoContainer,
  UserInfoContainer,
} from './styles'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

export function Profile() {
  const { user } = useContext(UserContext)
  console.log(user)
  return (
    <ProfileContainer>
      <ImgContainer>
        <img src={user.avatar_url} alt="" />
      </ImgContainer>
      <InfoContainer>
        <div className="firstLineContainer">
          <h1>{user.name}</h1>
          <a href={`https://github.com/${user.login}`}>
            GITHUB <ArrowSquareOut size={12} weight="bold" />
          </a>
        </div>
        <p>{user.bio}</p>
        <UserInfoContainer>
          <span>
            <GithubLogo size={18} />
            {user.login}
          </span>
          {user.company !== undefined ?? (
            <span>
              <Buildings size={18} />
              {user.company}
            </span>
          )}

          <span>
            <UserList size={18} />
            {user.followers} {user.followers === 1 ? 'seguidor' : 'seguidores'}
          </span>
        </UserInfoContainer>
      </InfoContainer>
    </ProfileContainer>
  )
}

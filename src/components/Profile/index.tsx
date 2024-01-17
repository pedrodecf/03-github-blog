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
  ProfileContent,
} from './styles'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { ThreeDots } from 'react-loader-spinner'

export function Profile() {
  const { user } = useContext(UserContext)
  return (
    <ProfileContainer>
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
        <ProfileContent>
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
                {user.followers}{' '}
                {user.followers === 1 ? 'seguidor' : 'seguidores'}
              </span>
            </UserInfoContainer>
          </InfoContainer>
        </ProfileContent>
      )}
    </ProfileContainer>
  )
}

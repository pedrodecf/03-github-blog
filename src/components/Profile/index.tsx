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

export function Profile() {
  return (
    <ProfileContainer>
      <ImgContainer>
        <img src="https://github.com/pedrodecf.png" alt="" />
      </ImgContainer>
      <InfoContainer>
        <div className="firstLineContainer">
          <h1>Pedro Henrique</h1>
          <a href="https://github.com/pedrodecf">
            GITHUB <ArrowSquareOut size={12} weight="bold" />
          </a>
        </div>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <UserInfoContainer>
          <span>
            <GithubLogo size={18} />
            pedrodecf
          </span>

          <span>
            <Buildings size={18} />
            Rocketseat
          </span>

          <span>
            <UserList size={18} />
            32 seguidores
          </span>
        </UserInfoContainer>
      </InfoContainer>
    </ProfileContainer>
  )
}

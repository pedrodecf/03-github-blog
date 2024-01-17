import { Buildings, GithubLogo, Person } from '@phosphor-icons/react'
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
        <h1>Pedro Henrique</h1>
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
            <Person size={18} />
            32 seguidores
          </span>
        </UserInfoContainer>
      </InfoContainer>
    </ProfileContainer>
  )
}

import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 100%;
  height: 10.5rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.profile};
  display: flex;
  gap: 2rem;
  margin-top: -6rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 9999;
`

export const InfoContainer = styled.div`
  width: 100%;
  .firstLineContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    a {
      color: ${(props) => props.theme.blue};
      font-family: Nunito;
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 160%;
      text-transform: uppercase;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      svg {
        margin-bottom: -0.15rem;
      }
    }
  }

  h1 {
    color: ${(props) => props.theme.title};
    font-family: Nunito;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme.text};
    font-family: Nunito;
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
    margin-bottom: 1.5rem;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme.span};
    font-family: Nunito;
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
  }
`

export const PostInfoContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`

import styled from 'styled-components'

export const PostContainer = styled.div`
  height: 16.25rem;
  height: 16.25rem;
  padding: 2rem;
  border-radius: 0.625rem;
  background: ${(props) => props.theme.post};

  > p {
    margin-top: 1.25rem;
    display: inline-block;
    color: ${(props) => props.theme.tex};
    font-family: Nunito;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;

    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`

export const PostTitleContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 0.25rem;
  align-items: start;

  a {
    text-decoration: none;
  }

  h2 {
    color: ${(props) => props.theme.title};
    font-family: Nunito;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 160%;

    &:hover {
      color: ${(props) => props.theme.blue};
      transition: color 0.2s ease;
    }
  }

  span {
    color: ${(props) => props.theme.span};
    font-family: Nunito;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 160%;
    justify-self: end;
    margin-top: 0.25rem;
  }
`

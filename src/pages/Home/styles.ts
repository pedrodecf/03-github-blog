import styled from 'styled-components'

export const HomeContainer = styled.div`
  .loadingBar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

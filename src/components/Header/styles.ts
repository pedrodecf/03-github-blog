import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background-color: ${(props) => props.theme.profile};
  display: flex;
  align-items: center;
  justify-content: center;

  #img1 {
    position: absolute;
    left: 0;
    pointer-events: none;
  }

  #img2 {
    position: absolute;
    right: 0;
    transform: scaleX(-1);
    pointer-events: none;
  }

  #logo {
    margin-bottom: 2.38rem;
  }
`

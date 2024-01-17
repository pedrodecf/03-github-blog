import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  margin-top: 4.5rem;
  margin-bottom: 3rem;

  .labelContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    span {
      color: ${(props) => props.theme.span};
      font-family: Nunito;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 160%;
    }
  }

  input[type='text'] {
    background: ${(props) => props.theme.input};
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 0.375rem;
    width: 100%;
    padding: 0.75rem 1rem;

    font-family: Nunito;
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme.text};

    &::placeholder {
      font-family: Nunito;
      font-size: 1rem;
      font-weight: 400;
      line-height: 160%;
      color: ${(props) => props.theme.label};
    }
  }
`

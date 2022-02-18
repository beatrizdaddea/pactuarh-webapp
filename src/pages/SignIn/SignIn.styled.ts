import styled from 'styled-components'
import { theme } from 'config'

export const Container = styled.div`
  img {
    height: 100vh;

    @media (max-width: 1162px) {
      display: none;
    }
  }
`

export const Content = styled.div`
  position: absolute;
  right: 15%;
  top: 35%;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.black};
    margin: 70px 0 0 0;
  }

  @media (max-width: 1162px) {
    right: 10%;
  }
`

export const Password = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  button {
    background: none;
    border: 0;
    bottom: 0;
    position: absolute;
    right: 0;
    transition: 1s;
    top: 35px;
    width: 30px;
    color: ${theme.colors.black};
    opacity: 45%;

    svg {
      margin: -7px 0 0 -30px;
      position: relative;
    }
  }
`

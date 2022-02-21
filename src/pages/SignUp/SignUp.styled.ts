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
  top: 20%;

  @media (max-width: 1162px) {
    right: 10%;
  }

  p {
    margin: -23px 0 0 20px;
    max-width: 330px;
    font-size: 14px;
  }

  a {
    color: ${theme.colors.neutral[200]};
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

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;

  select {
    width: 345px;
    height: 48px;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 10px 0;
    padding: 0 19px;
    border: 1px solid ${theme.colors.neutral[200]};
    background: transparent;
    color: ${theme.colors.black};

    :focus {
      border: 1px solid ${theme.colors.black};
    }
  }

  label {
    font-size: 14px;
    color: ${theme.colors.black};
  }
`

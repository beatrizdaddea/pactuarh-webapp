import styled from 'styled-components'
import { theme } from 'config'

export const Container = styled.div`
  background: ${theme.colors.black};
  color: ${theme.colors.white};
`

export const Content = styled.div`
  position: absolute;
  right: 20%;
  top: 50%;

  h1 {
    margin: 10px;
  }

  @media (max-width: 1112px) {
    right: 30%;
    top: 50%;
  }
`

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    align-items: center;
    border: 0;
    border-radius: 5px;
    color: ${theme.colors.neutral[100]};
    display: flex;
    font-size: 15px;
    height: 50px;
    justify-content: center;
    margin: 10px 7px 0 0;
    transition: 1s;
    transition: transform 1s;
    width: 360px;
    :hover {
      transform: translateX(0px) scale(1.1);
    }
    @media (max-width: 1299px) {
      background: ${theme.colors.neutral[100]};
    }
  }
  strong {
    font-size: 15px;
    margin-top: 10px;
  }
  a {
    font-weight: bold;
    font-size: 15px;
    margin-top: 17px;
    text-decoration: underline;
  }
  @media (max-width: 1299px) {
    a,
    strong {
      color: ${theme.colors.neutral[100]};
    }
  }
`

export const Password = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  fieldset {
    display: flex;
    flex-direction: column;
  }
  button {
    background: none !important;
    border: 0;
    bottom: 0;
    height: 40px;
    left: 325px;
    position: absolute;
    right: 0;
    transition: 1s;
    top: 28px;
    width: 30px;
    svg {
      margin: -7px 0 0 -30px;
      position: relative;
    }
  }
`

export const Aside = styled.div`
  color: ${theme.colors.neutral[100]};
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-width: 333px;
  max-width: 870px;
  overflow: hidden;
  padding: 32px;
`

export const ContentAside = styled.div`
  h1 {
    font-size: 64px;
    margin: 40px;
    max-width: 470px;
  }
  h2 {
    font-size: 24px;
    margin: 47px 0 0 40px;
    max-width: 10px;
  }
  p {
    font-size: 18px;
    margin: 40px;
    max-width: 470px;
  }
  img {
    height: 100vh;
  }
  @media (max-width: 1112px) {
    display: none;
  }
`

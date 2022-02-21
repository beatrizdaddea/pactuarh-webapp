import styled from 'styled-components'
import { theme } from 'config'

export const Aside = styled.aside`
  width: 321px;
  bottom: 0;
  position: fixed;
  top: 0;
  left: 0;
  background: ${theme.colors.black};
  transition: width 2s;
  z-index: 1;

  button {
    color: ${theme.colors.white};
  }
`

export const Container = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  border-radius: 5px;
  overflow: hidden;
`

export const List = styled.ul`
  list-style: none;
  width: 300px;
  height: 745px;
  padding: 20px;
  margin: 50px 0 0 50px;
  transition: width 2s;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 7px;
    border-radius: 1px;
  }

  h4 {
    margin: 10px 0 8px 10px;
    color: ${theme.colors.white};
    font-weight: 200;

    svg {
      color: ${theme.colors.white};
      margin: 0 10px 0 0;
    }
  }

  li {
    padding-bottom: 17px;
    transition: 0.8s;
    opacity: 86%;

    svg {
      color: ${theme.colors.white};
      margin: 5px 0 0 10px;
    }

    :hover {
      padding: 6px;
      background: ${theme.colors.neutral[500]};
      border-radius: 4px;
    }
  }
`

export const ExitButton = styled.div`
  background: ${theme.colors.neutral[500]};
  padding: 10px 50px 10px 50px;
  margin: 25px 0 15px 80px;
`

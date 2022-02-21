import styled from 'styled-components/macro'
import { theme } from 'config'

export const Navbar = styled.div`
  height: 40px;
  padding: 0px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    margin-left: 20px;
    font-size: 14px;
    background: transparent;
    color: ${theme.colors.white};
    transition: 0.5s;

    :hover {
      color: ${theme.colors.black};
      opacity: 70%;
    }
  }
`

export const ShowSidebar = styled.div`
  button {
    position: absolute;
    top: 30px;
    left: 30px;
    background: none;
    color: ${theme.colors.black};
    border: 0;
  }
`

import styled from 'styled-components'
import { theme } from 'config'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 980px;
  margin: 0 auto;

  @media (max-width: 970px) {
    padding: 0 12%;
  }
`

export const Title = styled.h2`
  font-size: 24px;
  background: white;
  padding: 20px 0;
`

export const Body = styled.body`
  width: 100vw;
  height: 100vh;
`

export const FlexButtons = styled.div`
  display: flex;

  margin: 40px 0;

  button {
    background: #000;
    border: 0;
    width: 120px;
    height: 48px;
    border-radius: 5px;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 10px;
    }

    :last-child {
      margin-left: 10px;
    }
  }
`

export const Table = styled.table`
  /* width: 100%; */
  background: white;
  border-radius: 5px;
`

export const TrTitle = styled.tr`
  margin: 50px 0 !important;
  height: 53px;
  td {
    padding: 20px;
    font-weight: bold;
  }
`

export const TrSecond = styled.tr`
  height: 53px;
  background: white;

  td {
    padding: 20px;
  }

  button {
    background: transparent;
    border: 0;
  }
`

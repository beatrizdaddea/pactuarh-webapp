import styled from 'styled-components'

export const Title = styled.h2`
  font-size: 24px;
  background: white;
  padding: 20px 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 980px;
  margin: 0 auto;
`

export const ContainerCall = styled.div`
  width: 100%;
  height: 239px;

  margin: 40px 0;

  background-color: #000;
  border-radius: 10px;

  color: white;

  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 50px;

  p {
    padding: 10px 0;
  }

  a {
    width: 176px;
    height: 43px;

    background: #ffffff;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
  }
`

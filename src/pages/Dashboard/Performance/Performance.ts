import styled from 'styled-components'
import { theme } from 'config'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
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

export const Test = styled.div`
  margin:25px;
  width: 480px;
  height: 180px;
  background: #FEFDFF;
  border-radius: 5px;
 



}
  
 
div{
  position:absolute;
  padding:14px;
  
}

div:last-child {

}
`
import { Link } from 'react-router-dom'
import Sidebar from 'ui/components/Sidebar'
import * as S from './Home.styled'

export default function Home() {
  return (
    <>
      <Sidebar />
      <S.Title>
        <S.Container>Dashboard</S.Container>
      </S.Title>
      <S.Container>
        <S.ContainerCall>
          <h2>Olá, Luciano 😁</h2>
          <p>Aproveite ao máximo da nossa plataforma e descubra talentos</p>
          <Link to='/planos'>Planos</Link>
        </S.ContainerCall>
      </S.Container>
    </>
  )
}

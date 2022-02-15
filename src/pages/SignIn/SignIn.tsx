import * as S from './SignIn.styled'
import { login } from 'assets'

export function SignIn() {
  return (
    <S.Container>
      <S.Content>
        <h1>Login</h1>
        <S.Form>
          <button type='submit'>Entrar</button>
          <strong>ou</strong>
          <a href=''>Criar</a>
        </S.Form>
      </S.Content>

      <S.Aside>
        <S.ContentAside>
          <img src={login} />
        </S.ContentAside>
      </S.Aside>
    </S.Container>
  )
}

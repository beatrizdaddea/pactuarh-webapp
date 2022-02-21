import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { FiX, FiHome, FiEdit, FiTrendingUp } from 'react-icons/fi'

import * as S from './Menu.styled'

type Props = {
  children?: ReactNode
  onClose: () => void
}

const Menu = ({ children, onClose }: Props) => {
  return (
    <S.Aside>
      <button onClick={onClose}>
        <FiX size={20} />
      </button>
      <S.Container>
        <S.List>
          <li>
            <FiHome size={20} />
            <Link to='/dashboard'>Início</Link>
          </li>
          <h4>
            <FiEdit size={20} />
            Cadastros
          </h4>
          <li>
            <Link to='/cadastro-de-usuario'>Usuário</Link>
          </li>
          <li>
            <Link to='/cadastro-de-empresa'>Empresas</Link>
          </li>
          <li>
            <Link to='/cadastro-de-profissional'>Profissionais</Link>
          </li>
          <li>
            <Link to='/cadastro-de-cargos'>Cargos</Link>
          </li>
          <li>
            <Link to='/cadastro-de-funcoes'>Funções</Link>
          </li>
          <li>
            <Link to='/cadastro-de-beneficios'>Benefícios</Link>
          </li>
          <li>
            <Link to='/cadastro-de-relatorios'>Relatórios</Link>
          </li>
          <li>
            <Link to='/cadastro-de-questionario'>Questionários</Link>
          </li>
          <h4>
            <FiTrendingUp size={20} />
            Avaliação
          </h4>
          <li>
            <Link to='/avaliacao-de-desempenho'>Desempenho</Link>
          </li>
          <li>
            <Link to='/avaliacao-geral'>Geral</Link>
          </li>
          <li>
            <Link to='/desenvolvimento-individual'>Individual</Link>
          </li>
          <li>
            <Link to='/recuperacao-individual'>Recuperação</Link>
          </li>
          <li>
            <Link to='/cadastro-desenvolvimento-individual'>
              Desenvolvimento
            </Link>
          </li>
          <li>
            <Link to='/relatorio'>9box</Link>
          </li>
        </S.List>
        <S.ExitButton>
          <Link to='/'>Sair</Link>
        </S.ExitButton>
      </S.Container>
      {children}
    </S.Aside>
  )
}

export default Menu

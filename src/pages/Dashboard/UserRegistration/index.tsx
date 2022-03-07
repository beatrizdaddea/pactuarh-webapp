import Sidebar from 'ui/components/Sidebar'
import { FiPlus, FiEye, FiEdit, FiTrash } from 'react-icons/fi'
import * as S from './UserRegistration.styled'

export default function UserRegistration() {
  return (
    <S.Body>
      <Sidebar />
      <S.Title>
        <S.Container>Bem vindo, Luciano 😁</S.Container>
      </S.Title>
      <S.Container>
        <S.FlexButtons>
          <button>
            Novo <FiPlus size={18} color='#fff' />
          </button>
          <button>
            Status <FiEye size={18} color='#fff' />
          </button>
        </S.FlexButtons>

        <S.Table>
          <S.TrTitle>
            <td>Nome</td>
            <td>Gênero</td>
            <td>CPF</td>
            <td>RG</td>
          </S.TrTitle>
          <S.TrSecond>
            <td>Giovanna</td>
            <td>Mulher cis</td>
            <td>000.000.000-00</td>
            <td>000.000.000</td>
            <td>
              <button>
                <FiEdit size={18} />
              </button>
            </td>
            <td>
              <button>
                <FiTrash size={18} />
              </button>
            </td>
          </S.TrSecond>
        </S.Table>
      </S.Container>
    </S.Body>
  )
}

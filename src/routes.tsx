// export const SIGN_IN = '/'
// export const SIGN_UP = '/cadastro'
// export const TERMS = '/termos'
// export const DASHBOARD = '/dashboard'
// export const PLANS = '/planos'
// export const USER_REGISTER = '/cadastro-de-usuario'
// export const USER_STATUS = '/status-do-usuario'
// export const COMPANY_REGISTER = '/cadastro-de-empresa'
// export const PROFESSIONAL_REGISTER = '/cadastro-de-profissional'
// export const POSITION_REGISTER = '/cadastro-de-cargos'
// export const FUNCTION_REGISTER = '/cadastro-de-funcoes'
// export const BENEFITS_REGISTER = '/cadastro-de-beneficios'
// export const REPORTS_REGISTER = '/cadastro-de-relatorios'
// export const PERFORMANCE_REGISTER = '/cadastro-de-desempenho'
// export const INDIVIDUAL_REGISTER = '/cadastro-desenvolvimento-individual'
// export const PERFORMANCE_EVALUATION = '/avaliacao-de-desempenho'
// export const GENERAL_EVALUATION = '/avaliacao-geral'
// export const INDIVIDUAL_DEVELOPMENT = '/desenvolvimento-individual'
// export const INDIVIDUAL_RECOVERY = '/recuperacao-individual'
// export const REPORT = '/relatorio'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import SignIn from './pages/SignIn'
import SignUp from 'pages/SignUp'
import Terms from 'pages/Terms/Terms'
import Home from 'pages/Dashboard/Home'

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/cadastro' element={<SignUp />} />
        <Route path='/termos' element={<Terms />} />
        <Route path='/dashboard' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp

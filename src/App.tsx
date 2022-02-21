import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Dashboard, SignIn, SignUp, Terms } from 'pages'
import { DASHBOARD, SIGN_IN, SIGN_UP, TERMS } from 'routes'
import { GlobalStyle } from 'ui'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={SIGN_IN} element={<SignIn />} />
        <Route path={SIGN_UP} element={<SignUp />} />
        <Route path={TERMS} element={<Terms />} />
        <Route path={DASHBOARD} element={<Dashboard />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App

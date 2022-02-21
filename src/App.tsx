import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { SignIn, SignUp, Terms } from 'pages'
import { SIGN_IN, SIGN_UP, TERMS } from 'routes'
import { GlobalStyle } from 'ui'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={SIGN_IN} element={<SignIn />} />
        <Route path={SIGN_UP} element={<SignUp />} />
        <Route path={TERMS} element={<Terms />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App

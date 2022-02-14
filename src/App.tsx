import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { SignIn } from 'pages'
import { SIGN_IN } from 'routes'
import { GlobalStyle } from 'ui'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={SIGN_IN} element={<SignIn />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App

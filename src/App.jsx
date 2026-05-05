import { useState } from 'react'
import './app.css'
import {Header} from './components/Header'
import { PrincipalInfo } from './components/principalInfo'
function App() {
  return (
    <>
      <Header/>
      <body>
        <PrincipalInfo/>
      </body>
    </>
    
  )
}

export default App

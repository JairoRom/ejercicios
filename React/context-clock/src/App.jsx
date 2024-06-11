
import { useState } from 'react'
import { LanguageContext } from './Language'
import Reloj from './Reloj'

function App() {

  const[selectedLanguage,setLanguage]=useState('en')
  function handleSetLanguage(language){
    setLanguage(language)
  }

  return (
    <div>
      <button onClick={()=>handleSetLanguage('sp')}>SP</button>
      <button onClick={()=>handleSetLanguage('en')} >EN</button>
      <LanguageContext.Provider value={selectedLanguage}>
        <Reloj />
      </LanguageContext.Provider>
    </div>
  )
}

export default App

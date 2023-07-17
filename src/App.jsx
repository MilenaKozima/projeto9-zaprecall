import { useState } from 'react'
import Geral from './components/Geral'
import cards from "./cards" 
import Concluido from './components/Concluido'


export default function App() {

  return (
    <>
      <Geral cards={cards}/>
    </>
  )
}


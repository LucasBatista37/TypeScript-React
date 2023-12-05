import './App.css'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import DestruturingProps, { Category } from './components/DestruturingProps'
import State from './components/State'
import React, { createContext } from 'react'

type textOrNull = string | null

interface IAppContext {
  languege: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  const name: string = 'Lucas Batista'
  const age: number = 17
  const trabalhando: boolean = true

  const nome = (name: string): string => {
    return `Olá, ${name}!`;
  }

  const testTypeText: textOrNull = "Esse é um texto"
  let textTypeNull: textOrNull = null
  textTypeNull = "Opa"

  type fixed = "Oi" | "Olá" | "Eae"
  const fixedTest: fixed = "Oi"

  const Context: IAppContext = {
    languege: "JavaScript",
    framework: "Express",
    projects: 5
  }

  return (
    <AppContext.Provider value={Context}>
      <h1>React com TypeScript</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {trabalhando && <p>Está trabalhando</p>}
      <h3>{nome(name)}</h3>
      <FirstComponent />
      <SecondComponent name="João" />
      <DestruturingProps title='Primeiro Componente' content='Destruturing' commentsQty={10} tags={["Js", "Ts"]} category={Category.JS} />
      <DestruturingProps title='Segundo Componente' content='Destruturing' commentsQty={10} tags={["Python"]} category={Category.P} />
      <DestruturingProps title='Terceiro Componente' content='Destruturing' commentsQty={10} tags={["React", "Vue"]} category={Category.TS} />
      <State />
      {testTypeText && <p>Tem texto na variável</p>}
      {textTypeNull && <p>Tem texto na variável</p>}
    </AppContext.Provider>
  )
}

export default App

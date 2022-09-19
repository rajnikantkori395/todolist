import React, { createContext } from 'react'
import {Section } from './section'
const languages=['javaScript','Python','jbjabd','jnhjsdanif','iubisabif']
export const LangContext= createContext([])
export const Contextapi = () => {


  return (
    <div>
        <LangContext.Provider value={languages}>
        <Section />
        </LangContext.Provider>
        </div>
  )
}


import React from 'react'
import styled from 'styled-components'
import { Header } from './Header'
import { MainPage } from './MainPage'
import { About } from './About'
import { Work } from './Work'
import { Contact } from './Contact'
import { Footer } from './Footer'
import homeTransition from '../utils/homeTransition'

const Home = () => {
  return (
    <SDiv>
      <Header switch='home' />
      <MainPage />
      <About />
      <Work />
      <Contact />
      <Footer />
    </SDiv>
  )
}


const SDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #f5f3f4;
  overflow: hidden;
`

export const THome = () => {
  return homeTransition(Home);
}
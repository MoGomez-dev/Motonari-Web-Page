import React from 'react'
import blackJackImage from '../img/blackjack-app.png'
import timerAppImage from '../img/timerApp.png'
import pegasusHp from '../img/pegasus-hp.png'
import todoApp from '../img/todo-app.png'
import standings from '../img/se-league-standings.png'
import motonariWebPage from '../img/motonari-web-page.png'
import { WorkElement } from './WorkElement'
import styled from 'styled-components'


export const Work = () => {
  return (
    <Container id='works'>
      <h2>Work</h2>
      <hr />
      <div id='work'>
        <WorkElement img={timerAppImage} appName='Timer App' colorCode={'#fff4cb'} link='/work1' transitionX={-100}/>
        <WorkElement img={blackJackImage} appName='BlackJack App' colorCode={'#fce4c8'} link='/work2' transitionX={100}/>
        <WorkElement img={standings} appName='セ・リーグ順位表アプリ' colorCode={'#ffcccc'} link='/work3' transitionX={-100}/>
        <WorkElement img={todoApp} appName='Todo App' colorCode={'#ffa2a2'} link='/work4' transitionX={100}/>
        <WorkElement img={pegasusHp} appName='草野球チームペガサス ホームページ' colorCode={'#fdd2eb'} link='/work5' transitionX={-100}/>
        <WorkElement img={motonariWebPage} appName='Motonari Web Page' colorCode={'#d2fddf'} link='/work6' transitionX={100}/>
      </div>
    </Container>
    
  )
}

const Container = styled.div`
  /* height: 100vh; */
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #fff4cb;
  overflow: hidden;
  margin: 0 auto;
  padding-top: 50px ;
  hr {
    margin-bottom: 20px;
    margin: 0 15%;
  }

  h2 {
    font-size: 35px;
    font-family: 'Noto Serif JP', serif;
    margin: 0 15%;
    color: #070000;
  }

`
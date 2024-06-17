import React from 'react'
import styled from 'styled-components'
import pegasusHpImage from '../img/pegasus-hp.png'
import { Header } from './Header'
import transition from '../utils/transition'

const Work5 = () => {
  return (
    <section>
      <Header switch='work'/>
      <SDiv>
        <img src={pegasusHpImage} />
        <article>
          <h1>草野球チームペガサス ホームページ</h1>
          <p>使用技術:JavaScript, React, Firebase, Redux、Material UI</p>
          <p>url:<a href='https://pegasus-hp.firebaseapp.com/'>pegasus-hp.firebaseapp.com</a></p>
          <p>
            所属している草野球チームのホームページを練習で作ってみました。管理者ログインすると、Topページの一部のテキストや、
            選手の情報、試合結果、スケジュールなどをFirebaseで管理し、変更できるようにしました。
          </p>
        </article>
      </SDiv>
    </section>
    
  )
}

const SDiv = styled.div`
  height:100vh;
  width: 100%;
  background-color: #fdd2eb;
  margin: 0 auto;
  display:flex;
  justify-content: center;
  align-items: center;

  img{
    width: 40%;
    margin-right: 2%;
  }

  article{
    width: 40%;
    margin-left: 2%;

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding-top: 50px;

    img {
      width: 80%;
    }

    article {
      width: 80%;
    }
  }
`

export const TWork5 = () => {
  return transition(Work5);
}
import React from 'react'
import styled from 'styled-components'
import timerAppImage from '../img/timerApp.png'
import { Header } from './Header'
import transition from '../utils/transition'

const Work1 = () => {
  return (
    <section>
      <Header switch='work'/>
      <SDiv>
        <img src={timerAppImage} />
        <article>
          <h1>タイマーアプリ</h1>
          <p>使用技術:JavaScript</p>
          <p>url:<a href='https://timer-app-azure.vercel.app/'>timer-app-azure.vercel.app</a></p>
          <p>
            指定した時間を数えてくれるタイマーアプリをバニラjavascriptで作りました。５時間ぐらいで完成しました。
            遊びでFontボタンを押したらフォントがランダムで変わるようにしてみました。
            最初はfor文のなかでsetTimeoutを用いてカウントダウンしようと思いましたが、挙動がうまく行かず、setIntervalで作成しました。
          </p>
        </article>
      </SDiv>
    </section>
  )
}

const SDiv = styled.div`
  height:100vh;
  width: 100%;
  background-color: #fff4cb;
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
    padding-top: 30px;

    img {
      width: 80%;
      margin-top: 30px;
    }

    article {
      width: 80%;
    }
  }
`

export const TWork1 = () => {
  return transition(Work1);
}
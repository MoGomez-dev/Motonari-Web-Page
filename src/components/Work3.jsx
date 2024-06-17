import React from 'react'
import styled from 'styled-components'
import standingsImage from '../img/se-league-standings.png'
import { Header } from './Header'
import transition from '../utils/transition'

const Work3 = () => {
  return (
    <section>
      <Header switch='work'/>
      <SDiv>
        <img src={standingsImage} />
        <article>
          <h1>セ・リーグ順位表アプリ</h1>
          <p>使用技術:JavaScript, React, Firebase、Material UI</p>
          <p>url:<a href='https://se-league-standings.web.app/'>se-league-standings.web.app</a></p>
          <p>
            応援している中日ドラゴンズが調子良かったので、Firebaseの練習も兼ねて作成しました
            今はすっかり調子を落としてしまいました。
            管理者のところからログインすると勝敗の数字を変更できるようにしました。勝率と順位は自動で計算するようにしました。
            FirebaseのRealtime Updateで、数字を変更したらすぐに反映されるようにしました。
          </p>
        </article>
      </SDiv>
    </section>
    
  )
}

const SDiv = styled.div`
  height:100vh;
  width: 100%;
  background-color: #ffcccc;
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
    padding-top: 70px;

    img {
      width: 80%;
    }

    article {
      width: 80%;
    }
  }
`

export const TWork3 = () => {
  return transition(Work3);
}
import React from 'react'
import styled from 'styled-components'
import blackjackImage from '../img/blackjack-app.png'
import { Header } from './Header'
import transition from '../utils/transition'

const Work2 = () => {
  return (
    <section>
      <Header switch='work'/>
      <SDiv>
        <img src={blackjackImage} />
        <article>
          <h1>Black Jack App</h1>
          <p>使用技術:JavaScript, React, Deck of Card Api</p>
          <p>url:<a href='https://simple-blackjack-three.vercel.app/'>simple-blackjack-three.vercel.app</a></p>
          <p>
            Deck of Cards API というAPIをフェッチして、Reactでブラックジャックのアプリを作りました。20時間ほどで完成しました。
            ディーラーが17を超えるまでカードを引き続けるというシステムの実装や、Aを1とも11とも数えていいというロジックの実装でかなり時間がかかってしまいました。
          </p>
        </article>
      </SDiv>
    </section>
    
  )
}

const SDiv = styled.div`
  height:100vh;
  width: 100%;
  background-color: #fce4c8;
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
      margin-top: 40px;
    }

    article {
      width: 80%;
    }
  }
`

export const TWork2 = () => {
  return transition(Work2);
}
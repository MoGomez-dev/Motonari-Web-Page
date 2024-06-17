import React from 'react'
import styled from 'styled-components'
import motonariWebPage from '../img/motonari-web-page.png'
import { Header } from './Header'
import transition from '../utils/transition'

const Work6 = () => {
  return (
    <section>
      <Header switch='work'/>
      <SDiv>
        <img src={motonariWebPage} />
        <article>
          <h1>Motonari Web Page</h1>
          <p>使用技術:JavaScript, React, framer motion</p>
          <p>
            framer motion を使用したアニメーションに挑戦してみました。ページ遷移のアニメーションに手こずりました。ヘッダーのロゴは、ウェブで見つけたフリーフォントに色を付けてロゴっぽくしてみました。
          </p>
        </article>
      </SDiv>
    </section>
    
  )
}

const SDiv = styled.div`
  height:100vh;
  width: 100%;
  background-color: #d2fddf;
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
    }

    article {
      width: 80%;
    }
  }
`

export const TWork6 = () => {
  return transition(Work6);
}
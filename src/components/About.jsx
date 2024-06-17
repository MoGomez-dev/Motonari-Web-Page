import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const About = () => {
  return (
    <Container id='about'>
      <MotionedDiv initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1}} viewport={{once: true}}>
        <h2>About</h2>
        <hr />
        <AboutWrapper>
          <p>profile</p>
          <ul>
            <li><Span>名前</Span>Motonari</li>
            <li><Span>生年月日</Span>2002年12月13日</li>
            <li><Span>出身・在住</Span>愛知</li>
            <li><Span>趣味</Span>野球、野球観戦,サッカー観戦、麻雀,映画</li>
            <li><Span>使う技術</Span>HTML,CSS,JavaScript,React,Redux,firebase</li>
          </ul>
        </AboutWrapper>
        <Article>
          <p>こんにちは、Motonariです。</p>
          <p>アルバイトをしながらフロントエンドエンジニアになるために独学で勉強しています。</p>
          <p>周りの身近な人が抱えている課題をエンジニアリングで解決できるようなエンジニアになりたいと思っています。</p>
        </Article>
      </MotionedDiv>
    </Container>

  )
}


const Container = styled.div`
  width: 100%;
  background-color:  #f6d8fc;
`
const MotionedDiv = styled(motion.div)`
  
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0 50px 0;
  
  color: #131313;

  hr {
    margin-bottom: 20px;
    width: 70%;
  }

  h2 {
    width: 70%;
    font-size: 35px;
    font-family: 'Noto Serif JP', serif;
    margin: 0 5px;
  }

  @media screen and (max-width: 800px) {
    /* margin-top: 100px; */
    width: 90%;
  }
`

const AboutWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
  font-family: 'Noto Serif JP', serif;

  p {
    margin: 0;
    font-size: 23px;
  }

  ul {
    list-style: none;
    margin-top: 20px;
    padding-left: 10px;

    li {
      padding-bottom: 10px;
    }
  }

  @media screen and (max-width: 800px) {
    display: block;
    font-size: 16px;
  }
`

const Span = styled.span`
  display: inline-block;
  width: 120px;
  @media screen and (max-width: 800px) {
    width: 95px;
  }
`

const Article = styled.div`
width: 70%;
  font-family: 'Noto Serif JP', serif;
  font-size: 20px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`
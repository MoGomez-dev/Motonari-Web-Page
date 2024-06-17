import React from 'react'
import styled from 'styled-components'
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { motion } from 'framer-motion'

export const Contact = () => {
  return (
    <Container id='contact'>
      <MotionedDiv initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1}} viewport={{once: true}}>
        <h2>Contact</h2>
        <hr />
        <ContactWrapper >
          <p>最後までご覧いただきありがとうございます。興味を持っていただけましたら、下記のX(旧Twitter)のDMまたはメールアドレスまでお問い合わせください。</p>
          <ul>
            <li>
              <CiMail />: motonadev@gmail.com
            </li>
            <li>
              <a href='https://twitter.com/motonadev'>
                <FaXTwitter />: @motonadev
              </a>
            </li>
          </ul>
        </ContactWrapper>
      </MotionedDiv>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background-color: #dedcff;
`

const MotionedDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
  margin: 0 auto;

  hr {
    margin-bottom: 20px;
    color: #131313;
    width: 70%;
  }

  h2 {
    width: 70%;
    font-size: 35px;
    font-family: 'Noto Serif JP', serif;
    margin: 0 5px;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`

const ContactWrapper = styled.div`
  width: 70%;
  p {
    font-size: 20px;
  }
  ul {
    width: fit-content;
    margin: 30px auto;
    list-style: none;
    font-size: 30px;
    color: #000;
    padding-left: 0;
     li {
      margin-bottom: 15px;
      a{
        text-decoration: none;
        color: #000;
      }
    }
  }

  @media screen and (max-width: 800px) {
    p {
      font-size: 16px;
    }
    ul {
      font-size: 20px;
    }
  }
`
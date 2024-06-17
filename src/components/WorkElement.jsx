import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const WorkElement = ( {img, appName, colorCode, link, transitionX} ) => {
  return (
    <SDiv colorCode={colorCode}>
      <motion.div initial={{opacity: 0.5, x: transitionX}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1.2 }} viewport={{once: true}}>
        <Link to={link} >
          <img src={img} alt={appName} />
          <p>{appName}</p>
        </Link>
      </motion.div>
    </SDiv>
  )
}

const SDiv = styled.div`
    width: 100%;
    background-color: ${(props) => (props.colorCode)};
    color: #000000;
    font-weight: bold;
    margin: 0 auto;
    padding: 30px 0;
    text-align: center;

    img {
        width: 60%;
        height: 50%;
        cursor: pointer;
    }

    p {
        font-size: 26px;
        margin: 5px 0;
        cursor: pointer;
    }

    a{
      text-decoration: none;
      color: #000000;
    }

    @media screen and (max-width: 800px){
      img {
        width: 70%;
      }
      p {
        font-size: 18px;
      }
    }
    @media screen and (max-width: 500px){
      p {
        font-size: 14px;
      }
    }
`
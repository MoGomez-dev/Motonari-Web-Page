import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <FooterContainer >
        <h4>Thank you for visiting my website.</h4>
        <motion.button 
          whileHover={{y: -15}}
          transition={{duration: 0.7 ,ease: 'linear'}}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}><IoIosArrowUp />
        </motion.button>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  height: 400px;
  width: 100%;
  background-color: #57b399;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h4 {
    font-size: 32px;
  }

  button {
    padding: 10px 15px;
    font-size: 45px;
    border-radius: 9999px;
  }

  @media screen and (max-width: 800px) {
    h4 {
      width: 80%;
    }
  }
`
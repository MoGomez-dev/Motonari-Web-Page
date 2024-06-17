import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MyImage from '../img/me.jpg'

export const MainPage = () => {
  const [value, setValue] = useState('');
  useEffect(() => {
    typing(`Motonari\nWeb\nDeveloper`);
  }, [])
  const typing = (sentence) => {
    const arr = [...sentence];
    arr.map((character, index) => {
      setTimeout(() => {
        setValue((prev) => {
          return prev += character;
        });
      }, 150 * ++ index)
    })
  }
  
  return (
    <HomeWrapper id='top'>
      <div className='imageArea'>
      <img src={MyImage} alt="motonari" className='selfie' />
      </div>
      <div className='textArea'>
        <h2>{value}</h2>
      </div>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #cefff8;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  
  h2 {
    margin: 15px;
    white-space: pre-wrap;
    font-family: 'Noto Serif JP', serif;
    line-height: 100px;

    &::after {
      content: '';
      padding-left: 3px;
      border-right: 4px solid;
      animation: flashing 0.6s none infinite alternate;
    }
  }

  .imageArea {
    width: 36%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .selfie {
    width: 72%;
    /* width: 600px; */
    border-radius: 9999px;
    animation: fadeInImage 1.5s;
  }

  .textArea {
    width: 45%;
  }

  @keyframes flashing {
    0%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }

  @keyframes fadeInImage {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }

  @media screen and (max-width: 959px){
    font-size: 45px;
    height: 80vh;
    .imageArea {
      width: 40%;
    }
    .selfie {
      width: 100%
    }
  }
  @media screen and (max-width: 800px){
    padding-top: 90px;
    flex-direction: column;
    width: 100%;
    font-size: 40px;
    .imageArea {
      
      height: 40%;
      width: auto;
    }
    .selfie {
      width: 45%;
    }
    .textArea {
      margin-top: 30px;
      height: 40%;
      width: fit-content;
    }
    h2 {
      line-height: 60px;
    }
  }
  @media screen and (max-width: 480px){
    padding-top: 0;
    flex-direction: column;
    font-size: 30px;
    .imageArea {
      width: auto;
    }
    .selfie {
      width: 70%;
    }
    .textArea {
      /* margin-right: 50px; */
      margin: 0 auto;
      height: 20%;
    }
  }
`
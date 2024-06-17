import React from 'react'
import styled from 'styled-components'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import MyFont from '../fonts/Fanda_Sans.TTF'
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';

export const Header = (props) => {

  const homeHeader = [{
      url:'top',
      type: 'scroll',
      display: 'Top'
    },{
      url:'about',
      type: 'scroll',
      display: 'About'
    },{
      url:'works',
      type: 'scroll',
      display: 'Work'
    },{
      url:'contact',
      type: 'scroll',
      display: 'Contact'
    },{
      url:'https://twitter.com/motonadev',
      type: 'url',
      display: <FaXTwitter />
    },{
      url:'https://github.com/MoGomez-dev',
      type: 'url',
      display: <FaGithub />
    },
  ]

  const workHeader = [{
    url:'/',
    display: 'Topへ戻る'
  },{
    url:'https://twitter.com/motonadev',
    display: <FaXTwitter />
  },{
    url:'https://github.com/MoGomez-dev',
    display: <FaGithub />
  },]
  
  return (
    <HeaderContainer>
      <HeaderWrapper >
        <h1><span>M</span>otonari</h1>
        <ul>
          {props.switch == 'home' && <>{homeHeader.map((e) => {
            if(e.type == 'url'){
              return <li><Link to={e.url}>{e.display}</Link></li>
            }
            if (e.type == 'scroll'){
              return <li><Scroll to={e.url} smooth={true} duration={500}>{e.display}</Scroll></li>
            }})}</>}
          {props.switch == 'work' && <>{workHeader.map((e) => (
              <li><Link to={e.url}>{e.display}</Link></li>
          ))}</>}
        </ul>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

const HeaderWrapper = styled.nav`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 40px;
    font-weight: normal;
    color: #808080;
    font-family: 'Fanda', sans-serif;

    span {
      color: #57b399
    }
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;

    li {
      padding-right: 15px;
      transition: all 0.2s; 

      &:hover {
        color: #636363;
        transform: scale(1.2);
      }

      a {
        color: #000000;
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 620px) {
    justify-content: space-around;
      h1 {
        font-size: 25px;
      }
      ul {
        li {
          padding-right: 5px;
          a {
          font-size: 16px;
          }
        }
      }
    }
  @media screen and (max-width: 500px) {
    justify-content: center;
      h1 {
        font-size: 22px;
      }
      ul {
        li {
          padding-right: 5px;
          a {
          font-size: 14px;
          }
        }
      }
    }
    @font-face {
      font-family: 'Fanda';
      src: url(${MyFont}) format('truetype');
    }
  `

const HeaderContainer = styled.header`
  position: fixed;
  height: 100px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  justify-content: center;
  align-items: center;
`
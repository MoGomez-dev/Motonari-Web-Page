import React from 'react'
import styled from 'styled-components'
import todoApp from '../img/todo-app.png'
import { Header } from './Header'
import transition from '../utils/transition'

const Work4 = () => {
  return (
    <section>
      <Header switch='work'/>
      <SDiv>
        <img src={todoApp} />
        <article>
          <h1>ToDo App</h1>
          <p>使用技術:JavaScript, React, Firebase</p>
          <p>url:<a href='https://todo-74a79.web.app/'>todo-74a79.web.app</a></p>
          <p>
            firebaseを使ってTodoアプリを作成しました。FirebaseのAuthenticationを使って、Googleでログインできるようにして、
            アカウントごとにTodoを管理するようにしました。Firestoreには、Todo、期限、タイムスタンプ、ログインしているUserのIDを保存するようにしました。
            また、期限とタイムスタンプをFirestoreで管理し、Todoリストには期限が近い順で表示されるように、期限を過ぎたものは赤色で表示されるようにしました。
          </p>
        </article>
      </SDiv>
    </section>
    
  )
}

const SDiv = styled.div`
  height:100vh;
  width: 100%;
  background-color: #ffa2a2;
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
    padding-top: 50px;

    img {
      width: 80%;
    }

    article {
      width: 80%;
    }
  }
`

export const TWork4 = () => {
  return transition(Work4);
}
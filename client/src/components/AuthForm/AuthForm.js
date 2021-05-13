import React, { useState } from 'react'

import styles from './AuthPage.module.css'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)

  const [formLogin, setFormLogin] = useState({
    email: '',
    password: '',
  })

  const [formRegistration, setFormRegistration] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  })

  const changeHandlerLogin = e => {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value })
  }

  const changeHandlerRegistration = e => {
    setFormRegistration({
      ...formRegistration,
      [e.target.name]: e.target.value,
    })
  }

  if (isLogin) {
    return (
      <div>
        <input
          className={styles.input}
          type="text"
          name="email"
          value={formLogin.email}
          required
          onChange={changeHandlerLogin}
          placeholder="Your email"
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          value={formLogin.password}
          required
          onChange={changeHandlerLogin}
          placeholder="Enter password"
        />
        <button type="button" onClick={() => setIsLogin(false)}>
          Registration
        </button>
      </div>
    )
  }

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={formRegistration.name}
        required
        onChange={changeHandlerRegistration}
        placeholder="Your name"
      />
      <input
        className={styles.input}
        type="text"
        name="surname"
        value={formRegistration.surname}
        required
        onChange={changeHandlerRegistration}
        placeholder="Your surname"
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        value={formRegistration.email}
        required
        onChange={changeHandlerRegistration}
        placeholder="Your email"
      />
      <input
        className={styles.input}
        type="password"
        name="password"
        value={formRegistration.password}
        required
        onChange={changeHandlerRegistration}
        placeholder="Enter password"
      />
      <button type="button" onClick={() => setIsLogin(true)}>
        Login
      </button>
    </div>
  )
}

export default AuthForm

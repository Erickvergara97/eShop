import React from 'react'
import styles from './auth.module.scss'
import Card from '../../components/card/Card'
import resetImg from '../../assets/forgot.png'
import { Link } from 'react-router-dom'

export default function Reset() {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
          <img src={resetImg} alt="Reset Password" width="400"/>
      </div>
      <Card>
          <div className={styles.form}>
              <h2>Reset Password</h2>
              <form action="">
                <input type="text" placeholder='Email' required />
                <button className='--btn --btn-primary --btn-block'>Reset Password</button>
                <div className={styles.links}>
                  <p>
                    <Link to="/login">Login</Link>
                  </p>
                  <p>
                    <Link to="/register">- Register</Link>
                  </p>
                </div>
              </form>
          </div>
      </Card>
    </section>
  )
}

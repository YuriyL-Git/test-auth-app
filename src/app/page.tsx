import Image from 'next/image'
import styles from './page.module.css'
import { LoginButton } from './login-button/login-button'

export default function Home() {
  return (
    <main style={{
      height: '100vh'
    }}>
      <LoginButton/>
    </main>
  )
}

'use client'

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>
      <Image 
        src="/bg.jpg"
        fill={true}
        alt="background"
      />
       <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          <p >Milind Palaria -</p>
          <p >Milind Palaria -</p>
        </div>
      </div>
    </main>
  )
}
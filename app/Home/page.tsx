import React from 'react'
import Featured from "../components/Featured/Featured";
import CardList from "../components/CardList/CardList";
import CategoryList from "../components/CategoryList/CatogoryList";
import styles from './homepage.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <CardList/>
      </div>
    
    </div>
  )
}

export default Home
import Header from "./components/header";
import styles from './index.module.scss'
/* 
home 页面
*/
const Home: React.FC = () => {
    return (
        <div className={styles.home}>
        <Header />
        home
        </div>
    )
  };
  
  export default Home;
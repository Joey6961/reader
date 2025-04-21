import React from "react";
import { Link } from "react-router-dom";
import styles from './index.module.scss'
/* 
 */
const Header:React.FC=React.memo(()=>{
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <h1>慕课书城</h1>
            </div>
            <div className={styles.right}>
                <Link to='/search'>
                    <i className="iconfont">&#xe60e;</i>
                </Link>
                <Link to='/shelf'>
                    <i className="iconfont">&#xe60c;</i>
                </Link>
            </div> 

        </div>
    )
})

export default Header;
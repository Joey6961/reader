import React from "react";
import Header from "./components/header";
import styles from './index.module.scss';
// import AxiosInstance from "@/hooks/useRequest/axiosInstance";
import api from "./api";
import { useRequest } from "@/hooks/useRequest";

/* 
home 页面
*/

const Home: React.FC = () => {
    // React.useEffect(()=>{
    //     AxiosInstance.request({url:'/api/v1/home'})
    // },[])
    const {data,error}=useRequest({url:api.getHomeData})
    if(error){
        return (
            <div>error</div>
        )
    }
    if(!data){
        return (
            <div>loading</div>
        )
    }
    return (
        <div className={styles.home}>
        <Header />
        home
        </div>
    )
  };
  
  export default Home;
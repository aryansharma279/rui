import React,{useState,useEffect} from "react";
import { ProgressBar, RevolvingDot,ThreeDots } from "react-loader-spinner";
import "./Content.css";

const Content = () => {
    let [loading,setLoading] = useState(true);
    let [data, setData] =useState([]);
    console.log(data);
    setTimeout(()=>{
        setData("data fetched");
        setLoading(false);
    },3000)
    console.log(loading);
  return (
    <div className="main">
      {loading?<ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />:<h1>{data}</h1>}
      
    </div>
  );
};

export default Content;

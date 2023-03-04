import React, { useState, useEffect } from "react";
import { ProgressBar, RevolvingDot, ThreeDots } from "react-loader-spinner";
import "./Content.css";
import Data from "../Data/Data";
import Grid from "@mui/material/Grid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Content = () => {
  let [loading, setLoading] = useState(true);
  let [data, setData] = useState([]);
  useEffect(() => {
    let getDataApi = async () => {
      let endPoint = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001`
      );
      let res = await endPoint.json();
      setData(res);
      setLoading(false);
      toast.success("Data Fetched");
      console.log(res);
    };
    getDataApi();
  }, []);

  console.log("data", data);
  console.log(loading);
  return (
    <div className="main">
    <ToastContainer/>
      {loading ? (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        data.map((d) => {
          return (
            <Grid key={d.id} item xs={3}>
              <Data name={d.firstName} mail={d.email} img={d.imageUrl} />
            </Grid>
          );
        })
      )}
    </div>
  );
};

export default Content;

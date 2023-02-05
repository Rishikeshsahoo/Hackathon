import { Box, Button, IconButton, MenuItem, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import ProgressCircle from "../../components/ProgressCircle";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const UserDashboard = () => {
  const theme = useTheme();
  const location=useLocation()
  const colors = tokens(theme.palette.mode);
  const { AllData } = useSelector((state) => state.dashboard)
  const [cvss,setCvss]=useState()
  const [XSS,setXSS]=useState()

  useEffect(()=>{
    const mainData={};
    AllData.forEach((item)=>{
      if(item.username===location.state){
        axios.post("http://localhost:4000/users/getCvss",item)
          .then((res)=>{
            console.log(res.data.data)
            setCvss(res.data.data.data)
          })

        item.links.forEach((link)=>{
          console.log("link",link)
          let urls = ["http://www.youtube.com","http://www.facebook.com","http://www.baidu.com","http://www.yahoo.com","http://www.amazon.com","http://www.wikipedia.org","http://www.qq.com","http://www.google.co.in","http://www.twitter.com","http://www.live.com"]

          axios.post("http://localhost:4000/users/getXss",{url:urls[Math.floor(Math.random()*8)]})
          .then((res)=>{
            console.log(res.data.data)
            // setCvss(res.data.data.data)
          })
        })
        

      }

    })

  },[])
  return (
    <Box m="20px">
      {/* HEADER */}

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        {/* ROW 2 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recently Visited Urls
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => {
            let score = transaction.cvss_score
            let status = "danger"
            let color = "red"
            if(score >= 7){
              status = "Safe"
              color = "green"

            }
            else if(score <= 5 && score > 3 ){
              status = "Good"
              color = "Yellow"
            }
            else if(score < 3)
            status = "Low"
            return (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box backgroundColor={color}
                p="5px 10px"
                borderRadius="4px"
                onClick={()=>console.log("clicled")}
                style={{cursor:"pointer"}}>{status}</Box>
            </Box>
            )
          })}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            CVSS Score
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle progress={cvss/10} size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              Your current CVSS score is {cvss && cvss.toFixed(3)}
            </Typography>
            {/* <Typography>Includes extra misc expenditures and costs</Typography> */}
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Open Ports Right now
            <ul className="mt-10">
            <li>
              TCP 20
            </li>
            </ul>
          </Typography>

        </Box>
      </Box>
    </Box>
  );
};

export default UserDashboard;

import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import LoginForm from "../../components/LoginForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const theme = useTheme();
  const navigate=useNavigate()
  const colors = tokens(theme.palette.mode);
  const [phishing,setPhishing]=useState({})
  const {AllData} = useSelector((state) => state.dashboard)
  useEffect(()=>{

    AllData.forEach((item)=>{
      item.links.forEach((link)=>{
        axios.post("http://localhost:4000/users/getPhishing",{"PctExtHyperlinks":link.PctExtHyperlinks,"PctExtResourceUrls":link.PctExtResourceUrls,"PctNullSelfRedirectHyperlinks":link.PctNullSelfRedirectHyperlinks,"NumNumericChars":link.NumNumericChars})
        .then((response)=>{console.log(response.data)})
      })
    })

    axios.post("http://localhost:4000/users/getPhishing",{})
    .then((response)=>{console.log(response.data)})
    .catch((err)=>{console.log(err.message)})
  },[])
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

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
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
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
              Recent Transactions
            </Typography>
          </Box>
          {AllData && AllData.map((data, i) => {
            let score = 7
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
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
               
                <Typography color={colors.grey[100]}>
                  {data.username}
                </Typography>
              </Box>
              <Box backgroundColor={color}
                p="5px 10px"
                borderRadius="4px"
                onClick={()=>console.log("clicled")}
                style={{cursor:"pointer"}}>{status}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
                onClick={()=>{navigate('/UserApp/',{state:data.username})}}
                style={{cursor:"pointer"}}
              >
                View
              </Box>
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
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
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
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default Dashboard;

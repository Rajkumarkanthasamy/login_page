import { AppBar, Box, Button, Container, Grid, IconButton, Link, ListItem, Stack, TextField, Typography ,} from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import Paper from '@mui/material/Paper';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const Root =styled.div `
display:flex;
min-height:100vh;
`

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:"#1A2027",
    padding: "2px",
    textAlign: 'center',
    color: "#000"
  }));
    
const LoginPage=()=>{

      const [userDetails, setuserDetails]=useState({userName:"", email:"", password:""}) 
      const [buttonState, setbuttonState] = useState(true)
      //email
      const isGmail =  /\S+@\S+\.\S+/
      //password
      const isContainsUppercase = /^(?=.*[A-Z])/;
      const isContainsNumber = /^(?=.*[0-9])/;
      const isContainsSymbol =  /^(?=.*[~`!@#/$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
      //Name
      const isLenghtForName =/^.{4,20}$/


      useEffect(()=>{
        if(!userDetails.email=="" && !userDetails.userName=="" , !userDetails.password == ""){

          if(isLenghtForName.test(userDetails.userName)){
              if(isGmail.test(userDetails.email)){
                  if(isContainsNumber.test(userDetails.password) && isContainsSymbol.test(userDetails.password) && isContainsUppercase.test(userDetails.password)){
                        alert("Please hit the sign up button")
                        setbuttonState(false)
                  }else{
                    setbuttonState(true)
                  }
              }else{
                setbuttonState(true)
              }
          }else{
            setbuttonState(true)
          }
        }else{
          setbuttonState(true)
        }

      },[userDetails])

     
  
  
    return(
        <Root style={{}}>
        <Container  maxWidth={'100vh'}  style={{display:"flex"}}>
        <div style={{minWidth:"40%", backgroundColor:"#00bf98", borderRadius:"10px"}}>
        <Stack justifyContent={'center'}
                alignItems={'center'}
                minHeight={'100vh'}
               // marginTop={"10%"}
                spacing={5}
                sx={{backgroundColor:"#00bf98", borderRadius:"8px"}}
                >
                <Typography style={{color:"#FFF", fontSize:"2.5vw",  fontWeight:"bolder"}}>Welcome Back!</Typography>
                
                <Typography style={{color:"#FFF", fontSize:"1.3vw", textAlign:"center"}}>To keep connected with us please <br/>login with your personal info</Typography>

               
                   
                <Button variant="contained" style={{width:"30%", minHeight:"45px", borderRadius:"20px",backgroundColor:"#00bf98", border:"1px groove #FFF"}} >Sign in</Button>
               
               
            </Stack>
          
        </div>
         <div style={{minWidth:"60%"}}>
            <Stack justifyContent={'center'}
                alignItems={'center'}
                minHeight={'60vh'}
                marginTop={"10%"}
                spacing={5}
                sx={{backgroundColor:"#FFF", borderRadius:"8px"}}
                >
                <Typography style={{color:"gray", fontSize:"2.5vw",  fontWeight:"bolder"}}>Create Account</Typography>
                <Paper elevation={0} style={{width:"30%", height:"9vh", backgroundColor:"#FFF",}}  >
                
                <Grid height={"40%"} container  direction={"row"} justifyContent={"space-evenly"} alignItems={"center"}>
                      <Grid  style={{borderRadius:"100%", border:"1px solid gray"}}>
                        <IconButton><FacebookIcon sx={{color:"gray"}}/></IconButton>
                      </Grid>
                      <Grid style={{borderRadius:"100%", border:"1px solid gray"}} >
                       	<IconButton><GoogleIcon sx={{color:"gray"}}/></IconButton>
                      </Grid>
                      <Grid style={{borderRadius:"100%", border:"1px solid gray"}} >
                       <IconButton><GitHubIcon sx={{color:"gray"}}/></IconButton>
                      </Grid>      
                  </Grid>
                </Paper> 
                <Typography style={{color:"gray", fontSize:"1vw"}}>Or user your email for registration</Typography>
                <TextField id="outlined-basic" onChange={(e)=>setuserDetails({...userDetails, userName:e.target.value})} size="small" placeholder="Name"  variant="outlined"   
                        InputProps={{startAdornment: <InputAdornment position="start"><PersonOutlineOutlinedIcon/></InputAdornment>,}} 
                        style={{width:"40%", maxHeight:"40px",borderRadius:"0px", backgroundColor:"#f0f5f5"}} />
                <TextField id="outlined-basic" onChange={(e)=>setuserDetails({...userDetails, email:e.target.value})} size="small"  placeholder="Email" variant="outlined"      
                     InputProps={{startAdornment: <InputAdornment position="start"><EmailOutlinedIcon/></InputAdornment>,}} 
                     style={{width:"40%", maxHeight:"40px",borderRadius:"0px", backgroundColor:"#f0f5f5"}}/>
                <TextField id="outlined-basic" onChange={(e)=>setuserDetails({...userDetails, password:e.target.value})} size="small"  placeholder="Password" variant="outlined"        
                   InputProps={{startAdornment: <InputAdornment position="start"><LockOutlinedIcon/></InputAdornment>,}} 
                   style={{width:"40%", maxHeight:"40px",borderRadius:"0px", backgroundColor:"#f0f5f5"}}/>
                   
                <Button variant="contained" onClick={()=>console.log(userDetails.userName, userDetails.email, userDetails.password)} style={{width:"25%", minHeight:"45px", borderRadius:"20px" ,backgroundColor:"#00bf98"}} disabled={buttonState} >Sign up</Button>
                
               
            </Stack>
            
            </div>
           
        </Container>
        
        </Root>
    )
}
export default LoginPage;

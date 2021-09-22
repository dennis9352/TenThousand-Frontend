import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Text, Button, Input } from "../../elements"
import SignInInput from "./SignInInput";
import logo2 from "../../Images/10K.mp4"
import { history } from "../../data/configStore"

const SignInBox = () => {
    let [maintain, maintainAfter] = useState(false)
    let [id, idAfter] = useState('')
    let [password, passwordAfter] = useState('')

    const maintainCheck = () => {
        if (maintain === false) {
            maintainAfter(true)
        }else{
            maintainAfter(false)
        }
    }

    return (
        <>
        
        <Grid 
        width="400px" 
        height="500px" 
        margin="200px auto 0px" 
        padding="30px" 
        background="white"
        border_radius="20px"
        border="solid 1px rgba(0, 0, 0, 0.1)"
        box_shadow= "0px 0px 50px 0px rgba(0, 0, 0, 0.19)"
        >

        <video autoPlay muted 
        style={{
            width:"200px",
            height:"200px", 
            margin:"-30px 0 -30px 100px"
        }}
        >
            <source src={logo2} type="video/mp4" />
        </video>

            <Grid margin="50px 0px 0px 0px">
                <Text bold size="13px" margin="0 0 0 35px" color="gray">USERNAME</Text>
                    <SignInInput onChange={ (e) => { idAfter(e.target.value) } } />
                <Text bold size="13px" margin="0 0 0 35px" color="gray">PASSWORD</Text>
                    <SignInInput onChange={ (e) => { passwordAfter(e.target.value) } } />
            </Grid>

            <Grid width="368px" display="flex" justify_content="flex-end">
                <Grid width="auto">
                    <Text bold size="13px"> 로그인 유지 </Text>
                </Grid>

                <Grid width="30px">
                    <Input height="20px" type="checkbox" _onClick={ () => { maintainCheck() } }/>
                </Grid>
            </Grid>
            
            <Button width="328px" height="45px" margin="10px 0px 0px 36px">LOGIN</Button>

            <Text margin="40px 0px 0px 123px" bold size="14px" color="gray"> 아직 회원이 아니신가요? </Text>
            <Text 
            margin="10px 0px 0px 165px" 
            bold size="17px" 
            color="#7fd4ba"
            _onClick={() => {history.push("/signup")}}
            > 회원가입 
            </Text>

        </Grid>
        
        </>
    )
}

export default SignInBox

const InputBox = styled.input`
display: block;
appearance: none;
outline: 0;
border: 1px solid white;
background-color: #f1f1f1;
width: 300px;
height: 25px;
border-radius: 3px;
padding: 10px 15px;
margin: 0 auto 10px 35px;
display: block;
font-size: 18px;
color: black;
transition-duration: 0.4s;
font-weight: 300;
&:hover{
  background-color: fade(white, 40%);
}
&:focus{
  background-color: white;
  border: 1px solid gray
}
`;

const InputBox2 = styled.input`
display: block;
appearance: none;
outline: 0;
border: 1px solid white;
background-color: #f1f1f1;
width: 300px;
height: 25px;
border-radius: 3px;
padding: 10px 15px;
margin: 0 auto 10px 35px;
display: block;
font-size: 18px;
color: black;
transition-duration: 0.4s;
font-weight: 300;
&:hover{
  background-color: fade(white, 40%);
}
&:focus{
  background-color: white;
  border: 1px solid gray
}
`;
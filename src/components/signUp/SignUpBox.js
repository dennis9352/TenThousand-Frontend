import React from "react";
import styled from "styled-components";
import { Grid, Text, Button, Input, Image } from "../../elements"
import SignInInput from "../signIn/SignInInput";

const SignUpBox = () => {

    return (
        <>
        
        <Grid 
        width="400px" 
        height="600px" 
        margin="100px auto 0px" 
        padding="30px" 
        background="white"
        border_radius="20px"
        border="solid 1px rgba(0, 0, 0, 0.08)"
        box_shadow= "0px 0px 50px 0px rgba(0, 0, 0, 0.05)"
        >
        
        <Input type="file"/>

            <Grid margin="50px 0px 0px 0px">
                <Text bold size="13px" margin="0 0 0 35px" color="gray">아이디</Text>
                <SignInInput placeholder={"6자 이상"} />
                <Text bold size="13px" margin="0 0 0 35px" color="gray">비밀번호</Text>
                <SignInInput placeholder={"6자 이상"} />
                <Text bold size="13px" margin="0 0 0 35px" color="gray">비밀번호 확인</Text>
                <SignInInput placeholder={"6자 이상"} />
                <Text bold size="13px" margin="0 0 0 35px" color="gray">닉네임</Text>
                <SignInInput placeholder={"2자 이상"} />
            </Grid>
            
            <Button width="355px" height="45px" margin="10px 0px 0px 25px">SIGN UP</Button>
        
        </Grid>
        
        </>
    )
}
export default SignUpBox

const Inputbox = styled.input`
width: 355px; 
height: 40px;
margin: 0px 0px 10px 22px;
`;
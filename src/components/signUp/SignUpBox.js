import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Text, Button, Input, Image } from "../../elements"
import SignInInput from "../SignIn/SignInInput";
import { history } from "../../data/configStore"
import profile from "../../Images/profile.jpg"

const SignUpBox = () => {
    const [imgBase64, setImgBase64] = useState("");
    const [profilePic, setProfilePic] = useState(profile)

    // const preview = (e) => {
    //     let reader = new FileReader()
        
    //     reader.onloadend = () => {
    //         const base64 = reader.result
    //         if (base64) {
    //             setImgBase64(base64.toString())
    //         }
    //     }
    //     if (e.target.files[0]) {
    //         reader.readAsDataURL(e.target.files[0]); 
    //         setProfilePic(e.target.files[0]);
    //       }
    // }

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

        <Grid width="300px" margin="0 0 10px 120px">
            <Grid>
            <Image 
            src={profilePic}
            width="150px" 
            height="150px" 
            border_radius="100px"
            background="black"
            margin="0 0 15px 0" />
            </Grid>

            <InputLabel for="inputFile">업로드아이콘</InputLabel>
            <Input id="inputFile" type="file" display="none" />
        </Grid>

            <Grid margin="30px 0px 0px 0px">
                <Text bold size="13px" margin="0 0 0 35px" color="gray">아이디</Text>
                <SignInInput placeholder={"4자 이상"} />
                <Text bold size="13px" margin="0 0 0 35px" color="gray">비밀번호</Text>
                <SignInInput placeholder={"6자 이상"} />
                <Text bold size="13px" margin="0 0 0 35px" color="gray">비밀번호 확인</Text>
                <SignInInput placeholder={"6자 이상"} />
                <Text bold size="13px" margin="0 0 0 35px" color="gray">닉네임</Text>
                <SignInInput placeholder={"2자 이상"} />
            </Grid>
            
            <Button width="330px" height="45px" margin="10px 0px 0px 35px">SIGN UP</Button>
            <Text 
            margin="10px 0px 0px 177px" 
            bold size="15px" 
            color="gray"
            cursor = "pointer"
            _onClick={() => {history.push("/")}}
            > Cancel 
            </Text>

        </Grid>
        
        </>
    )
}
export default SignUpBox

const InputLabel = styled.label`
    width: 300px;
    height: 10px;
    padding: 6px;
    background-color: #fdfdfd;
    color: #999;
    border-radius: 4px;
    cursor: pointer; 
    border: 1px solid #ebebeb; 
    border-bottom-color: #e2e2e2;
    margin: 0 0 0 20px;

`

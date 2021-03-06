import React, { useState } from "react";
import { Grid, Text, Button, Input } from "../../elements"
import SignInInput from "./SignInInput";
import logo2 from "../../Images/10K.mp4"
import { history } from "../../data/configStore"
import axios from "axios"

const SignInBox = () => {
    let [maintain, setMaintain] = useState(false)
    let [id, setId] = useState('')
    let [password, setPassword] = useState('')

    const maintainCheck = () => {
        if (maintain === false) {
            setMaintain(true)
        }else{
            setMaintain(false)
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
                    <SignInInput onChange={ (e) => { setId(e.target.value) } } />
                <Text bold size="13px" margin="0 0 0 35px" color="gray">PASSWORD</Text>
                    <SignInInput onChange={ (e) => { setPassword(e.target.value) } } />
            </Grid>

            <Grid width="368px" display="flex" justify_content="flex-end">
                <Grid width="auto">
                    <Text bold size="13px"> 로그인 유지 </Text>
                </Grid>

                <Grid width="30px">
                    <Input height="20px" type="checkbox" _onClick={ () => { maintainCheck() } }/>
                </Grid>
            </Grid>
            
            <Button width="328px" height="45px" margin="10px 0px 0px 36px"
            onClick={() => {
                axios.post('서버URL', {id, password})
                .then()
                .catch()
            }}>LOGIN</Button>

            <Text margin="40px 0px 0px 123px" bold size="14px" color="gray"> 아직 회원이 아니신가요? </Text>
            <Text 
            margin="10px 0px 0px 165px" 
            bold size="17px" 
            color="#7fd4ba"
            cursor = "pointer"
            _onClick={() => {history.push("/signup")}}
            > 회원가입 
            </Text>

        </Grid>
        
        </>
    )
}

export default SignInBox

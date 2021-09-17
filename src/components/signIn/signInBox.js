import React from "react";
import styled from "styled-components";
import {Grid} from "../../elements"
import SignInInput from "./signInInput";

const signInBox = () => {

    return (
        <>

        <Grid width="300px" margin="auto">
            <SignInInput></SignInInput>
            <SignInInput></SignInInput>
        </Grid>
        
        </>
    )
}

export default signInBox
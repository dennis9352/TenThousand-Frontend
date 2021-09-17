import React from "react"
import styled from "styled-components"

const Text = (props) => {
    const {
        width,
        height,
        margin,
        padding,
        background_color,
        border,
        border_radius,
        text_align,
        _onClick,
        cursor,
    } = props

    const styles = {
        width,
        height,
        margin,
        padding,
        background_color,
        border,
        border_radius,
        text_align,
        _onClick,
        cursor,
    }

    return (
        <React.Fragment>
            <DefaultText onClick={_onClick} {...styles}>

            </DefaultText>
        </React.Fragment>
    )
}

Text.defaultProps = {
    width: "100%",
    height: null,
    margin: "0px",
    padding: "0px",
    bg: null,
    border_radius: "0px",
    border: false,
    text_align: false,
    is_flex: false,
    cursor: "default",
    display: null,
    _onClick: () => {}
}

const DefaultText = styled.p`

`

export default Text
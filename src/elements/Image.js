import React from "react"
import styled from "styled-components"

const Image = (props) => {
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
            <DefaultImage onClick={_onClick} {...styles}>

            </DefaultImage>
        </React.Fragment>
    )
}

Image.defaultProps = {
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

const DefaultImage = styled.image`

`


export default Image
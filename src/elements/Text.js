import React from "react"
import styled from "styled-components"

const Text = (props) => {
    const {
        width,
        height,
        margin,
        padding,
        bold,
        color,
        size,
        border,
        border_radius,
        text_align,
        _onClick,
        cursor,
        children,
    } = props

    const styles = {
        width,
        height,
        margin,
        padding,
        border,
        border_radius,
        text_align,
        bold,
        color,
        size,
        _onClick,
        cursor,
    }

    return (
        <React.Fragment>
            <DefaultText onClick={_onClick} {...styles}>
                {children}
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
    bold: false,
    color: "black",
    size: "30px",
    _onClick: () => {},
}

const DefaultText = styled.p`
${(props) => props.display ? `display: ${props.display};`:''}
${(props) => props.width ? `width: ${props.width};`:''}
${(props) => props.height ? `height: ${props.height};`:''}
${(props) => props.margin ? `margin: ${props.margin};`:''}
${(props) => props.padding ? `padding: ${props.padding};`:''}
${(props) => props.bold ? `font-weight: ${props.bold};`:''}
${(props) => props.color ? `color: ${props.color};`:''}
${(props) => props.size ? `font-size: ${props.size};`:''}
`

export default Text
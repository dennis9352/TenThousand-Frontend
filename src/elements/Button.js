import React from "react"
import styled from "styled-components"

const Button = (props) => {
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
        children,
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
            <DefaultButton onClick={_onClick} {...styles}>
                {children}
            </DefaultButton>
        </React.Fragment>
    )
}

Button.defaultProps = {
    width: "50px",
    height: "50px",
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

const DefaultButton = styled.button`
${(props) => props.display ? `display: ${props.display};`:''}
${(props) => props.width ? `width: ${props.width};`:''}
${(props) => props.height ? `height: ${props.height};`:''}
${(props) => props.margin ? `margin: ${props.margin};`:''}
${(props) => props.padding ? `padding: ${props.padding};`:''}
${(props) => props.background ? `background: ${props.background};`:''}
`

export default Button
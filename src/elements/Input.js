import React from "react"
import styled from "styled-components"

const Input = (props) => {
    const {
        width,
        height,
        margin,
        padding,
        background,
        border,
        border_radius,
        text_align,
        _onClick,
        cursor,
        type,
        placeholder,
        font_size,
        id,
        display,
        children,
    } = props

    const styles = {
        width,
        height,
        margin,
        padding,
        background,
        border,
        border_radius,
        text_align,
        _onClick,
        placeholder,
        type,
        font_size,
        id,
        display,
        cursor,
    }

    return (
        <React.Fragment>
            <DefaultInput onClick={_onClick} {...styles}>
                {children}
            </DefaultInput>
        </React.Fragment>
    )
}

Input.defaultProps = {
    width: "100%",
    height: null,
    margin: "0px",
    padding: "0px",
    bg: null,
    border_radius: "0px",
    background: null,
    border: false,
    text_align: false,
    is_flex: false,
    cursor: "default",
    display: null,
    placeholder: false,
    _onClick: () => {}
}

const DefaultInput = styled.input`
${(props) => props.display ? `display: ${props.display};`:''}
${(props) => props.width ? `width: ${props.width};`:''}
${(props) => props.height ? `height: ${props.height};`:''}
${(props) => props.margin ? `margin: ${props.margin};`:''}
${(props) => props.padding ? `padding: ${props.padding};`:''}
${(props) => props.background ? `background-color: ${props.background};`:''}
${(props) => props.type ? `type: ${props.type};`:''}
${(props) => props.placeholder ? `placeholder: ${props.placeholder};`:''}
${(props) => props.font_size ? `font-size: ${props.font_size};`:''}
${(props) => props.id ? `id: ${props.id};`:''}
`;


export default Input
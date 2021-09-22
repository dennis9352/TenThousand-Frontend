import React from "react"
import styled from "styled-components"

const Image = (props) => {
    const {
        width,
        height,
        margin,
        padding,
        border,
        border_radius,
        text_align,
        _onClick,
        cursor,
        src,
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
        _onClick,
        src,
        cursor,
    }

    return (
        <React.Fragment>
            <DefaultImage onClick={_onClick} {...styles}>
                {children}
            </DefaultImage>
        </React.Fragment>
    )
}

Image.defaultProps = {
    width: "100%",
    height: null,
    margin: "0px",
    padding: "0px",
    border_radius: "0px",
    border: false,
    text_align: false,
    is_flex: false,
    cursor: "default",
    display: null,
    src: "",
    _onClick: () => {}
}

const DefaultImage = styled.img`
${(props) => props.display ? `display: ${props.display};`:''}
${(props) => props.width ? `width: ${props.width};`:''}
${(props) => props.height ? `height: ${props.height};`:''}
${(props) => props.margin ? `margin: ${props.margin};`:''}
${(props) => props.padding ? `padding: ${props.padding};`:''}
${(props) => props.background ? `background: ${props.background};`:''}
${(props) => props.border_radius ? `border-radius: ${props.border_radius};`:''}
${(props) => props.border ? `border: ${props.border};`:''}
${(props) => props.box_shadow ? `box-shadow: ${props.box_shadow};`:''}
${(props) => props.align ? `align: ${props.align};`:''}
`;


export default Image
import React from "react"
import styled from "styled-components"

const Grid = (props) => {

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
        box_shadow,
        display,
        align,
        justify_content,
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
        cursor,
        display,
        align,
        justify_content,
        box_shadow,
    }

    return (
        <React.Fragment>
            <DefaultGrid onClick={_onClick} {...styles}>
                {children}
            </DefaultGrid>
        </React.Fragment>
    )
}

Grid.defaultProps = {
    width: "100px",
    height: null,
    margin: "0px",
    padding: "0px",
    border_radius: "0px",
    border: false,
    background: null,
    text_align: false,
    is_flex: false,
    float: "left",
    cursor: "default",
    display: null,
    align: false,
    box_shadow: false,
    _onClick: () => {}
}

const DefaultGrid = styled.div`
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
${(props) => props.justify_content ? `justify-content: ${props.justify_content};`:''}
`;

export default Grid

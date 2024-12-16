import React from 'react';

export interface buttonStyleProps {
    color?: string;
    backgroundColor?: string;
    border?: string;
    padding?: string;
    borderRadius?: string;
    cursor?: string;
}

export interface ButtonProps {
    text: string;
    style?: buttonStyleProps;
}

export default function Button(props: ButtonProps) {
    const style:buttonStyleProps = props.style || {};

    const styles = {
        button: {
            color: style.color,
            backgroundColor: style.backgroundColor,
            border: style.border,
            padding: style.padding,
            borderRadius: style.borderRadius,
            cursor: style.cursor
        }
    }

    return (
        <>
            <button style={styles.button}>{props.text}</button>
        </>
    )
}
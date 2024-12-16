import React from 'react';
import Button, { buttonStyleProps } from '../atoms/button/Button';

interface imageButtonProps {
    imageSrc: string;
    text: string;
    style?: buttonStyleProps;
}


function imageButton(props: imageButtonProps) {
    return (
        <>
            <img src={props.imageSrc} alt={props.text} />
            <Button
                text={props.text}
                style={props.style}
            />
        </>
    )
}

export default imageButton;
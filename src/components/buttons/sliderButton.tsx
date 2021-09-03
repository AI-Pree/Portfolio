import React, {ReactElement, useState} from "react";

type SliderProps = {
    buttonType: string;
    children: any;
    onClick: () => void;
};

export default function SliderButton({
    buttonType,
    children,
    onClick,
}: SliderProps): ReactElement {
    return (
        <button
            type="button"
            className="slider-button"
            name={buttonType}
            onClick={onClick}
        >
            {React.Children.map(children, (child, id) => {
                return React.cloneElement(child);
            })}
        </button>
    );
}

import React, {ReactElement, useState} from "react";

type SliderProps = {
    buttonType: string;
    onClick: () => void;
};

export default function SliderButton({buttonType, onClick}: SliderProps): ReactElement {
    return <button name={buttonType} onClick={onClick} />;
}

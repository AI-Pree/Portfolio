import React, {ReactElement} from "react";

const HEIGHT_OF_BAR = 200;

type ProgressliderProps = {
    barColor: string;
    itemSizePercent: number;
};

export default function ProgressSlider({
    itemSizePercent,
    barColor,
}: ProgressliderProps): ReactElement {
    return (
        <div className="progress-bar">
            <div
                className="progress"
                style={{
                    transform: `scaleY(${itemSizePercent / 100})`,
                    background: `${barColor}`,
                }}
            ></div>
        </div>
    );
}

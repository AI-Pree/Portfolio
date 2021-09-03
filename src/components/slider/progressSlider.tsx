import React, {ReactElement} from "react";

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
            <div className="inner-progress-bar">
                <div
                    className="progress"
                    style={{
                        transform: `scaleY(${itemSizePercent / 100})`,
                        background: `${barColor}`,
                    }}
                ></div>
            </div>
        </div>
    );
}

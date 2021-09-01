import React, {ReactElement} from "react";

type NormalButtonProps = {
    content: string;
    colorClass: string;
};

export default function NormalButton({...args}: NormalButtonProps): ReactElement {
    return (
        <>
            <button type="button" className={`normal-button ${args.colorClass}`}>
                {args.content}
            </button>
        </>
    );
}

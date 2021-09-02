import React, {ReactElement} from "react";

type NormalButtonProps = {
    children: any;
    content: string;
    colorClass: string;
};

export default function NormalButton({...args}: NormalButtonProps): ReactElement {
    return (
        <>
            <button type="button" className={`normal-button ${args.colorClass}`}>
                {args.content}
                {React.Children.map(args.children, (child, index) => {
                    return React.cloneElement(child);
                })}
            </button>
        </>
    );
}

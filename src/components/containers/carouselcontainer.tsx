import React, {ReactElement, useState} from "react";

export interface ICarouselItem {
    id: number;
    date: string;
    spent: string;
    title: string;
    language: string;
    description: string;
    Progress: string;
    link?: string;
    api?: string;
    highlight?: string;
    details: string;
}

type CarouselData = {
    item: ICarouselItem;
};

export const CarouselItem = ({children, height, item}: any) => {
    return (
        <div className="carousel-item" style={{height: height}}>
            <h2>{item.title}</h2>
            <p>{item.details}</p>
        </div>
    );
};

export function CarouselContainer({children}: any): ReactElement {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="carousel">
            <div
                className="inner"
                style={{transform: `translateY(-${activeIndex * 100}%)`}}
            >
                {React.Children.map(children, (child, id) => {
                    return React.cloneElement(child, {height: "100%"});
                })}
            </div>
        </div>
    );
}

export default CarouselContainer;

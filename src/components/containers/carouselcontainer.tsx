import React, {ReactElement, useState} from "react";
import NormalButton from "../buttons/normalButton";
import SliderButton from "../buttons/sliderButton";

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

// type CarouselData = {
//     item: ICarouselItem;
// };

export const CarouselItem = ({children, height, item}: any) => {
    return (
        <div className="carousel-item" style={{height: height}}>
            <h1>{item.title}</h1>

            <p>{item.details}</p>
            <NormalButton content="Get Details &rarr;" colorClass="green-bg" />
        </div>
    );
};

export const CarouselNav = () => {
    return (
        <div className="carousel-nav">
            <SliderButton />
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
            <CarouselNav />
        </div>
    );
}

export default CarouselContainer;

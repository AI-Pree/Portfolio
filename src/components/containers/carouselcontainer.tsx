import React, {ReactElement, ReactNodeArray, useContext, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCaretRight,
    faChevronDown,
    faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

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

type CarouselNavProps = {
    update: (index: number) => void;
};

const SliderIndex = React.createContext(0);

export const CarouselItem = ({children, height, item}: any) => {
    return (
        <div className="carousel-item" style={{height: height}}>
            <h2>{item.title}</h2>

            <p>{item.details}</p>
            <NormalButton content="Get Details" colorClass="green-bg">
                <FontAwesomeIcon
                    icon={faCaretRight}
                    style={{margin: "0px 0px 0px 15px"}}
                />
            </NormalButton>
        </div>
    );
};

const CarouselNav = ({update}: CarouselNavProps) => {
    const index = useContext(SliderIndex);
    const value = index + 1 < 10 ? "0" + (index + 1).toString() : (index + 1).toString();

    return (
        <div className="carousel-nav">
            <SliderButton
                buttonType="prev"
                onClick={() => {
                    update(index - 1);
                }}
            >
                <FontAwesomeIcon icon={faChevronUp} />
            </SliderButton>
            <p>{value}</p>
            <SliderButton
                buttonType="next"
                onClick={() => {
                    update(index + 1);
                }}
            >
                <FontAwesomeIcon icon={faChevronDown} />
            </SliderButton>
        </div>
    );
};

export function CarouselContainer({children}: any): ReactElement {
    const [activeIndex, setActiveIndex] = useState(0);
    const childern_size = React.Children.count(children);
    const updateIndex = (newIndex: any) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= childern_size) {
            newIndex = childern_size - 1;
        }

        setActiveIndex(newIndex);
    };

    return (
        <SliderIndex.Provider value={activeIndex}>
            <div className="carousel">
                <div
                    className="inner"
                    style={{transform: `translateY(-${activeIndex * 100}%)`}}
                >
                    {React.Children.map(children, (child, id) => {
                        return React.cloneElement(child, {height: "100%"});
                    })}
                </div>
                <CarouselNav update={updateIndex} />
            </div>
        </SliderIndex.Provider>
    );
}

export default CarouselContainer;

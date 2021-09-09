import React, {ReactElement, ReactNodeArray, useContext, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCaretRight,
    faChevronDown,
    faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

import NormalButton from "../buttons/normalButton";
import SliderButton from "../buttons/sliderButton";
import ProgressSlider from "../slider/progressSlider";
import {Link, Route, Switch} from "react-router-dom";

import DetailProject from "../../views/project/detailProject";

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

const Slider = React.createContext([0, 0]);

export const CarouselItem = ({children, height, item, buttonLink}: any) => {
    return (
        <div className="carousel-item" style={{height: height}}>
            <h2>{item.title}</h2>

            <p>{item.details}</p>

            <Link to={`${buttonLink}` + `/${item.id}`}>
                <NormalButton content="Get Details" colorClass="green-bg">
                    <FontAwesomeIcon
                        icon={faCaretRight}
                        style={{margin: "0px 0px 0px 15px"}}
                    />
                </NormalButton>
            </Link>
        </div>
    );
};

const CarouselNav = ({update}: CarouselNavProps) => {
    const [index, size] = useContext(Slider);
    const value = index + 1 < 10 ? "0" + (index + 1).toString() : (index + 1).toString();

    return (
        <>
            <div className="carousel-nav">
                <SliderButton
                    buttonType="prev"
                    onClick={() => {
                        update(index - 1);
                    }}
                >
                    <FontAwesomeIcon icon={faChevronUp} />
                </SliderButton>
                <p>
                    {value}
                    <span className="total-item">&nbsp;/&nbsp;{size}</span>
                </p>
                <SliderButton
                    buttonType="next"
                    onClick={() => {
                        update(index + 1);
                    }}
                >
                    <FontAwesomeIcon icon={faChevronDown} />
                </SliderButton>
            </div>
            <ProgressSlider
                itemSizePercent={((index + 1) / size) * 100}
                barColor="rgb(102, 218, 102)"
            />
        </>
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
        <Slider.Provider value={[activeIndex, childern_size]}>
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
        </Slider.Provider>
    );
}

export default CarouselContainer;

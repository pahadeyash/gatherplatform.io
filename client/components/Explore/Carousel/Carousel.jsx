import * as React from 'react';
import { CarouselContainer, CarouselChild } from './CarouselContainer';

//@
//Carousel component
//add links to pictures that will be used in carousel below
const Carousel = () => (
    <CarouselContainer interval={5000}>
        <CarouselChild>
            <div
                className="slide"
                style={{ backgroundImage: `url(https://gatherplatform.s3.us-east-2.amazonaws.com/photo-1.png)` }}
            />
        </CarouselChild>
        <CarouselChild>
            <div
                className="slide"
                style={{ backgroundImage: `url(https://gatherplatform.s3.us-east-2.amazonaws.com/photo-2.jpg)` }}
            />
        </CarouselChild>
        <CarouselChild>
            <div
                className="slide"
                style={{ backgroundImage: `url(https://gatherplatform.s3.us-east-2.amazonaws.com/photo-3.png)` }}
            />
        </CarouselChild>
        <CarouselChild>
            <div
                className="slide"
                style={{ backgroundImage: `url(https://gatherplatform.s3.us-east-2.amazonaws.com/photo-4.png)` }}
            />
        </CarouselChild>
    </CarouselContainer>
);

export default Carousel;
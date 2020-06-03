import * as React from 'react';
import { CarouselContainer, CarouselChild } from './Carousel';

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
        {/* <CarouselChild>
            <div
                className="slide"
                style={{ backgroundImage: `url(https://gatherplatform.s3.us-east-2.amazonaws.com/photo-4.png)` }}
            />
        </CarouselChild> */}
    </CarouselContainer>

    // <CarouselContainer interval={10000}>
    //     <CarouselChild>
    //         <div
    //             className="slide"
    //             style={{ backgroundImage: `url(https://via.placeholder.com/900x150/0000FF/808080?Text=First)` }}
    //         />
    //     </CarouselChild>
    //     <CarouselChild>
    //         <div
    //             className="slide"
    //             style={{ backgroundImage: `url(https://via.placeholder.com/900x150/000000/FFFFFF?Text=Second)` }}
    //         />
    //     </CarouselChild>
    //     <CarouselChild>
    //         <div
    //             className="slide"
    //             style={{ backgroundImage: `url(https://via.placeholder.com/900x150/FF0000/808080?Text=Third)` }}
    //         />
    //     </CarouselChild>
    // </CarouselContainer>
);

export default Carousel;
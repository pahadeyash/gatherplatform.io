import * as React from 'react';
import { useCarousel } from './useCarousel';


// const Carousel = ({ slides = [<img id="carousel-photo" src="https://gatherplatform.s3.us-east-2.amazonaws.com/photo-1.png" />, <img src="https://gatherplatform.s3.us-east-2.amazonaws.com/photo-2.png" />, <img src="https://gatherplatform.s3.us-east-2.amazonaws.com/photo-3.png" />], interval = 5000 }) => {
//     // const slides = ['picture1', 'picture2', 'picture3'];
//     const length = slides.length;
//     const [active, setActive, handlers, style] = useCarousel(length, interval);

//     return (
//         length > 0 && (
//             <div className="carousel">
//                 <ol className="carousel-indicators">
//                     {slides.map((_, index) => (
//                         <li
//                             onClick={() => setActive(index)}
//                             key={index}
//                             className={`${active === index ? "active" : ""}`}
//                         />
//                     ))}
//                 </ol>
//                 <div className="carousel-content" {...handlers} style={style}>
//                     <div className="carousel-item">{slides[slides.length - 1]}</div>
//                     {slides.map((slide, index) => (
//                         <div className="carousel-item" key={index}>
//                             {slide}
//                         </div>
//                     ))}
//                     <div className="carousel-item">{slides[0]}</div>
//                 </div>
//             </div>
//         )
//     );
// };

// export default Carousel;

function makeIndices(start, delta, num) {
    const indices = [];

    while (indices.length < num) {
        indices.push(start);
        start += delta;
    }

    return indices;
}

export const CarouselContainer = ({
    children,
    slidesPresented = 1,
    interval = 5000,
}) => {
    const slides = React.Children.toArray(children);
    const length = slides.length;
    const numActive = Math.min(length, slidesPresented);
    const [active, setActive, handlers, style] = useCarousel(length, interval, { slidesPresented: numActive });
    const beforeIndices = makeIndices(slides.length - 1, -1, numActive);
    const afterIndices = makeIndices(0, +1, numActive);

    return (
        length > 0 && (
            <div className="carousel">
                <ol className="carousel-indicators">
                    {slides.map((_, index) => (
                        <li
                            onClick={() => setActive(index)}
                            key={index}
                            className={`${active === index ? 'active' : ''} carousel-indicator`}
                        />
                    ))}
                </ol>
                <div className="carousel-content" {...handlers} style={style}>
                    {beforeIndices.map(i => (
                        <CarouselChild key={i}>{slides[i]}</CarouselChild>
                    ))}
                    {slides.map((slide, index) => (
                        <CarouselChild key={index}>{slide}</CarouselChild>
                    ))}
                    {afterIndices.map(i => (
                        <CarouselChild key={i}>{slides[i]}</CarouselChild>
                    ))}
                </div>
            </div>
        )
    );
};


export const CarouselChild = ({ children }) => (
    <div className="carousel-item">{children}</div>
);

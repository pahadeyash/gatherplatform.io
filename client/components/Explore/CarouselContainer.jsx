import * as React from 'react';
import { useCarousel } from './useCarousel';

function makeIndices(start, delta, num) {
    const indices = [];

    while (indices.length < num) {
        indices.push(start);
        start += delta;
    }

    return indices;
}

const CarouselContainer = ({
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


const CarouselChild = ({ children }) => (
    <div className="carousel-item">{children}</div>
);

export { CarouselChild, CarouselContainer };
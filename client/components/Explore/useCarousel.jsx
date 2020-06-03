import React, { useState, useEffect, useReducer } from "react";
import { useSwipeable, Swipeable, SwipeableHandlers, EventData } from 'react-swipeable'

function previous(length, current) {
    return (current - 1 + length) % length;
}

function next(length, current) {
    return (current + 1) % length;
}

// function threshold(e) {
//     const width = e.clientWidth;
//     return width / 3;
// }

//@TIMING FOR CAROUSEL
//transition times we can change
// const transitionTime = 400;
// const elastic = `transform ${transitionTime}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
// const smooth = `transform ${transitionTime}ms ease`;
// defines the time for the animation between slides in milliseconds
const transitionTime = 400;
// defines the threshold when to accept a swipe
const threshold = 0.3;
// defines the limit for swiping (max. the next full and a bit)
const limit = 1.2;
// animation to be used when bouncing back
const elastic = `transform ${transitionTime}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
// animation to be used when automatically sliding
const smooth = `transform ${transitionTime}ms ease`;

//distinguish different states of carousel
const initialCarouselState = {
    offset: 0,
    desired: 0,
    active: 0
};

//reducer to handle carousel movement
function carouselReducer(state, action) {
    switch (action.type) {
        case "jump":
            return {
                ...state,
                desired: action.desired
            };
        case "next":
            return {
                ...state,
                desired: next(action.length, state.active)
            };
        case "prev":
            return {
                ...state,
                desired: previous(action.length, state.active)
            };
        case "done":
            return {
                ...state,
                offset: NaN,
                active: state.desired
            };
        case "drag":
            return {
                ...state,
                offset: action.offset
            };
        default:
            return state;
    }
}

function swiped(delta, dispatch, length, dir, container) {
    // const t = threshold(e.target);
    // const d = dir * e.deltaX;
    const t = container.clientWidth * threshold;
    const d = dir * delta;

    if (d >= t) {
        dispatch({
            type: dir > 0 ? 'next' : 'prev',
            length,
        });
    } else {
        dispatch({
            type: 'drag',
            offset: 0,
        });
    }
}


//@creating custom hook for carousel
export const useCarousel = (length, interval, options = {}) => {

    const { slidesPresented = 1 } = options;
    // const slidesPresented = 3;
    const shadowSlides = 2 * slidesPresented;
    const n = Math.max(1, Math.min(slidesPresented, length));
    const totalWidth = 100 / n;
    const [state, dispatch] = useReducer(carouselReducer, initialCarouselState);
    const [container, setContainer] = useState(undefined);
    const { ref, onMouseDown } = useSwipeable({
        onSwiping(e) {
            const sign = e.deltaX > 0 ? -1 : 1;
            dispatch({
                type: 'drag',
                offset: sign * Math.min(Math.abs(e.deltaX), limit * container.clientWidth),
            });
        },
        onSwipedLeft(e) {
            swiped(e.deltaX, dispatch, length, 1, container);
        },
        onSwipedRight(e) {
            swiped(e.deltaX, dispatch, length, -1, container);
        },
        trackMouse: true,
        trackTouch: true,
    });

    const handlers = {
        onMouseDown,
        ref(container) {
            setContainer(container && container.firstElementChild);
            return ref(container);
        },
    };
    //current state of carousel
    // const [current, setCurrent] = React.useState(0);

    //effect hook will allow for carousel pictures to transition
    //auto-rotation feature
    // useEffect(() => {
    //     const next = (current + 1) % 4;
    //     const id = setTimeout(() => setCurrent(next), 300);
    //     return () => clearTimeout(id);
    // }, [current]);

    //manage timings between carousels
    useEffect(() => {
        const id = setTimeout(() => dispatch({ type: "next", length }), interval);
        return () => clearTimeout(id);
    }, [state.offset, state.active]);

    //continue from prev
    useEffect(() => {
        const id = setTimeout(() => dispatch({ type: "done" }), transitionTime);
        return () => clearTimeout(id);
    }, [state.desired]);

    const style = {
        transform: 'translateX(0)',
        // width: `500%`,
        width: `${totalWidth * (length + shadowSlides)}%`,
        left: `-${(state.active + 1) * totalWidth}%`,
        // left: `-${(state.active + 0.5) * totalWidth}%`,
        // left: `-${(state.active + 1) * totalWidth}%`,
    };

    if (state.desired !== state.active) {
        const dist = Math.abs(state.active - state.desired);
        const pref = Math.sign(state.offset || 0);
        const dir = (dist > length / 2 ? 1 : -1) * Math.sign(state.desired - state.active);
        const shift = (totalWidth * (pref || dir)) / (length + shadowSlides);
        style.transition = smooth;
        style.transform = `translateX(${shift}%)`;
    } else if (!isNaN(state.offset)) {
        if (state.offset !== 0) {
            style.transform = `translateX(${state.offset}px)`;
        } else {
            style.transition = elastic;
        }
    }

    return [state.active, n => dispatch({ type: 'jump', desired: n }), handlers, style];
}

// export const slides = [<img src="../../assets/img/photo-1.png" />, <img src="../../assets/img/photo-2.png" />, <img src="../../assets/img/photo-3.png" />];
//@ACTUAL CAROUSEL COMPONENT TO IMPORT INTO EXPLORE PAGE
// const Carousel = ({ slides = [<img src="../../assets/img/photo-1.png" />, <img src="../../assets/img/photo-2.png" />, <img src="../../assets/img/photo-3.png" />], interval = 5000 }) => {
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
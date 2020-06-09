import React, { useState, useEffect } from "react";
import { useRoutes, A } from "hookrouter";
import Routes from "../../router/Routes.jsx";
import useDocumentScrollThrottled from './useDocumentScrollThrottled.jsx';

const Navbar = () => {
    //allows for switch between different routes
    //<A/> is preset to make the switch between routes through hookrouter
    const routeResult = useRoutes(Routes);

    // state to manage hide/show on scroll navbar
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const MINIMUM_SCROLL = 80;
    const TIMEOUT_DELAY = 400;

    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        setShouldShowShadow(currentScrollTop > 2);

        setTimeout(() => {
            setShouldHideHeader(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });

    const shadowStyle = shouldShowShadow ? 'shadow' : '';
    const hiddenStyle = shouldHideHeader ? 'hidden' : '';

    useEffect(() => {

    }, [isLoggedIn])



    return (
        <div className={`navbar-wrapper ${shadowStyle} ${hiddenStyle}`}>
            <div id="nav-selection-container">
                {isLoggedIn ? (
                    <A href="/" className="nav-selection" >
                        <div id="nav-button"> Search </div>
                    </A>
                ) : (
                    <A href="/" className="nav-selection" >
                        <div id="nav-button"> Explore </div>
                    </A>
                )}

                {isLoggedIn ? (
                    <A href="/" className="nav-selection" >
                        <div id="nav-button"> Profile </div>
                    </A>
                ) : (
                    <A href="/landing" className="nav-selection" >
                        <div id="nav-button"> Login </div>
                    </A>
                )}

            </div>
        </div>
    )
}

export default Navbar;
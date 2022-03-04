import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <NavLink to='/all'>All</NavLink>
                <NavLink to='/tech'>Tech</NavLink>
                <NavLink to='/clothes'>Clothes</NavLink>
            </div>
        )
    }
}

export default Header
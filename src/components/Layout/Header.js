import React, { Fragment } from 'react';


import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton';


export default function Header( props ) {
    return (
        <Fragment>
            <header className={ classes.header }>
                <h1>Meals</h1>
                <HeaderCartButton onclick={ props.onShowCart } />
            </header>
            <div className={ classes[ 'main-image' ] }>
                <img src={ mealsImage } alt="table of meals" />
            </div>
        </Fragment>
    )
}

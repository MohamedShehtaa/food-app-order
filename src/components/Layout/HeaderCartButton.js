import React, { useContext, useEffect, useState } from 'react'

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

export default function HeaderCartButton( props ) {

    const cartCtx = useContext( CartContext );

    const { items } = cartCtx;
    const numberOfCartItems = items.reduce( ( curtNumber, item ) => {
        return curtNumber + item.amount;
    }, 0 )

    //for animation
    const [ btnIsHighlighted, setBtnIsHighlighted ] = useState( false );
    const btnClasses = `${ classes.button } ${ btnIsHighlighted ? classes.bump : "" }`;

    useEffect( () => {
        if ( items.length === 0 ) {
            return;
        }
        setBtnIsHighlighted( true );

        const timer = setTimeout( () => {
            setBtnIsHighlighted( false );
        }, 300 );

        return () => {
            clearTimeout( timer )
        }

    }, [ items ] )
    return (
        <button className={ btnClasses } onClick={ props.onclick }>
            <span className={ classes.icon }><CartIcon /></span>
            <span >your cart </span>
            <span className={ classes.badge }>{ numberOfCartItems }</span>
        </button>
    )
}

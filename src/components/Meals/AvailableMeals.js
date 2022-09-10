import React from 'react'

import { DUMMY_MEALS } from './DummyMeals';
import classes from "./AvailableMeals.module.css"
import Card from '../UI/Card'
import MealsItems from './MealsItems/MealsItems';

export default function AvailableMeals() {
    const mealsList = DUMMY_MEALS.map( meal => <MealsItems key={ meal.id } id={ meal.id } name={ meal.name } description={ meal.description } price={ meal.price } /> )
    return (
        <section className={ classes.meals }>
            <Card >
                <ul>
                    { mealsList }
                </ul>
            </Card>
        </section>
    )
}

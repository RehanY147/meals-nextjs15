import MealItem from '../MealItem/MealItem';
import classes from './Mealsgrid.module.css';

export default function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => {
        return (
          <li key={meal.id}>
            <MealItem {...meal}></MealItem>
          </li>
        )
      })}
    </ul>
  )
}
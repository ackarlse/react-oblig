/*
// 7. Lists Component
Create a Food component in the components folder.
Replace the list create above with this component. The browser should still render the list.
Remember to add "food"-prop to the <Food> component and send the food array as prop.
*/
type FoodItem = {
    food: string
}
export default function Food(props: FoodItem){
    return <li>{props.food}</li>
}
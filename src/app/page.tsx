'use client'
import Alert from './components/Alert';
import Food from './components/Food';
import MyComponent from './components/MyComponent'
import Wrapper from './components/Wrapper'
import { use, useState } from 'react';

/*
// 4. Children prop
Create a Wrapper component in the components folder
Return <section></section> from this component
Use this in App.js
Make it possible to render children between the <Wrapper></Wrapper> component. Use (props.children) in the <Wrapper> component.
*/

// 5. Styling
//Add (className='flex') to the <section> in <Wrapper> to flex the items on <Wrapper>. Add necessary styling in the styles.scss
/*
// 6. Lists
Create an array const food = ['Pizza', 'Hamburger', 'Coke'];
Render this list inside App.js. Use <ul><li></li></ul> and food.map()
Remember to add a key to <li>.
All of this should be inside the return ().
// 8. Event
Add a <button> to App.js
Listen to click-event on this button.
console.log("Clicked") when clicking the button.

// 9. Input
Add an input field to App.js
Listen to change-event on this field
console.log("change") when writing in this input.

// 10. Make the input field controlled (state)
Use useState to store the input value. And add the value={state} to the input field to make it (controlled).

// 11. Combine the button and input
When clicking the button above alert (or console.log) the content of the inputfield.


// 13. Callback (lift state) (sending a functions as a prop)

Add const [inputValue, setInputValue] = useState('') in App.js.
Add <p>{inputValue}</p> to App.js

Send setInputValue function as a prop to <Alert> from App.js.

By using this prop you should be able to update the value of inputValue in App.js, when we are writing in the <input> inside <Alert>. You can now remove the internal in <Alert>.

// Optional but very important
// 14. Multiple states (condition)

Only show the content of inputValue when the button inside <Alert> is clicked.

When clicking the button in <Alert> the value of inputValue should be what is written in the <input> inside the <Alert>.

To do this you must have state (isClicked) in App.js that is updated when the button is clicked (true / false). The function that we use to update this state must be sent to <Alert> so we can update / read its value.

Use conditional around the <p>{inputValue}</p> to only write out the message when the button is clicked. Remove the value if we click the button another time.

*/
export default function Home() {
  const food = ['Pizza', 'Hamburger', 'Coke'];
  const [inputValue, setInputValue] = useState<any>()
  const [isClicked, setIsClicked] = useState<boolean>(false)
  return (
    <Wrapper>
      <MyComponent title='It works!' />
      <article className='max-w-xl lg:max-w-lg'>
        <ul>
          {food.map(item => <Food key={item} food={item} />)}
        </ul>
      </article>
      <article className='max-w-xl lg:max-w-lg'>
        <Alert setInputValue={(newValue) => setInputValue(newValue)} inputValue={inputValue} setIsClicked={setIsClicked} isClicked={isClicked} />
        <p className='mt-4 text-lg leading-8 text-gray-300'>{isClicked? inputValue : null}</p>
      </article>
    </Wrapper>

  )
}

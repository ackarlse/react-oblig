'use client'
/**
// 12. Refactor (move) button and input
Create an Alert component in the components folder
Use this in App.js
Move the <input>, <button> and state from above to this component

// 13. Callback (lift state) (sending a functions as a prop)
Add const [inputValue, setInputValue] = useState('') in App.js.
Add <p>{inputValue}</p> to App.js

Send setInputValue function as a prop to <Alert> from App.js.
By using this prop you should be able to update the value of inputValue in App.js, when we are writing in the <input> inside <Alert>. You can now remove the internal in <Alert>.
 */
import React, { useEffect } from 'react';
interface InputValue {
    inputValue: string,
    setInputValue: React.Dispatch<React.SetStateAction<any>>,
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>,
    isClicked: boolean
}
export default function Alert(porps: InputValue){
    const {inputValue, setInputValue, setIsClicked, isClicked} = porps

    const handle = (event: { target: { value: any; }; }) =>{
        setInputValue(event.target.value)

    }

    const handleClick = ()=>{
        setIsClicked(!isClicked)
        //alert(inputValue)
    }
    return(
    <>
        <button onClick={handleClick} className='flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>Klikk</button>
        <input type="text" onChange={handle} className='min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6' />
    </>
    )
}
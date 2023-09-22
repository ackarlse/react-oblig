/*
// 3. Passing props to a child component
Create a Title component in the components folder. It should take one prop named title.
Replace the <h1> in MyComponent with the <Title> component. It should still render "It Works" in the browser. Remember to pass the prop from MyComponent to Title.
*/

type TitleProp ={
    title: string
}
export default function Title(props: TitleProp){
    const {title} = props
    return <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl basis-full">{title}</h1>
}
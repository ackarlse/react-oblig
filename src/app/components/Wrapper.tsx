/* 4. Children prop
Create a Wrapper component in the components folder
Return <section></section> from this component
Use this in App.js
Make it possible to render children between the <Wrapper></Wrapper> component. Use (props.children) in the <Wrapper> component.
*/

// 5. Styling
//Add (className='flex') to the <section> in <Wrapper> to flex the items on <Wrapper>. Add necessary styling in the styles.scss

export default function Wrapper({children} : {children: React.ReactNode}){
    return <section className="flex max-w-lg mx-auto flex-wrap gap-4 justify-between">{children}</section>
}
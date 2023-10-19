
const Checkbox = ({action}) => {
 
    return <>
        Anually
        <input type='checkbox' onChange={(event) => action(event.target.checked)}></input>
        Monthly
    </>;

}



export default Checkbox;
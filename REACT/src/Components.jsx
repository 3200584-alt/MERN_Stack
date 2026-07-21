import briyani from "./assets/Briyani.jpg";
function Briyani(props)
{
    return (
        <>
        <h1>Briyani</h1>
        <div style={{display:"flex",gap:"30px"}}>
        <p>
            {props.name} is a celebrated rice dish made with meat,
             spices, and ghee. Its name derives from the
              Persian word biryan (meaning "fried before cooking"). 
              While its name and preparation techniques stem 
              from Persian and Central Asian influences, 
              the dish evolved into its modern form in the 
              royal kitchens of the Mughal {props.k}
        </p>
        <img style={{width:"300px"}} 
        src="/Briyani.jpg" alt={briyani} />
        </div>
        </>
    );
}
export default Briyani;
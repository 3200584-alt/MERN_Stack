import {useState , useEffect}  from "react";
import UserContext from "./UserContect.jsx";
import Parent from "./Parent.jsx";
import "./Count.css";
function Count()
{
    const [count , setCount ] = useState(0);
    const [Mobile , BuyMobile]=useState(false);
    const [Lunch , FinishLunch]=useState("");
    useEffect(
        ()=>{
            document.title=`Count : ${count}`;
        },[count]
    );

    return (
        <>
        
            <h1 className="count">Count:{count}</h1>
        <div className="counting">
            <button
            onClick={
                ()=>setCount(count+1)
            }
            >
                +1
            </button>
            <button
             onClick={
                ()=>setCount(count-1)
            }
            >
                -1
            </button>
        </div>
        <h2>Phone:{Mobile ? "Android":"iPhone"}</h2>
        <button
        onClick={
            ()=>BuyMobile(!Mobile)
        }
        >
            Change
        </button>
        <div>
        <h2>I ate my {Lunch} for Lunch.</h2>
        <input type="text"
        placeholder="Dhal Rice"
        value={Lunch}
        onChange={
            (e)=>FinishLunch(e.target.value)
        }
        />
        </div>
        <UserContext.Provider value="Babu">
            <Parent />
        </UserContext.Provider>
        </>
    );
}
export default Count;
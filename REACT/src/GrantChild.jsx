import {useContext} from "react";
import UserContext from "./UserContect.jsx";
function GrandChild()
{
    const name = useContext(UserContext);
  return <h2>{name}</h2>
}
export default GrandChild;
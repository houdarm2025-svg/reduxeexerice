import {useDispatch} from "react-redux";
import { setName } from "../Redux/ActionsCreators";
const CharacterName=()=>{
const dispatch=useDispatch();
return(
    <div>
        <label htmlFor=""> Nom de personnage :</label>
        <input type="text" name="" id="" onChange={(e)=>dispatch(setName(e.target.value))}  />
    </div>
)
}

export default CharacterName;
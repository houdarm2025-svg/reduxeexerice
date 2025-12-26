import {useDispatch} from "react-redux";
import { setClass } from "../Redux/ActionsCreators";

const ClassSelector=()=>{
    const dispatch=useDispatch();
        return(

    <div>
            <label htmlFor=""><b>Classe :</b></label> <br />
            <input type="radio" name="" id="" onChange={()=>dispatch(setClass("Warior"))} /> Guerrier
            <input type="radio" name="" id="" onChange={()=>dispatch(setClass("mage"))} />Mage
            <input type="radio" name="" id="" onChange={()=>dispatch(setClass("archer"))}/>Archer
    </div>
        )
    
}
export default ClassSelector;
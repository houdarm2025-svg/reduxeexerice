import { SET_CLASS, SET_NAME, SET_STAT } from "./ActionsTypes";
   const initialState = { 
        name: 'Aventurier', 
        class: 'warrior', 
        stats: { 
        strength: 5, 
        intelligence: 5, 
        agility: 5, 
        }, 
        totalPoints: 15, 
        }; 
   const ReducerPerso=(state=initialState,action)=>{
        switch (action.type){
            case SET_NAME:
                return {...state,name:action.payload};
            case SET_CLASS :
                return {...state,class:action.payload};
            case SET_STAT:
                const newStats={ ...state.stats,[action.payload.stat]:action.payload.value };
         const total =
         newStats.strength+newStats.intelligence+newStats.agility;   

         return{
            ...state,stats:newStats,totalPoints:total
         };
         default:
         return   state;
        }
        }
        export default ReducerPerso;


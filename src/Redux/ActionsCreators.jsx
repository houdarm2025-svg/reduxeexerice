import {SET_NAME,SET_CLASS,SET_STAT} from "./ActionsTypes";
export const setName=(name)=>({
    type:SET_NAME,
    payload:name
})

export const setClass=(classe)=>({
    type:SET_CLASS,
    payload:classe
})

export const setStat=(stat,value)=>({
    type:SET_STAT,
    payload:{stat,value}
})


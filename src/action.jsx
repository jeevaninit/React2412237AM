export const IncAction=(value)=>dispatch=>{
    dispatch({
        type:"ADD",
        payload:value
    })
}

export const DecAction=(value)=>dispatch=>{
    dispatch({
        type:"DELETE",
        payload:value
    })
}
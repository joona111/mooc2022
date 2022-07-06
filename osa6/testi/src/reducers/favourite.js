const favouriteReducer = (state = 5, action) => {
    switch(action.type){
        case "FAVOURITED":
            return state+1
        case "UNFAVOURITED":
            return state-1 
        default:
            return state       
    }
    }
    export default favouriteReducer
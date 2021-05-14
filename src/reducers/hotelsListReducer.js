const initialHotelsList = []

const hotelsListReducer = (state=initialHotelsList, action) => {
    switch(action.type){
        case("GET_HOTELS_LIST"):{
            return [...action.payload]
        }

        default:{
            return [...state]
        }
    }
}
export default hotelsListReducer
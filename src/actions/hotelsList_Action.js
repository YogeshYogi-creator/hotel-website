import axios from 'axios'
import Swal from 'sweetalert2'

export const startGetHolels = () => {
    return(dispatch)=> {
        axios.get('https://fake-hotel-api.herokuapp.com/api/hotels')
        .then((response)=>{
            const result = response.data
            // console.log("Hotels", result)
            dispatch(getHotels(result))
        })
        .catch((err)=>{
            Swal.fire(err.message)
        })
    }
}
export const getHotels = (data) => {
    return {
        type: "GET_HOTELS_LIST",
        payload: data
    }
}
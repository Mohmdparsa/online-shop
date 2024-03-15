import axios from "axios"

const SERVER_URL = "http://localhost:9000";

//@desc Get All Cards
//@route GET http://localhost:9000/Cards
export const getAllCards = () => {
    const url = `${SERVER_URL}/Cards`
    console.log("url" , url)
    return axios.get(url)
}
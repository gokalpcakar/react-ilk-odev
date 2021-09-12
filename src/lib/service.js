import axios from "axios"

export default async function getData(userId){

    const {data} = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
    console.log(data);
}
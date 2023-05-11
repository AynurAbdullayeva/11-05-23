
import { BASE_URL } from "./base_url";
import axios from "axios";

//get all orders
export const getAllOrders = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/orders`)
    .then(res=>{
        globalData = res.data;
    })
    return globalData;
}
//delete supplier by id
export const deleteSupplierByID = id =>{
    axios.delete(`${BASE_URL}/orders/${id}`);
}
//post supplier 
export const postOrders = (payload)=>{
    axios.post(`${BASE_URL}/orders`,payload);
}
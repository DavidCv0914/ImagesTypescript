import axios from "axios";
import { images } from "../App";

let url:string = "http://localhost:4000"

export const createImage = async (values:images) =>
await axios.post(`${url}/crearImage`, values);

export const getImages = async () =>
await axios.get(`${url}/`);

export const updateImage = async (param?:number,values?:images) =>
await axios.put(`${url}/updateImage/${param}`, values);

export const deleteImage = async (param?:number) =>
await axios.delete(`${url}/deleteImage/${param}`,);
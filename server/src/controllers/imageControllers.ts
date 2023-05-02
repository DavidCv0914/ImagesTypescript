import { Request,Response } from "express";
import conexion from "../database/database";

class Images {

    public async getImages(req : Request,res : Response){
        try {
            const [result] = await conexion.query("SELECT * FROM imagenes")
            res.json(result)  
        } catch (error) {
            res.json(error)
            console.log(error);
        }
    }

    public async getImage(req : Request,res : Response){
        try {
            let {id} = req.params
            const [result] = await conexion.query("SELECT * FROM imagenes WHERE id = ?",[id])
            res.json(result)  
        } catch (error) {
            res.json(error)
            console.log(error);
        }
    }

    public async createImage(req : Request,res : Response){
        try {
            let {title,description,img} = req.body

            await conexion.query("INSERT INTO imagenes(title, description, img) VALUES (?, ?, ?)",[title,description,img])
            res.json("save img")
        } catch (error) {
            res.json(error)
            console.log(error);  
        }
    }

    public async updateImage(req : Request,res : Response){
        try {
            let {id} = req.params
            let {title,description,img} = req.body
            
            await conexion.query("UPDATE imagenes SET title = ?, description = ?,img = ? WHERE id = ?",[title,description,img,id])
            res.json("update")
        } catch (error) {
            res.json(error)
            console.log(error); 
        }
    }

    public async deleteImage(req : Request,res : Response){
        try {
            let {id} = req.params
            
            await conexion.query("DELETE FROM imagenes WHERE id = ?",[id])
            res.json("delete")
        } catch (error) {
            res.json(error)
            console.log(error);
        }
    }

}

export const images = new Images();
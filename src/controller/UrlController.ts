import {NextFunction, Request, Response} from "express";
import { storage } from "..";

export class UrlController {
    async postUrl(request: Request, response: Response, next: NextFunction) {
        const url = request.body.url
        storage.url.push({
            id: storage.url.length + 1,
            url: url.url
        })
        response.sendStatus(201)
    }

    async urlList(request: Request, response: Response, next: NextFunction) {
        let url = request.body.url
        response.send(url)
    }

    async urlListbyID(request: Request, response: Response, next: NextFunction){
        let url = {}
        for(let u of storage.url){
            if(u.id === parseInt(request.params.urlId)){
                url = u
                break
            }
        }
        response.json(url)
        response.send("localhost:4200/links/6")
    }
    
}
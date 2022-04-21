import {Request, Response, NextFunction} from 'express';
import axios, {AxiosResponse} from 'axios';
import { isInterfaceDeclaration } from 'typescript';

interface Post{
    id: string;
    startintPoint: string;
    direction: string;
    route: string;
    size: number;
    obstacle: boolean;
    obstacleCoords: string;
}

const getAllRoutes = async (req: Request, rest: Response, next: NextFunction) => {
    let result: AxiosResponse = await axios.get('../arb.prov.ts/routeInfo.json')
    let posts: [Post] = result.data;
    return rest.status(200).json({
        message: posts
    });

};

const getRouteById = async (req: Request, res: Response, next: NextFunction) => {
    let routeById: string = req.params.id;
    let result: AxiosResponse = await axios.get('../arb.prov.ts/routeInfo.json${id}');
    let post: Post = result.data;
    return res.status(200).json({
        message: post
    });
};

export default { getAllRoutes, getRouteById};

//fortsätt såhär hälsar hagesjö
//räcker det att kalla id för att få all relevant data?
//Behöver jag verkligen en server?
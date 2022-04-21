import {Request, Response, NextFunction} from 'express';
import { isInterfaceDeclaration } from 'typescript';
import {default as routeInfo} from '../FileJSON/routeInfo.json';
//import routeInfo from './routeInfo.json'

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
    //let result: AxiosResponse = await axios.get('../FileJSON/routeInfo.json')
    let result = Object.values(routeInfo)
    //let posts: [Post] = result.data;
    return rest.status(200).json({
        message: result
    });

};

const getRouteById = async (req: Request, res: Response, next: NextFunction) => {
    let routeById: string = req.params.id;
    //let result: AxiosResponse = await axios.get('../routeInfo.json${id}');
    //let post: Post = result.data;
    let result = routeInfo[routeById as keyof typeof routeInfo];
    return res.status(200).json({
        message: result
    });
};

export default { getAllRoutes, getRouteById};

//fortsätt såhär hälsar hagesjö
//räcker det att kalla id för att få all relevant data?
//Behöver jag verkligen en server?
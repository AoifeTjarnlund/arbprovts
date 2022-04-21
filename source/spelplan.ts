 import {default as arenaInfo} from './FileJSON/arenaInfo.json';

//const json = roboRoutes['robot routes'];
const json = arenaInfo.arena
 
 
interface arenaInterface{
    size: any;
    obstacle: boolean;

}
class spelplan {
    
      x: any;
      y: number;

    constructor(height: number, width: number){
        this.x = width;
        this.y = height;
        
    }
 
}
class robot{
    x: number | undefined;
    y: number | undefined;
    dir: string | undefined;
    commands:string = "hehehe"

    getAllRoutes()



    constructor(x:number, y:number, dir:string){
        this.x = x;
        this.y = y;
        this.dir = dir;
    }

    getX(){
        return this.x;
    }

    setX(x:number){
        this.x = x;
    }

    getY(){
        return this.y
    }

    setY(y:number){
        this.y = y;
    }

    getDir(){
        return this.dir;
    }

    setDir(dir:string){
        this.dir = dir;
    }

    function move(commands:string){
        var commandsArray:string[] = commands.split("")
        //split string into array
        //loop through array
        //for every loop put into switch case
        //om "upp" set dir to U




        return null;

    }
}

//Add obstacle t ex mvh hagesjö
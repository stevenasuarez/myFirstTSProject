module demo{

    interface SquareFunction{
        (x: number): number;
    }
    let squareItBasic: SquareFunction = (num: number) => num * num;


    /**
     * Interface rectangle
     */

    interface Rectangle {h:number; w?:number}

    let squareIt: Function =
        (rect: Rectangle): number => {
        if(rect.w !== undefined) {
            return rect.h * rect.w;
        }
            return rect.h * rect.h;
        };



    var rectA = { h:7 };
    var rectB = { h:7, w: 12};

    /*squareIt = function(rect) {
        if(rect.w !== undefined) {
            return rect.h * rect.w;
        }
        return rect.h * rect.h;
    }*/
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
}
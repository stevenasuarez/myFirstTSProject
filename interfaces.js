var demo;
(function (demo) {
    var squareItBasic = function (num) { return num * num; };
    var squareIt = function (rect) {
        if (rect.w !== undefined) {
            return rect.h * rect.w;
        }
        return rect.h * rect.h;
    };
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 12 };
    /*squareIt = function(rect) {
        if(rect.w !== undefined) {
            return rect.h * rect.w;
        }
        return rect.h * rect.h;
    }*/
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
})(demo || (demo = {}));

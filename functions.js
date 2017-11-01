var demo;
(function (demo) {
    var helloWorld = function (name) {
        console.log('Hello ' + (name || 'unknown person'));
    };
    var name = 'Andrés';
    /*helloWorld(name);
    helloWorld();*/
    var squareIt;
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 12 };
    squareIt = function (rect) {
        if (rect.w !== undefined) {
            return rect.h * rect.w;
        }
        return rect.h * rect.h;
    };
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
})(demo || (demo = {}));

interface Irectangle{
    height: number;
    width: number;
    getArea(): number;
}


namespace Shapes {
    export  class Rectangle implements Irectangle{
        public height: number;
        public width: number;
        constructor(height: number, width: number){
            this.height = height;
            this.width = width;
        }

        getArea(){
            return this.height * this.width;
        }

    }
}

window.onload = function(){
    var rect: Irectangle = new Shapes.Rectangle(10,40);
    var area = rect.getArea();
    alert(area)
}
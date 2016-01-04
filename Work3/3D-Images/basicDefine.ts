module basic {
 export  class Vector {
    constructor(public x: number, public y: number, public z: number) {
             
    }
    //倍数
    static times(k: number, v: Vector){
        return new Vector(k * v.x, k * v.y, k * v.z);
    }
     static minus(v1: Vector, v2: Vector) {
        return new Vector(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
    }

    //加
    static plus(v1: Vector, v2: Vector) {
        return new Vector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
    }
    //减
    static dot(v1: Vector, v2: Vector) {
        return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
    }

    //距离
    static mag(v: Vector) {
        return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
    }
    //正常值
    static norm(v: Vector) {
        var mag = Vector.mag(v);
        var div = (mag === 0) ? Infinity : 1.0 / mag;
        return Vector.times(div, v);
    }

    //转置矩阵
    static cross(v1: Vector, v2: Vector) {
        return new Vector(v1.y * v2.z - v1.z * v2.y,
                          v1.z * v2.x - v1.x * v2.z,
                          v1.x * v2.y - v1.y * v2.x);
    }

}


export class Color {
    constructor(public r: number, public g: number, public b: number) {
        
    }
    static scale(k: number, v: Color) {
        return new Color(k * v.r, k * v.g, k * v.b);
    }

    static plus(v1: Color, v2: Color) {
        return new Color(v1.r + v2.r, v1.g + v2.g, v1.b + v2.b);
    }

    static times(v1: Color, v2: Color) {
        return new Color(v1.r * v2.r, v1.g * v2.g, v1.b * v2.b);
    }

    static white = new Color(1.0, 1.0, 1.0);
    static grey = new Color(0.5, 0.5, 0.5);
    static black = new Color(0.0, 0.0, 0.0);
    static background = Color.black;
    static defaultColor = Color.black;
    
    static toDrawingColor(c: Color){
        var legalize = d => d > 1 ? 1 : d; //lambda expression function 
        return {
            r: Math.floor(legalize(c.r) * 255),
            g: Math.floor(legalize(c.g) * 255),
            b: Math.floor(legalize(c.b) * 255)
        }
    }


}


export interface Surface {
    diffuse: (pos: Vector) => Color;
    specular: (pos: Vector) => Color;
    reflect: (pos: Vector) => number;
    roughness: number;
}
}
 
export default class Punto {
    constructor() {
        this._ejeX = 0;
        this._ejeY = 0;
    }

    get ejeX() {
        return this._ejeX;
    }

    get ejeY() {
        return this._ejeY;
    }

    set ejeX(x) {
        if (x > -100 || x < 100) {
            this._ejeX = x;
        } else {
            this._ejeX = 0;
        }
    }

    set ejeY(y) {
        if (y > -100 || y < 100) {
            this._ejeY = y;
        } else {
            this._ejeY = 0;
        }
    }

    _distanciaEntrePuntos(x1, y1, x2, y2) {
        let distanciaPuntos = Math.sqrt(((x2-x1)**2) + ((y2-y1)**2));
        return distanciaPuntos;
    }

    _toString() {
        let string = '(' + this._ejeX + '. ' + this._ejeY + ')';
        return string;
    }
}
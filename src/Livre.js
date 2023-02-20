//Un livre
export default class Livre {
    constructor(id, titre, qtestock, prix) {
      this._id = id;
      this._titre = titre;
      this._qtestock = qtestock;
      this._prix = prix;
    }
    get id() {
      return this._id;
    }
    get titre() {
      return this._titre;
    }
    get qtestock() {
      return this._qtestock;
    }
    get prix() {
      return this._prix;
    }
  
    incrementer() {
      return this._qtestock += 1;
    }
  
    decrementer() {
      if (this._qtestock>0){
        return this._qtestock -= 1;
      }
    }
  
    pourAfficher() {
      return `${this._titre}, ${this._qtestock} en stock, ${this._prix}€`;
    }
  }
  
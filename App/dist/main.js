"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_localstorage_1 = require("node-localstorage");
class LocalStorageInterface extends node_localstorage_1.LocalStorage {
    constructor(location, size) {
        super(location, size !== null && size !== void 0 ? size : 500 * 1024 * 1024);
    }
    /**
     * Método para concatenar com item criado anteriormente
     * @param key
     * @param value
     */
    joinWithItem(key, value) {
        var _a;
        if (this.getItem(key) !== null) {
            let itemValue = (_a = this.getItem(key)) !== null && _a !== void 0 ? _a : "";
            if (this.isJSON(value)) {
                // FIX: Bug
                itemValue = JSON.stringify(itemValue) + JSON.stringify(value);
                // itemValue = JSON.stringify(itemValue);
                // itemValue += JSON.stringify(value);
                console.log("json");
                this.setItem(key, itemValue);
            }
            else {
                itemValue += value;
                console.log("string");
                this.setItem(key, itemValue);
            }
        }
        else {
            console.error(`O item ${key} não foi definido`);
        }
    }
    isJSON(value) {
        try {
            if (typeof value === "object") {
                JSON.stringify(value);
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            return false;
        }
    }
}
const newLocalStorage = new LocalStorageInterface("./App/storage");
// newLocalStorage.setItem("testando", "w")
const dataAPI = {
    "cep": "01001-000",
    "logradouro": "Praça da Sé",
    "complemento": "lado ímpar",
    "unidade": "",
    "bairro": "Sé",
    "localidade": "São Paulo",
    "uf": "SP",
    "estado": "São Paulo",
    "regiao": "Sudeste",
    "ibge": "3550308",
    "gia": "1004",
    "ddd": "11",
    "siafi": "7107"
};
newLocalStorage.joinWithItem("testando", dataAPI);
// var result = newLocalStorage.getItem("testando");
// if(result){
//   console.log(JSON.parse(result))
// }
// const localstorage = new LocalStorage("./App/storage");
// console.log(typeof dataAPI);
// localstorage.setItem("info_user", JSON.stringify(dataAPI))

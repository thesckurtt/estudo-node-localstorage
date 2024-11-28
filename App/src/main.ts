import { LocalStorage } from "node-localstorage";

const localstorage = new LocalStorage("./App/storage", 1);

// localstorage.setItem("primeiro.txt", "Que legal ele funcionando!!!")

// const pessoa = {
//   nome: "Maicon",
//   idade: 33
// }

// localstorage.setItem("json", JSON.stringify(pessoa))

// const pessoaLS = localstorage.getItem("json.json")

// console.log(pessoaLS)
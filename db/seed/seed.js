import {db} from "../firebase-config.js"
import {collection, addDoc } from "firebase/firestore"
import productos from "./productos.js"

const itemsCollectionRef = collection(db, "productos");

const promises = productos.map((producto) => addDoc(itemsCollectionRef, producto))

Promise.all(promises).then(() => {
    console.log("Base de Datos populada con exito");
    process.exit(0);
})
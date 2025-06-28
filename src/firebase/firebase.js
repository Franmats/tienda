// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDoc, getDocs,deleteDoc, updateDoc, collection, doc } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCywIgZrWmXsHAdG1lP7oAMKMj5nYPUTwA",
  authDomain: "e-commerce-39665.firebaseapp.com",
  projectId: "e-commerce-39665",
  storageBucket: "e-commerce-39665.appspot.com",
  messagingSenderId: "946993045813",
  appId: "1:946993045813:web:40b7850545f75b6b516c7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// COnsultar Base de datos

const bdd = getFirestore() //consulta a base de datos en la nube, crud , create, redact,update,delete, post, get, put, delete

export const crearProductosEnBdd = async () => {
    const promise = await fetch("./json/products.json")
    const productos = await promise.json()
    productos.forEach(async prod => {
        await addDoc(collection(bdd,"products"), {
            nombre: prod.nombre,
            nombretag: prod.nombretag,
            idCategoria: prod.idCategoria,
            descripcion: prod.descripcion,
            imagen: prod.imagen,
            precio: prod.precio,
            stock: prod.precio

        })
        
    });
}

export const consultarProductos = async () => {
    const prods = await getDocs(collection(bdd,"products"))
    const items = prods.docs.map( prod => {
        return {...prod.data(), id: prod.id}
    })
    return items
}

export const consultarProducto = async (id)=> {
    const prod = await getDoc(doc(bdd,"products", id))
    const item = {...prod.data(), id:prod.id}
    return item
}

export const actualizarProducto = async(id,info)=> {
    await updateDoc(doc(bdd, "products", id),info)

}

export const eliminarProducto = async(id) => {
    await deleteDoc(doc(bdd, "products",id))
}

// ORDENES DE COMPRA

export const crearOrdenDeCompra = async(cliente, precioTotal, cart, fecha) => {
    const ordenCompra =await  addDoc(collection(bdd, "ordenCompra"),{
        cliente: cliente,
        items:cart,
        precioTotal:precioTotal,
        fecha:fecha

    })

    return ordenCompra

}

export const consultarOrdenCompra = async(id)=> {
    const ordenCompra = await getDoc(doc(bdd,"ordenCompra",id))
    const item = {...ordenCompra.data(),id:ordenCompra.id}
    return item
}

export const eliminarOrdenCompra = async(id) => {
    await deleteDoc(doc(bdd, "ordenCompra",id))
}
// Funciones para trabajar con firebase


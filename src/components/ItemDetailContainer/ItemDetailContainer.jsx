//Visualizar un producto de la BDD con sus detalles
import './ItemDetailContainer.css'
import { consultarProducto } from '../../firebase/firebase';
import { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
export const ItemDetailContainer = () => {
    
    const [item,setItem] = useState([])
    const {id} = useParams()
    useEffect(()=> {
        consultarProducto(id)
        .then(produ => {
            setItem(produ)
        })
    },[])
    return (
        <div className='cardDetail'>
            <ItemDetail item={item} />   
        </div>
    );
}




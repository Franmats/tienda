import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount';
import { useCart } from '../CartContext/CartContext.jsx';

export const ItemDetail = ({item}) => {
    
    const {addToCart} = useCart()
    const onAdd = (contador) => {
        console.log(contador,item)
        const producto = { ...item, quantity: contador }
        console.log("aaa",producto)
        addToCart(producto)
    }
    return (
        < >
            <div>
                <img src={item.imagen} alt={item.name} />
            </div>
            <div className='detail'>
                <h3 className='detailDes'>{item.name}</h3>
                <div className='detailDescrip'>{item.descripcion}</div>
                <div><b>${item.price}</b></div>
                <div className='detailDescrip'>Stock:{item.stock}</div>
                <div className='contador'><ItemCount ValInicial={1} min={1} max={item.stock} onAdd={onAdd} /></div>
            </div>
            
           
            

        </>
    );
}



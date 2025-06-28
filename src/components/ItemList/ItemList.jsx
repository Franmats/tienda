// Recibir una array de productos y transformarlo
import { Item } from '../Item/Item.jsx';
import { ItemCart } from '../ItemCart/ItemCart.jsx';
export const ItemList = ({productos,plantilla}) => {
    
    return (
        <>  
            {
                plantilla === "Item" ?
                productos.map(producto => <Item key={producto.id} item={producto}/>)
                :
                productos.map(producto => <ItemCart key={producto.id} item={producto}/>)
            }
            
        </>
    );
}


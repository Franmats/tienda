import { Link } from "react-router-dom";
import "./Categorias.css";

export const Categorias = () => {
    return (
        <>
            <ul className="lista">
                <li className="lista__item">
                    <Link className="itemTexto" to={"/"}><h4>INICIO</h4></Link>
                </li>
                <li className="lista__item">
                    <Link className="itemTexto" to={"/comidas"}><h4>COMIDA</h4></Link>
                </li>
                <li className="lista__item">
                    <Link className="itemTexto" to={"/bebidas"}><h4>BEBIDAS</h4></Link>
                </li>
                <li className="lista__item">
                    <Link className="itemTexto" to={"/pizzas"}><h4>PIZZAS</h4></Link>
                </li>
                <li className="lista__item">
                    <Link className="itemTexto" to={"/sandwiches"}><h4>SANDWICHES</h4></Link>
                </li>
            </ul>
        </>
    );
}



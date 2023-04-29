import {addToCart} from "../features/cart/cartSlice";
import {useDispatch} from "react-redux";
import "../styles/home.scss";
import { useNavigate } from "react-router-dom";

export default function Book ({data, index}){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return <div>
            <h4>{data.title}</h4>
        <img src={"images/" + data.img} alt=""/>
        <p>$ {data.price}</p>
        <button className="btn" onClick={()=>dispatch(addToCart(data))}>Add to Cart</button>
        <button className="btn" onClick={()=>navigate("/edit/" + index)}>Edit</button>
    </div>
}
import {useDispatch, useSelector} from "react-redux";
import {selectCart, emptyCart} from "../features/cart/cartSlice";
import {useNavigate} from "react-router-dom";
import {useState}  from "react"

export default function Cart(){
    const cart = useSelector(selectCart); //matches value from store
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [complete, setComplete] = useState(false);




    const buyHandler = function(){
        setComplete(true)
        dispatch(emptyCart()); //need dispath so redux knows about it
      

    }

    
    



    return <div>
        <button onClick={()=>navigate("/")}>Home</button>
   
        {
            cart.map((c,i)=> {
                return <div key={c.title + i }>{c.title} -  {c.price}</div>
            })
        }
        <button className="btn" onClick={buyHandler}>
            Buy
        </button>
        {
            complete ? <div>Purchase Completed</div>:""
        }
    </div>
}
import { useNavigate, useLocation } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectBooks, updatePrice} from "../features/book/bookSlice";
import {useState, useEffect} from "react";

export default function Edit() {
    const books = useSelector(selectBooks); //matches value from store
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [thisBook, setThisBook] = useState({})
    const [editValue, setEditValue] = useState(0)


    //useEffect with bracket = only ru once on load
    useEffect(()=>{
       const targetIndex = location.pathname.split("/")[2];
       setThisBook( books[targetIndex] )
       setEditValue(  books[targetIndex].price )
    }, [])

    const updateHandler =  () => {
        const targetIndex = location.pathname.split("/")[2];
        console.log("click");
        dispatch(updatePrice(
            {id: targetIndex,newPrice: editValue}
            ))

            
            navigate("/")

    }
    //console.log(thisBook);

    return <div className="container">
        <h2>Edit</h2>
        <h4>{thisBook.title}</h4>
        <p>{thisBook.desc}</p>
        <input name="bookPrice" value={editValue} onChange={(e)=>setEditValue(e.target.value)} /><br/>
        <button className="btn" onClick={updateHandler} >Update Price</button>
        
        <br/>
        <button className="btn" onClick={()=>navigate("/")}>back to home</button>
    </div>
}
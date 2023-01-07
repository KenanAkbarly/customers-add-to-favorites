//  import { Empty } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { emptyProduct } from "../redux/Favorite";
import { Link } from "react-router-dom";
import '../pages/fav.scss'
import { toast } from "react-toastify";
 const Fav = ()=>{
 const dispatch = useDispatch()
    const selectorData =  useSelector(state=>state.cart.favItems)


    return(
        <div className="fav_conatiner">
            <h2>Shopping Cart</h2>
                <h3 className="product-title">Count:<span>{selectorData.length}</span></h3>
            {selectorData.length ===0?(<div className="fav-empty">Your Favorite in currently empty
            <div>
                <Link to='/customers'><button className="startShoppingBtn">Start Shopping</button></Link>
            </div>
            </div>):(<div className="titile_body">
            <div className="title">
                <ol>
                
                 {selectorData?.map(favItem=>{
                 
                 return(
                    <li key={favItem.id}><span>{favItem.id}, </span><span>{favItem.companyName}</span></li>
                 )})}
                </ol>
            </div>
           <button onClick={()=>{
            dispatch(emptyProduct())
            toast
            .success(`cleared favorites!`,{
                position:"bottom-left"
              })
           }}>Empty</button>
            </div>)}
        </div>
    )
 }
 export default Fav
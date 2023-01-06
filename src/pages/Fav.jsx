//  import { Empty } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../pages/fav.scss'
 const Fav = ()=>{

    const selectorData =  useSelector(state=>state.cart.favItems)


    return(
        <div className="fav_conatiner">
            <h2>Shopping Cart</h2>
            {selectorData.length ===0?(<div className="fav-empty">Your Favorite in currently empty
            <div>
                <Link to='/customers'><button>Start Shopping</button></Link>
            </div>
            </div>):(<div>
            <div className="title">
                <h3 className="product-title">Count:<span>{selectorData.length}</span></h3>
                <ol type="1">
                 {selectorData?.map(favItem=>(
                    <li key={favItem.id}><span>{favItem.id}</span><span>{favItem.companyName}</span></li>
                 ))}
                </ol>
            </div>
            </div>)}
           
        </div>
    )
 }
 export default Fav
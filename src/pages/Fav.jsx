//  import { Empty } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
 const Fav = ()=>{
    const fav = useSelector((state)=>state.favorite)
    return(
        <div className="fav_conatiner">
            <h2>Shopping Cart</h2>
            {fav.favItems.length ==0?(<div className="fav-empty">Your Favorite in currently empty
            <div>
                <Link to='/'><span>Start Shopping</span></Link>
            </div>
            </div>):(<div>
            <div className="title">
                <h3 className="product-title">Count:<span></span></h3>
                <ol>
                 {fav.favItems?.map(favItem=>(
                    <li key={favItem.id}>{favItem.id}</li>
                 ))}
                </ol>
            </div>
            </div>)}
           
        </div>
    )
 }
 export default Fav
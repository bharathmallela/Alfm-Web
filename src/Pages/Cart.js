import React,{useState,useEffect} from 'react'
import NavMenu from '../components/NavMenu'
import './Cart.css'
import {connect} from 'react-redux'
// import {CartContext} from '../components/CartContext'
import { useDispatch,useSelector} from 'react-redux'




function Cart (props){
    const [Search, setSearch] = useState('')        
    const [Cartval, setCartval] = useState([])
    const dispatch = useDispatch();
    const load = useSelector(state => state.cartState);
    
    useEffect(() => {
        dispatch({type:'LOAD_CART',payload:load})
    }, [load])
    
    const cart = useSelector(state => state.cartState);
    
    console.log(cart,'from cart') 
    var total = cart.reduce(function(sum, item){
        return sum = sum+item.Qty;
    },0);
    console.log(total,'the total quantity')
    var totalCost = cart.reduce(function(sum, item){
        return sum += item.Qty*item.finalPrice;
    },0);
    console.log(totalCost,'the total quantity')

    if( total === 0 ){
        return(
          <div>
              <NavMenu setSearch={setSearch} cartData={Cart} setCartval={setCartval}/>
              <div className='Header' ><h1>Cart</h1></div>
              <div className='no-item'><h1 className='cart-empty'>No items added <i className='fas fa-shopping-cart'/></h1></div>
          </div>
        )
      }
      


        
    return (
        <div className='cart-container'>
            <NavMenu setSearch={setSearch} cartData={Cart} setCartval={setCartval}/>
            <div className='Header' ><h1>Cart</h1></div>
            <div className='cart-details'>
                <div className='cart-products'>{
                    cart.map(card=>{
                        return(
                        <div className='product-template' key={card._id}>
                        <div className='template-img'><img src={card.productImages[0].s3URL}
                        height='250'>
                            </img></div>
                        <div className='template-data'>
                            <div className='template-name'><p>Product Name</p><h3>{card.productName}</h3></div>
                            <div className='template-price'><p>Product price</p><div className='dynamic-product'><h2>Rs. {card.finalPrice} </h2><p> * {card.Qty}</p></div></div>
                        </div>
                        <div className='template-button'>
                            <div className='cart-button'>
                                <button className='decrement' onClick={() => dispatch({type:'DEL_CART',payload:card})}><h1>-</h1></button><h1>{card.Qty}</h1><button className='increment' onClick={() => dispatch({type:'NEW_CART',payload:card})} ><h1>+</h1></button>
                            </div>
                        </div>
                        </div>
                    )})}
                </div>
                <div className='cart-price'>
                    <div className='template-items'><p>Price details</p><h4>items:{total}</h4></div>
                    <div className='template-total'>
                        <div className='cart-total'><p>Cart total</p><h4>Rs. {totalCost}</h4></div>
                        <div className='cart-discount'><p>Discount</p><h5>Add coupon</h5></div>
                        <div className='cart-delivery'><p>Delivery</p><h5>Free delivery</h5></div>
                    </div>
                    <div className='template-checkout'><button>Check out</button></div>
                </div>
            </div>
        </div>


        )
    }


export default Cart;


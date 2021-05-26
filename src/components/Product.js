import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './Product.css'
import Modals from './Modals'
import Cart from '../Pages/Cart'
import {connect, useDispatch,useSelector} from 'react-redux'



const Product = (prop,{setMdata,setShow}) => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartState);
    const info = prop.prop
    let value  = prop.search
    
    function Mod (state,value) {
        prop.setMdata(value)
        prop.setShow(state)

    }

    return (
        <>

            {info.filter((val)=>{
                if (value == ''){
                    return (val)
                }
                else if(val.productName.toLowerCase().includes(value.toLowerCase())){
                    return (val)
                }
            })
            
            .map(val => {
                    
                    return(
                        
                            
                    <div className='Card' key={val._id}>
                        <div className='Card-image' >
                            <a  className='product-card-link' onClick={() => Mod(true,val)} >
                                <div className='product-img'>
                                    <img src={val.productImages[0].s3URL} height='250' ></img>
                                </div>
                            </a> 
                        
                        </div>
                        <div className='Card-body'>
                            <p className='product-title'>{val.productName}</p>
                            <p className='product-price'>RS. {val.finalPrice}<span className='orignal-prices'>RS. {val.totalPrice}</span></p>
                            <div className='product-button'>
                                <p className='product-discount'>Save {val.discountPercentage} %</p>
                                <button className='product-cart' onClick={() => dispatch({type:'NEW_CART',payload:val})}>ADD TO CART</button>
                                
                            </div>
                        </div>
                    </div>

                )
            })}
        </>
    )
}


export default Product;

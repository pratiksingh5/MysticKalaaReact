import React, { useContext } from 'react'
import {  useHistory, useParams } from 'react-router-dom'
import { productData } from '../../App'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Products(props) {

    const params = useParams()
    const history = useHistory()
    const categoryData = useContext(productData)
    const data = categoryData.filter((f)=> {return f.category === params.id})
    
    
    return (
        <>
        <br />
            
        <ToastContainer onClick={()=> history.push('/cart')}> 
        </ToastContainer>
        <div id="product">
        <h1 style={{marginLeft:'50px',color:'grey'}}>Buy {params.id} Items Online</h1>
            
            <div className="productContainer">
        {
            data.map(({title,price,photo,category,_id})=>{
                return (
                    
            
                    <div className="card" key={_id} >
                        <div className="cardimg"></div>
                        <h6>{title} </h6>
                        <div className="info"><span>SS 599</span><button onClick={()=>props.AddToCart({title,price,photo,category,_id})} >Add to cart</button></div>
                    </div>

            
        
                )
            })
        }
            </div>
            
        </div>
        </>
    )
}

export default Products

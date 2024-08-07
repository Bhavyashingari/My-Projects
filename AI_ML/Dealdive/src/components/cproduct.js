import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Suggestion.css';
import '../css/dproduct.css';
import '../css/cproduct.css';
// import productList from '../static/data/products.js';
import cart from '../static/data/cart.js';



import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


export default function Cproduct() {



    const [productList, setProductList] = useState([]);

    const addtoarray = async(response) => {
        await setProductList(response)
    }

    const url="http://192.168.1.22/dealdive/php-server/cproduct.php"

    const fetch=()=>{
    axios.request(url)
    .then(response=> addtoarray(response.data , productList))
    .catch(error=> alert(error));
    }
  
    
  
    useEffect(() => {
      fetch();
      
      const databaseChangeListener = () => {
        
        setTimeout(fetch, 0); 
      };
      const interval = setInterval(databaseChangeListener, 10000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);





  return (
    <>
        <div className='sugg-list'>
        <h1 className='h1'>
                choose category
            </h1>
            <div className='cet-list'>
                <div className='chooise-btn select'>Fruits</div>
                <div className='chooise-btn'>Poultry</div>
                <div className='chooise-btn'>Vegetables</div>
                <div className='chooise-btn'>Bakery</div>
                <div className='chooise-btn'>Dairy</div>
                <div className='chooise-btn'>Grains</div>
                <div className='chooise-btn'>Beverages</div>
                <div className='chooise-btn'>Meat</div>
                <div className='chooise-btn'>Pasta</div>
                <div className='chooise-btn'>Seafood</div>
                <div className='chooise-btn'>Breakfast</div>
                <div className='chooise-btn'>Baking</div>
                <div className='chooise-btn'>Spices</div>
                <div className='chooise-btn'>Cooking Oils</div>
                <div className='chooise-btn'>Condiments</div>
                <div className='chooise-btn'>Sweeteners</div>
                <div className='chooise-btn'>Spreads</div>
                <div className='chooise-btn'>Nuts</div>
                <div className='chooise-btn'>Dried Fruits</div>
                <div className='chooise-btn'>Sweets</div>
                <div className='chooise-btn'>Canned Goods</div>
                <div className='chooise-btn'>Pulses</div>
                <div className='chooise-btn'>Herbs & Spices</div>
                



                
            </div>


            <div className='list noslide'>
                
                {
                    
                    productList.map((product)=>{
                        return(
                            

                            
                            product.cetegeory=="Fruits"
                            ?
                            <div key={product.pid} className='list-element no-margin'>
                                <Link className="Linkp" to={"/productpage/"+product.pid}>
                                <img className="list-element-img" src={product.img}/>    
                                <p className="item-name">{product.name}<br/>(Local store)</p>
                                </Link>
                                <p className="price">{product.price}$</p>
                                
                                {
                                    cart.includes(product.pid)
                                    ?
                                    <>
                                        <div className='add-buttton' >
                                            <div className='chevron-left'>-</div>
                                            <div className='chevron-right'>+</div>
                                        </div>
                                        <p className='show'>{cart.reduce((total,x) => total+(x==product.pid), 0)}</p>
                                    </>
                                    :
                                    <>
                                        <button className="add-buttton" id="chevron"></button> 
                                        <p className='show'>+</p>
                                    </>
                                    
                                }
                            </div>
                            :
                            ""



                            
                        );
                    })
                }

            </div>
        </div>
    </>
  )
}

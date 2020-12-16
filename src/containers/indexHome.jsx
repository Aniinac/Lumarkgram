import {React, useEffect} from 'react';
import axios from 'axios';
import './iStyles/iStyles.css';
import { useSelector, useDispatch, connect } from "react-redux";
import { getAllProducts, setFavProducts, deleteFavProducts,
        selectAllProducts, selectFavProducts} from "../reducers/itemSlice";

function IndexHome(props) {

    const dispatch    = useDispatch();
    const allProducts = useSelector(selectAllProducts);
    console.log(allProducts);
    

    useEffect( ()=>{
        function SearchProducts(){
       axios.get('https://pz8cvzu4sl.execute-api.us-east-1.amazonaws.com/dev/product-ms/product/getProductByIdCompany?id=5e8d08fafd3f3d2eb89c5063#')
            .then(res => { dispatch(getAllProducts(res.data));
                    })
            .catch(err => console.log(err)); 
                    }
       SearchProducts();
   },[dispatch]);

   const btnAgg = () =>{
    dispatch(setFavProducts(allProducts[0]));
}
    return (
        <div className="row">
        <h1> HOME PAGE</h1>
            <button onClick={() => btnAgg()}>agg primera product</button>
            <h1> </h1>
            <h1> </h1>
            
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
       
            
            

       
 </div>
    )
}



export default IndexHome;

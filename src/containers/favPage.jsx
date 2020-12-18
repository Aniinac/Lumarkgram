import React from 'react';
import './iStyles/iStyles.css';
import { useSelector, useDispatch } from "react-redux";
import { deleteFavProducts, selectFavProducts} from "../reducers/itemSlice";
import { Grid3x3 } from 'react-bootstrap-icons';
import CardFav from './cards/cardFav'

const FavPage = (props) => {

    const dispatch = useDispatch();
    const FavProducts = useSelector(selectFavProducts);

    const deleteFavorite = (index) => {
        let indexF = index;
        indexF !== undefined ? dispatch(deleteFavProducts(indexF)) : console.log(indexF)

    } 
    return (
        <div className="container">
            <div className="row">
                <div className="row">
                    <h5 className="pp1 mt-3"> <Grid3x3/> ME GUSTA</h5>
                        <hr className="hrStyle2" />
                 </div>
                {FavProducts !== undefined ?FavProducts.map((product, index) => {
                    return (
                        <CardFav
                            key={product._id}
                            product={product}
                            DeleteFav={() => deleteFavorite(index)}
                        />
                    )
                }): <div></div> }
            </div>
        </div>
    )
}



export default FavPage;
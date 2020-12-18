import {React} from 'react';
import './iStyles/iStyles.css';
import { useSelector, useDispatch } from "react-redux";
import { setFavProducts, deleteFavProducts, selectAllProducts, selectFavProducts} from "../reducers/itemSlice";
import CardHome from './cards/cardHome'
function IndexHome(props) {

    const dispatch          = useDispatch();
    const allProducts       = useSelector(selectAllProducts);
    const favoriteProducts  = useSelector(selectFavProducts);
    let  color = 'ibtn-dark';
    let count = 0;
    
    const FavBtn = (AggProduct) => (e) => {
        count= 0
      let indexF = undefined;
      favoriteProducts.every((product, index) => {
            if (product._id === AggProduct._id) {
                indexF = index
                    return false;
            }
            return true;
      });
            if (indexF !== undefined){
                dispatch(deleteFavProducts(indexF));
                e.target.classList.remove('HeartFill');
                e.target.classList.add('ibtn-dark');
            }
            else {
                dispatch(setFavProducts(AggProduct));
                e.target.classList.remove('ibtn-dark');
                e.target.classList.add('HeartFill');
                count = count+1;
            }
    }

    const changeColor = (id) => {
        color = "ibtn-dark"; 
        favoriteProducts.every((product, index) => {
            if (product._id === id) {
                color = "HeartFill";
                    return false;
            }
            return true;
        });
    }
    const countLikes = (id) => {
        count = 0;
        favoriteProducts.every((product, index) => {
            if (product._id === id) {
                count = count + 1;
                return false;
            }
            return true;
        });
    }
    return (
        <div className="container p-0 p-md-4" id="main">         
            {allProducts !== undefined? allProducts.map((product,index)=> {
                changeColor(product._id) 
                countLikes(product._id)
                return (
                    <CardHome
                        key={product._id}
                        product={product}
                        count={count}
                        color={color}
                        FavoriteBtn={FavBtn(product)}
                        Push={() => props.history.push("/userpage")}
                    />
                )
            }) :<div></div>
          }
        </div>
    )
}



export default IndexHome;
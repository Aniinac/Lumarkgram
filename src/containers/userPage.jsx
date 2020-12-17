import React from 'react';
import { CaretDownSquare, Grid3x3, PersonCheckFill, ThreeDots } from 'react-bootstrap-icons';
import { selectAllProducts} from "../reducers/itemSlice";
import { useSelector } from "react-redux";


const UserPage= (props) => {
    const allProducts = useSelector(selectAllProducts);

    return (
        <div className="container">
            <div className="row">
            

                    <div className="col-lg-6 offset-lg-0 col-sm-8 offset-sm-2">
                            <img src='https://i.ibb.co/WcbkrSY/descarga-Copy.jpg'
                            alt="user"
                            className="rounded-circle mr-3 avatarHome1 Rcircle1" />
                    </div>

                     <div className="col-lg-6 col-sm-10 offset-sm-1 offset-lg-0 clLG6">
                    <p><b className="uName">Lumarkgram</b>  <b type="button" className="bMessageU1 bMTU1"> Enviar Mensaje</b> 
                        <PersonCheckFill className="iconClass3" type="button" />
                        <CaretDownSquare className="iconClass3" type="button"/>
                        <ThreeDots className="iconClass3" type="button" />
                        </p>
                
                    <p className="mt-4 p1"> <b>91</b> publicaciones    
                    <b className="mlPSS">175k</b> seguidores    
                    <b className="mlPSS">12</b> seguidos</p>  
                    <p><b className="p1">Lumarketo SPA</b></p>
                    <p className="p1 mtp1">Product items, cuenta de prueba</p>
                    <p className="p1 mtp1"><a href="https://lumarketo.com/"> <b> www.lumarketo.com</b></a></p>
                        
                    </div>
                
                <hr className="hrStyle2" />
                <p className="pp1"> <Grid3x3/> PUBLICACIONES</p>
            </div>
                <div className="row">
                {allProducts !== undefined ? allProducts.map((product, index) => {
                            return (
                                <div className="col-4 col-md-4 p-2" key={product._id}>
                                    <div className="card cdHProduct bgCFP1" >
                        
                                        <div className="view overlay ">
                                            <img className="card-img-top imgP" 
                                                src={product.Children[0].Imgs[0].Path} 
                                                alt={product.Children[0].Imgs[0].Alt} />
                                        </div>
                                    </div>
                                </div>  
                            )
                }): <div></div>
                }
                    
                </div>
    </div>
         

            
    )
}



export default UserPage;
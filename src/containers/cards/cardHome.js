import React from 'react'
import { Heart } from 'react-bootstrap-icons';
function CardHome(props) {

    const { product } = props
    const { color } = props
    const { FavoriteBtn } = props
    const { Push } = props
    const {count} =props

                return (
                    <div className="row d-flex justify-content-center" key={product._id}>
                        <div className="col-12 col-md-7 p-4">
                            <div className="row m-0 p-0 d-flex " >
                                <div className="card promoting-card mlCard justify-content-center">
                                    <div className="card-body d-flex flex-row mt-Card1" type="button"
                                        onClick={Push}>
                                        <img src='https://i.ibb.co/cCfsdbD/descarga.jpg'
                                            alt="user"
                                            className="rounded-circle mr-3 avatarHome Rcircle" />
                                        <div>
                                            <h6 className="card-title titleCard">{product.Name}</h6>
                                            <p className="brandT"> {product.Brand}</p>
                                        </div>
                                    </div>
                                    <hr className="hrStyle" />
                                    <div className="view overlay m-auto">
                                        <img className="card-img-top imgP2"
                                            src={product.Children[0].Imgs[0].Path}
                                            alt={product.Children[0].Imgs[0].Alt} />
                                    </div>
                                    <div className="card-body">
                                        <div className="mask rgba-white-slight maskL">
                                            <hr className="hrStyle1" />

                                            <Heart className={" iconClass " + color} type="button"
                                                onClick={FavoriteBtn} />
                                        </div>
                                        <p ><b>{789 + count} Me Gusta</b></p>
                                        <p className="card-text mt-0"> <b>Lumarkgram</b> {product.Description}, this product has been imported from an API products, as proof of this instagram module.</p>
                                        <p type="button" className="pComment">Ver los 210 comentarios</p>
                                        <p className="pDateiH">HACE 2 DIAS</p>
                                        <hr className="hrStyle" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )

}

export default CardHome;
import React from 'react';

import './App.css';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const man = [
    { id: 1, nama: "Kemeja Biru Polos", img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1566927496-button-down-4-1566927485.jpg", harga: "IDR 299.000" },
    { id: 2, nama: "Kemeja Kotak Merah", img: "https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/men-s-trekking-shirt-travel100-warm-burgundy.jpg?&f=800x800", harga: "IDR 399.000" },
    { id: 3, nama: "Kemeja Kotak Biru", img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/431479/item/goods_66_431479.jpg?width=1008&impolicy=quality_75", harga: "IDR 189.000" },
    { id: 4, nama: "Kemeja Merah Polos", img: "https://www.simplivi.com/wp-content/uploads/2019/04/kemeja-merah-marun-polos-lengan-panjang-1030x1030.jpg", harga: "IDR 279.000" },
]

const women = [
    { id: 1, nama: "Kemeja Abu-Abu Polos", img: "https://dynamic.zacdn.com/y9KNvPtEW77-T_gyBnEwTptcF70=/fit-in/346x500/filters:quality(90):fill(ffffff)/https://static-id.zacdn.com/p/lgs-9095-7222761-1.jpg", harga: "IDR 399.000" },
    { id: 2, nama: "Kemeja Coklat Polos", img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//101/MTA-8419583/no_brand_kemeja_wanita_kerja_formal_katun_lengan_panjang_steffy_mustard_import_full02_eomamxir.jpg", harga: "IDR 295.000" },
    { id: 3, nama: "Kemeja Kotak Biru-Hitam", img: "https://i.pinimg.com/736x/5c/09/fb/5c09fb3a2a202ccd2618ff82e2931c4e.jpg", harga: "IDR 159.000" },
    { id: 4, nama: "Kemeja Biru Polos", img: "https://id.360buyimg.com/Indonesia/s880x0_/amZzL3Q3My8yMjcvMzM5ODE0OTgwMy84ODk5OC9hZjkyOGExLzYwMmIyNWMyTjAwZjIwYmIz.jpg.dpg.webp", harga: "IDR 329.000" },
]


export default function MarketPlace() {


    return (


        <Router>
            <AuthButton />


            <div class="  navbar-expand-lg navbar-light shadow align-self-center navbar-collapse  " id="templatemo_main_nav">

                <div class="flex-fill">
                    <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                        <a class="navbar-brand text-grey logo h2 align-self-center" href="#">
                            Luxury Shop
                        </a>
                        <li class="nav-item">
                            <Link class="nav-link" to="/public">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/collection">Product</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact">About Us</Link>
                        </li>

                    </ul>

                    <Switch>
                        <Route path="/public">
                            <PublicPage />
                        </Route>

                        <Route path="/login">
                            <LoginPage />
                        </Route>
                        <PrivateRoute path="/collection">
                            <NestCollection />
                        </PrivateRoute>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <PublicPage />
                        </Route>

                    </Switch>

                </div>

            </div>

            <div class="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="w-100 pt-1 mb-5 text-right">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form action="" method="get" class="modal-content modal-body border-0 p-0">
                        <div class="input-group mb-2">
                            <input type="text" class="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
                            <button type="submit" class="input-group-text bg-success text-light">
                                <i class="fa fa-fw fa-search text-white"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Router>


    );
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    },
};

function AuthButton() {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    return fakeAuth.isAuthenticated ? (

        <nav class="navbar navbar-expand-lg bg-grey navbar-light d-none d-lg-block" id="templatemo_nav_top">
            <div class="container text-light">
                <div class="w-100 d-flex justify-content-between">
                    <div>
                        <i class="fa fa-envelope mx-2"></i>
                        <a class="navbar-sm-brand text-light text-decoration-none" href="#">Welcome Luluk Mufida</a>

                    </div>
                    <button className="btn btn-warning"
                        onClick={() => {
                            fakeAuth.signout(() => history.push(from));
                        }}
                    >
                        Sign out
                    </button>
                </div>
            </div>
        </nav>
    ) : (

        <nav class="navbar navbar-expand-lg bg-grey navbar-light d-none d-lg-block" id="templatemo_nav_top">
            <div class="container text-light">
                <div class="w-100 d-flex justify-content-between">
                    <div>
                        <i class="fa fa-envelope mx-2"></i>
                        <a class="navbar-sm-brand text-light text-decoration-none" href="#">You are not logged in!</a>

                    </div>

                </div>
            </div>
        </nav>
    );
}

function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                fakeAuth.isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

function PublicPage() {
    return (
        <div>
            <div id="template-mo-jassa-hero-carousel" class="carousel slide" data-bs-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="container">
                            <div class="row p-5">
                                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img class="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/05/banner_img_03.jpg" alt="" />

                                </div>
                                <div class="col-lg-6 mb-0 d-flex align-items-center">
                                    <div class="text-align-left align-self-center">
                                        <h1 class="h1 text-grey"><b>Luxury</b> Shop</h1>
                                        <br></br>
                                        <p>
                                            Luxury merupakan brand pakaian wanita dan pria yang selalu mengutamakan kenyamanan bagi pemakai dengan menggunakan kain berkualitas yang nyaman ketika dipakai.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container">
                            <div class="row p-5">
                                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img class="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/05/banner_img_01.jpg" alt="" />
                                </div>
                                <div class="col-lg-6 mb-0 d-flex align-items-center">
                                    <div class="text-align-left">
                                        <h1 class="h1">Luxury Shoes</h1>
                                        <br></br>
                                        <p>
                                            Luxury merupakan brand pakaian wanita dan pria yang selalu mengutamakan kenyamanan bagi pemakai dengan menggunakan kain berkualitas yang nyaman ketika dipakai.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container">
                            <div class="row p-5">
                                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img class="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/05/banner_img_02.jpg" alt="" />

                                </div>
                                <div class="col-lg-6 mb-0 d-flex align-items-center">
                                    <div class="text-align-left">
                                        <h1 class="h1">Luxury Shirt</h1>
                                        <br></br>
                                        <p>
                                            Luxury merupakan brand pakaian wanita dan pria yang selalu mengutamakan kenyamanan bagi pemakai dengan menggunakan kain berkualitas yang nyaman ketika dipakai.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="prev">
                    <i class="fas fa-chevron-left"></i>
                </a>
                <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="next">
                    <i class="fas fa-chevron-right"></i>
                </a>
            </div>
        </div>
    );
}

function Contact() {
    return (


        <div class="bg-dark" id="tempaltemo_footer">
            <div class="container">
                <div class="row">

                    <div class="col-md-4 pt-5">
                        <h2 class="h2 text-grey border-bottom pb-3 border-light logo">Luxury Shop</h2>
                        <ul class="list-unstyled text-light footer-link-list">
                            <li>
                                <i class="fas fa-map-marker-alt fa-fw"></i>
                                India
                            </li>
                            <li>
                                <i class="fa fa-phone fa-fw"></i>
                                <a class="text-decoration-none" href="#">000-000-0000</a>
                            </li>
                            <li>
                                <i class="fa fa-envelope fa-fw"></i>
                                <a class="text-decoration-none" href="#">info@company.com</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-md-4 pt-5">
                        <h2 class="h2 text-light border-bottom pb-3 border-light">Products</h2>
                        <ul class="list-unstyled text-light footer-link-list">
                            <li><a class="text-decoration-none" href="#">Luxury</a></li>
                            <li><a class="text-decoration-none" href="#">Sport Wear</a></li>
                            <li><a class="text-decoration-none" href="#">Men's Shoes</a></li>
                            <li><a class="text-decoration-none" href="#">Women's Shoes</a></li>
                            <li><a class="text-decoration-none" href="#">Popular Dress</a></li>
                            <li><a class="text-decoration-none" href="#">Gym Accessories</a></li>
                            <li><a class="text-decoration-none" href="#">Sport Shoes</a></li>
                        </ul>
                    </div>

                    <div class="col-md-4 pt-5">
                        <h2 class="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                        <ul class="list-unstyled text-light footer-link-list">
                            <li><a class="text-decoration-none" href="#">Home</a></li>
                            <li><a class="text-decoration-none" href="#">About Us</a></li>
                            <li><a class="text-decoration-none" href="#">Shop Locations</a></li>
                            <li><a class="text-decoration-none" href="#">FAQs</a></li>
                            <li><a class="text-decoration-none" href="#">Contact</a></li>
                        </ul>
                    </div>

                </div>

                <div class="row text-light mb-4">
                    <div class="col-12 mb-3">
                        <div class="w-100 my-3 border-top border-light"></div>
                    </div>
                    <div class="col-auto me-auto">
                        <ul class="list-inline text-left footer-icons">
                            <li class="list-inline-item border border-light rounded-circle text-center">
                                <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                            </li>
                            <li class="list-inline-item border border-light rounded-circle text-center">
                                <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                            </li>
                            <li class="list-inline-item border border-light rounded-circle text-center">
                                <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
                            </li>
                            <li class="list-inline-item border border-light rounded-circle text-center">
                                <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-linkedin fa-lg fa-fw"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-auto">
                        <label class="sr-only" for="subscribeEmail">Email address</label>
                        <div class="input-group mb-2">
                            <input type="text" class="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                            <div class="input-group-text btn-success text-light">Subscribe</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-100 bg-black py-3">
                <div class="container">
                    <div class="row pt-2">
                        <div class="col-12">
                            <p class="text-left text-light">
                                Copyright &copy; 2021 Company Name
                                | Designed by <a rel="sponsored" href="#" target="_blank">Jassa</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}



function LoginPage() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
    };

    return (
        <center><div className="container">
            <p>You must log in to view the page at {from.pathname}</p>
            <button className="btn btn-warning" onClick={login}>Log in</button>
            <br></br>
            <br></br>
        </div></center>
    );
}



function NestCollection() {
    let { path, url } = useRouteMatch();
    return (
        <>
            <br></br>
            <section class="container">
                <div class="row text-center pt-3">
                    {/* <div class="col-lg-6 m-auto"> */}
                    <h1 class="h1">Choose Your Favorite Product</h1>
                    <br></br>
                    <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to={`${url}/man`}>Man</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={`${url}/women`}>Women</Link>
                        </li>

                    </ul>
                    <br></br>
                    <hr></hr>
                    <br></br>




                    <Switch>
                        <Route exact path={path}>
                            <h3>choose according to your gender.</h3>
                        </Route>
                        <Route path={`${path}/man`}>
                            <Man />
                        </Route>
                        <Route path={`${path}/women`}>
                            <Women />
                        </Route>

                    </Switch>
                    {/* </div> */}
                </div>
            </section>
        </>
    );
}

const ProductMan = (props) => {
    return (
        <div class="col-12 col-md-3 mb-3">
            <div class="card h-100">
                <a href="#">
                    <img src={props.img} class="card-img-top" alt="..." />
                </a>
                <div class="card-body ">
                    <ul class="list-unstyled d-flex justify-content-between">
                        <li class="text-muted text-right">{props.harga}</li>
                    </ul>
                    <a href="#" class="h2 text-decoration-none text-dark">{props.nama}</a>
                    <p class="h6 card-text">
                        Kemeja ini diproduksi langsung oleh Luxury Shop
                    </p>
                    <li>
                        <i class="text-warning fa fa-star"></i>
                        <i class="text-warning fa fa-star"></i>
                        <i class="text-warning fa fa-star"></i>
                        <i class="text-warning fa fa-star"></i>
                        <i class="text-muted fa fa-star"></i>
                    </li>
                </div>
            </div>
        </div>
    );
}

const ProdukMan = ({ prods }) => {
    return (
        <div class="row">

            {prods.map(prod => (
                <ProductMan img={prod.img} nama={prod.nama} harga={prod.harga} />
            ))
            }
        </div>
    )
};

function Man() {
    return (
        <Route exact path='/collection/man' render={(props) =>

            <ProdukMan prods={man} />


        }
        />
    );
}

const ProductWomen = (props) => {
    return (
        <div class="col-12 col-md-3 mb-3">
            <div class="card h-100">
                <a href="#">
                    <img src={props.img} class="card-img-top" alt="..." />
                </a>
                <div class="card-body ">
                    <ul class="list-unstyled d-flex justify-content-between">
                        <li class="text-muted text-right">{props.harga}</li>
                    </ul>
                    <a href="#" class="h2 text-decoration-none text-dark">{props.nama}</a>
                    <p class="h6 card-text">
                        Kemeja ini diproduksi langsung oleh Luxury Shop
                    </p>
                    <li>
                        <i class="text-warning fa fa-star"></i>
                        <i class="text-warning fa fa-star"></i>
                        <i class="text-warning fa fa-star"></i>
                        <i class="text-warning fa fa-star"></i>
                        <i class="text-warning fa fa-star"></i>
                    </li>
                </div>
            </div>
        </div>
    );
}

const ProdukWomen = ({ prods }) => {
    return (
        <div class="row">

            {prods.map(prod => (
                <ProductWomen img={prod.img} nama={prod.nama} harga={prod.harga} />
            ))
            }
        </div>
    )
};

function Women() {
    return (
        <Route exact path='/collection/women' render={(props) =>

            <ProdukWomen prods={women} />

        }
        />
    );
}
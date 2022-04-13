import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Navbar from './components/navbar/Navbar';
import Products from './pages/Products/Products';
import Cart from './pages/Products/Cart';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './App.css';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import About from './components/about/About';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/product' component={Products} />
          <Route path='/cart' component={Cart} />
          <Route path='/about' component={About} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

function Home() {
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
                  <img class="img-fluid" src="https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-realistic-stereo-product-physical-lcd-tv-png-image_1322808.jpg" alt="" />

                </div>
                <div class="col-lg-6 mb-0 d-flex align-items-center">
                  <div class="text-align-left align-self-center">
                    <h1 class="h1 text-grey"><b>Television</b> Store</h1>
                    <br></br>
                    <p>
                    Pada tahun ini, LG hadir dengan series TV premiumnya yang sanggup memenuhi semua ekspektasi kamu tentang TV premium. Mulai dari layar ultra HD, empat port kabel HDMI 2.1 hingga WebOS hingga platform smart TV milik LG yang fantastis merupakan alasan untuk membeli TV LED satu ini.
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
                  <img class="img-fluid" src="https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2020/07/1.-Samsung-LED-Curved-TV-49-Inch-420x420.jpg" alt="" />
                </div>
                <div class="col-lg-6 mb-0 d-flex align-items-center">
                  <div class="text-align-left">
                    <h1 class="h1">Samsung LED Curved TV 49 Inch</h1>
                    <br></br>
                    <p>
                    Samsung UA49MU6300 hadir dengan layar berukuran 49 inci yang memiliki resolusi dua kali lebih tinggi dibanding HD TV lainnya.
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
                  <img class="img-fluid" src="https://ecs7.tokopedia.net/blog-tokopedia-com/uploads/2020/07/2.-Sony-LED-TV-32-Inch-420x420.jpg" alt="" />

                </div>
                <div class="col-lg-6 mb-0 d-flex align-items-center">
                  <div class="text-align-left">
                    <h1 class="h1">Sony LED TV 32 Inch</h1>
                    <br></br>
                    <p>
                    Sony LED TV 32″ KLV-32R302C mampu menghasilkan gambar dengan kualitas jernih, detil, dan tajam berkat layar 32 inci yang beresolusi 1.366 x 768 piksel.
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
export default App;

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Product from './components/product'
class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <a className="navbar-brand">Title</a>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Link</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <Product 
                                name = "Iphone XS Max" 
                                price = "1200 USD"
                                url_image = "https://fptshop.com.vn/Uploads/Originals/2019/8/1/637002351614380313_636749593270587915_iphoneXS-1o.png"
                            />
                            <Product 
                                name = "Iphone 11 Pro Max" 
                                price = "1500 USD"
                                url_image = "https://file.hstatic.net/1000309862/file/review-iphone-11-pro-max-1-min_87f61a6f50aa4ea3960dd0c5d9d493b2_grande.png"
                            />
                            <Product 
                                name = "Iphone 8 Plus" 
                                price = "700 USD"
                                url_image = "https://salt.tikicdn.com/cache/w390/ts/product/63/04/22/f2b690eb7af500a4d6fc7dd5c4a7fc8e.jpg"
                            />
                        </div>
                    </div>
            </div>
            </div>
        );
    }
}
export default App;

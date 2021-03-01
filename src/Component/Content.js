import Dashboard from "./Content/Dashboard";
import Product from "./Content/Product";
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import title from '../Common/title';
function Content() {
    return (
        <Router>
            <Header/>
            <Navbar/>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">{title.Dash_Board}</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/#">{title.Home_Page}</a></li>
                                    <li className="breadcrumb-item active">{title.Dash_Board}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content">
                    <div className="container-fluid">
                        <Dashboard/>
                        <Product />
                    </div>
                </section>
            </div>
            <Footer/>
        </Router>
    );
}

export default Content;
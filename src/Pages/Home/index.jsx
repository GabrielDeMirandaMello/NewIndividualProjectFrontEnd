import Navbar from "./navbar/Navbar";
import imgLogo from '../../assets/logo.png';
import './index.css'

function Home() {
    return (
        <>
            <body className="body-home">
                <Navbar />
                <div className="card-home">
                    <img
                        alt=""
                        src={imgLogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top img-card-home"
                    />{' '}
                    <span className="text-card-home">Conte-nos suas histórias e suas novas experiencias !</span>
                </div>
            </body>
        </>
    )
}

export default Home;
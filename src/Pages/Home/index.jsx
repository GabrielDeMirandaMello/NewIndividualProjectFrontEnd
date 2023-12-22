import Navbar from "./navbar/Navbar";
import Card from 'react-bootstrap/Card';
import imgLogo from '../../assets/logo.png';
import './index.css'

function Home() {
    return (
        <>
            <body className="body-home">
                <Navbar />
                <div className="content-home">
                <Card className="card-home">
                    <img
                        alt=""
                        src={imgLogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top img-card-home"
                    />{' '}
                    <Card.Body className="text-card-home">Um novo jeito de viajar, com novas experiencias !</Card.Body>
                </Card>
                </div>
            </body>
        </>
    )
}

export default Home;
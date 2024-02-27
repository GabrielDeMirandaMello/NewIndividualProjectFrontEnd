import Navbar from '../../Components/navbar/Navbar';
import imgLogo from '../../assets/logo-G.svg';
import { BsImages, BsFillHandThumbsUpFill, BsFillGeoFill } from "react-icons/bs";
import './index.css';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"

function Home() {
    return (
        <>
            <body className="body-home">
                <Navbar name='Home'/>
                <div className="card-home">
                    <span className="text-card-home">“Viajar é uma experiência transformadora que pode mudar sua vida. Não tenha medo de sair da sua zona de conforto e experimentar coisas novas.”</span>
                    <img
                        alt=""
                        src={imgLogo}
                        width="20%"
                        height="20%"
                    />{' '}
                </div>
                <div className="container-cards">
                    <div className="parent">
                        <div className="card">
                            <div className="glass"></div>
                            <div className="content">
                                <span className="title"><BsImages /></span>
                                <span >Post Suas Viagens</span>
                            </div>
                        </div>
                    </div>

                    <div className="parent">
                        <div className="card">
                            <div className="glass"></div>
                            <div className="content">
                                <span className="title"><BsFillHandThumbsUpFill /></span>
                                <span >Curta Outras Viagens</span>
                            </div>
                        </div>
                    </div>
                    <div className="parent">
                        <div className="card">
                            <div className="glass"></div>
                            <div className="content">
                                <span className="title"><BsFillGeoFill /></span>
                                <span >Conheça novos Lugares</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-home">
                    <span>Todos os Direitos Reservados!</span>
                </div>
                <SpeedInsights />
                <Analytics />
            </body>
        </>
    )
}

export default Home;
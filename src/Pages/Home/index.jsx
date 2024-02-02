import Navbar from "./navbar/Navbar";
import imgLogo from '../../assets/logo-G.svg';
import { BsImages, BsFillHandThumbsUpFill, BsFillGeoFill } from "react-icons/bs";
import './index.css'

function Home() {
    return (
        <>
            <body className="body-home">
                <Navbar />
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
                    <div class="parent">
                        <div class="card">
                            <div class="glass"></div>
                            <div class="content">
                                <span class="title"><BsImages /></span>
                                <span class="text">Post Suas Viagens</span>
                            </div>
                        </div>
                    </div>

                    <div class="parent">
                        <div class="card">
                            <div class="glass"></div>
                            <div class="content">
                                <span class="title"><BsFillHandThumbsUpFill /></span>
                                <span class="text">Curta Outras Viagens</span>
                            </div>
                        </div>
                    </div>
                    <div class="parent">
                        <div class="card">
                            <div class="glass"></div>
                            <div class="content">
                                <span class="title"><BsFillGeoFill /></span>
                                <span class="text">Conheça novos Lugares</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-home">
                    <span>Todos os Direitos Reservados!</span>
                </div>
            </body>
        </>
    )
}

export default Home;
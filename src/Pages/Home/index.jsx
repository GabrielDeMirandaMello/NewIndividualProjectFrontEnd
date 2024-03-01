import Navbar from '../../Components/navbar/Navbar';
import { BsImages, BsFillHandThumbsUpFill, BsFillGeoFill, BsFillRocketTakeoffFill, BsLightbulbFill, BsGem, BsGoogle, BsWhatsapp, BsGithub } from "react-icons/bs";
import './index.css';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"
import ImagenBanner from '../../assets/evening-agglomerated-city-life-lightened-by-city-traffic-turkey.jpg'
import { useNavigate } from "react-router-dom";
import React from 'react';

function Home() {
    const navigate = useNavigate();
    window.onload = function () {
        (function (d, script) {
            script = d.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = 'https://w.app/widget-v1/Ih74Ar.js';
            d.getElementsByTagName('head')[0].appendChild(script);
        }(document));
    };

    function handleEmailClick() {
        const email = "Gabrielmirandamello9@gmail.com";
        const subject = "Assunto do email";
        const body = "Mensagem do email";
        window.open(`mailto:${email}?subject=${subject}&body=${body}`);
    }

    function handleWhatsAppClick() {
        const number = "5511976139421";
        const message = "Olá, gostaria de saber mais sobre o seu site, podemos conversar ?";
        window.open(`https://api.whatsapp.com/send?phone=${number}&text=${message}`);
    }
    function handleGitHubClick() {
        window.open(`https://github.com/GabrielDeMirandaMello`);
    }
    return (
        <>
            <body className="body-home">
                <SpeedInsights />
                <Analytics />
                <Navbar name='Home' />
                <section className="card-home">
                    <div className='card-home-img-background'>
                        <img src={ImagenBanner} alt="" />
                        <div className='text-banner'>
                            <h2 className='txt'>Descubra o mundo através de histórias autênticas!</h2>
                            <hr />
                            <br />
                            <h3 className='txt'>Compartilhe suas experiências de viagens e conecte-se com pessoas de todo o mundo.</h3>
                            <br />
                            <h4 className='txt'>Story Travels é a sua plataforma para:</h4><br />
                            <p className='txt'>"Ler histórias inspiradoras de viagens a lugares incríveis.<br /><br />
                                Compartilhar suas próprias aventuras e conectar-se com outros viajantes.<br /><br />
                                Encontrar dicas e informações valiosas para planejar suas próximas viagens.<br /><br />
                                Criar uma comunidade vibrante de exploradores apaixonados."</p>
                            <hr />
                            <h4 className='txt'><a href="" onClick={() => navigate('/singup')}>Junte-se a nós e inspire-se!</a></h4>
                        </div>
                    </div>
                </section>
                <hr style={{ color: '#fff' }} />
                <section className="card-home-cards">
                    <div className='card-home-two'>
                        <h1>Aproveite viagens e compartilhe como nunca antes !</h1>
                        <div className='container-cards'>
                            <div class="card">
                                <BsImages className='icon-cards' />
                                <div class="card__content">
                                    <p class="card__title">Poste Suas Viagens !</p>
                                    <p class="card__description">Conte histórias sobre cada foto, compartilhando suas experiências e emoções.</p>
                                </div>
                            </div>
                            <div class="card">
                                <BsFillHandThumbsUpFill className='icon-cards' />
                                <div class="card__content">
                                    <p class="card__title">Curta Outras Viagens !</p>
                                    <p class="card__description">Curta e comente as fotos de outros viajantes e conecte com outras pessoas.</p>
                                </div>
                            </div>
                            <div class="card">
                                <BsFillGeoFill className='icon-cards' />
                                <div class="card__content">
                                    <p class="card__title">Conheça Novos Lugares !</p>
                                    <p class="card__description">Explore ângulos e composições criativas que você nunca viu antes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr style={{ color: '#fff' }} />
                <section className='.card-home'>
                    <div className='container-top'>
                        <h2 className='text-missao'>Missão</h2>
                        <h4 className='text-missao'>Inspirar e conectar pessoas através da partilha de histórias de viagens únicas a lugares incríveis, promovendo a compreensão intercultural e a paixão pela descoberta.</h4>
                    </div>
                    <BsFillRocketTakeoffFill className='icon-missao' />
                </section>
                <section className='.card-home'>
                    <div className='container-top'>
                        <h2 className='text-missao'>Visão</h2>
                        <h4 className='text-missao'>Ser a plataforma líder global para a partilha de histórias de viagens autênticas e inspiradoras, conectando pessoas de todo o mundo e criando uma comunidade vibrante de exploradores.</h4>
                    </div>
                    <BsLightbulbFill className='icon-missao' />
                </section>
                <section className='.card-home'>
                    <div className='container-top-valores'>
                        <h2 className='text-valores'>Valores</h2>
                        <h4 className='text-valores'><b>Criatividade:</b> Incentivamos a expressão criativa através da partilha de histórias de viagens em diferentes formatos, como textos, fotos, vídeos e podcasts. <br />
                            <b>Inovação:</b> Estamos sempre buscando novas formas de melhorar a plataforma e oferecer aos nossos usuários a melhor experiência possível. <br />
                            <b>Gratidão:</b> Somos gratos à comunidade de viajantes que nos inspira e nos motiva a continuar a construir a melhor plataforma possível para partilhar histórias de viagens. <br />
                            <b>Paixão:</b> Somos apaixonados por viagens e por histórias, e essa paixão nos motiva a criar uma plataforma que inspire e conecte pessoas de todo o mundo.</h4>
                    </div>
                    <BsGem className='icon-missao' />
                </section>
                <footer className="footer-home">
                    <div>
                        <div className='form-contato'>
                            <h4 style={{ color: '#fff' }}>Contato</h4>
                            <div>
                                <div className='tooltip'>Google</div>
                                <ul class="example-1">
                                    <li class="icon-content">
                                        <a
                                            class="link"
                                            data-social="google"
                                            aria-label="Google"
                                            href="https://www.spotify.com/"
                                        >
                                            <BsGoogle className='icon-contact' onClick={handleEmailClick} />
                                        </a>
                                        <div class="tooltip">Google</div>
                                    </li>
                                    <li class="icon-content">
                                        <a
                                            class="link"
                                            data-social="pinterest"
                                            aria-label="Pinterest"
                                            href="https://www.pinterest.com/"
                                        >
                                            <BsWhatsapp className='icon-contact' onClick={handleWhatsAppClick} />
                                        </a>
                                        <div class="tooltip">WhatsApp</div>
                                    </li>
                                    <li class="icon-content">
                                        <a
                                            class="link"
                                            data-social="dribbble"
                                            aria-label="Dribbble"
                                            href="https://dribbble.com/"
                                        >
                                            <BsGithub className='icon-contact' onClick={handleGitHubClick} />
                                        </a>
                                        <div class="tooltip">GitHub</div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <p style={{ color: '#fff' }}>&copy; Story Travels, Inc. 2024, The future is technology.</p>
                        <hr style={{ color: '#fff' }} />
                    </div>
                </footer>
            </body>
        </>
    )
}

export default Home;
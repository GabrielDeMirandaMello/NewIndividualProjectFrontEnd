import './index.css'
import { BiCameraOff } from "react-icons/bi";

export default function ImagemPerfil({img, readImg}) {

    return (
        <>

            {(img && <img src={img} alt="imagen post" className='icon-img-user' />) ||
                <BiCameraOff className='icon-not-img-user'/>
            }
            <div className="input-div-img">
                    <input className="input-img" name="file" type="file" onChange={readImg} />
                    <span>Carregue sua Foto</span>
                </div>
        </>
    )
}
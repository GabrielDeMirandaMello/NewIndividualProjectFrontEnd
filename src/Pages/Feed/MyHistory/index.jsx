import React, { useEffect, useState } from "react"
import Menu from "../../../Components/menu";
import { useNavigate } from "react-router-dom";
import { BsFillSearchHeartFill, BsFillChatHeartFill, BsCardList } from "react-icons/bs";
import { BiCameraOff } from "react-icons/bi";
import Swal from "sweetalert2";
import axios from "axios";
import { TOKEN, USER_NAME, API_URL } from "../../../Data/Constants";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebase";

export default function MyHistory() {
    const navigate = useNavigate();
    const [isCheckedTittle, setIsCheckedTittle] = useState(false);
    const [isCheckedDescription, setIsCheckedDescription] = useState(false);
    const [filterStory, setFilterStory] = useState("name");
    const [listOfStory, setListOfStory] = useState([]);
    const [textGet, setTextGet] = useState("")
    useEffect(() => {
        if (TOKEN === null) {
            navigate('/singin')
        }
    });
    useEffect(() => {
        RenderStorys()
      }, []);
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    
    function GetTextInput(event) {
        setTextGet(event.target.value);
    }
    function OnCheckedTittle() {
        setIsCheckedTittle(true);
        setIsCheckedDescription(false);
        setFilterStory("title");
    }
    function OnCheckedDescription() {
        setIsCheckedTittle(false);
        setIsCheckedDescription(true);
        setFilterStory("description");
    }

    async function FindStory() {
        await axios.get(`${API_URL}/api/story/${USER_NAME}/${filterStory}/${textGet}`, {
            headers: {
                authorization: `Bearer ${TOKEN}`,
            },
        })
            .then(response => {
                Toast.fire({
                    icon: "success",
                    title: "Filter applied !",
                });
                setListOfStory(response.data)
                console.log(response)
            })
            .catch(error => console.log(error.response));
    }

    async function RenderStorys() {

        await axios.get(`${API_URL}/api/story/public/name/${USER_NAME}`, {
            headers: {
                authorization: `Bearer ${TOKEN}`,
            },
        })
            .then(async response => {
                const storiesWithImages = await Promise.all(response.data.map(async story => {
                    try {
                        // Obter URL da imagem do Firebase usando o ID da história
                        const storageRef = ref(storage, `Posts/${story.id}-imagem-post`);
                        const url = await getDownloadURL(storageRef);
                        // Retorna a história com a URL da imagem
                        return { ...story, imagem: url };
                    } catch (error) {
                        // Em caso de erro, retorna a história sem a URL da imagem
                        return story;
                    }
                }));
                setListOfStory(storiesWithImages)
            })
            .catch(error => console.log(error.response));
    }

    return (
        <>
            <div className="body-home-story">
                <Menu name='myhistory'/>
                <div className="container-feeds">
                <div className="filter-story">
                        <div className="filter-container-input">
                            <div className="filter-button-radio">
                                <label htmlFor="" style={{ fontFamily: "Poppins", fontWeight: 900 }}>Filter by: </label>
                                <div className="radio-inputs">
                                    <label className="radio">
                                        <input type="radio" name="radio" checked={isCheckedTittle} onClick={OnCheckedTittle} />
                                        <span className="name">Title Story</span>
                                    </label>
                                    <label className="radio">
                                        <input type="radio" name="radio" checked={isCheckedDescription} onClick={OnCheckedDescription} />
                                        <span className="name">Description Story</span>
                                    </label>
                                </div>
                            </div>
                            <input className="input-filter-story" type="text" onChange={GetTextInput}/>
                        </div>
                        <div className="filter-container-button">
                            <button className="btn-search-story" onClick={FindStory}>
                                <BsFillSearchHeartFill /> Search
                            </button>
                            <button onClick={RenderStorys} className="btn-search-story">
                            <BsCardList /> All Story
                            </button>
                        </div>
                    </div>
                    <div className="feed-story">
                    {listOfStory.length >= 0 &&
                            listOfStory.map((story) => (
                                <div className="card-story" key={story.id}>
                                    <div className="user-story">{story.nameUser}</div>
                                    {
                                       story.imagem === undefined ? <BiCameraOff className="icon-not-img" /> : <img className="img-all-post" src={story.imagem} alt="" width={300} height={300} />
                                    }
                                    
                                    <div className="tittle-story">{story.title}</div>
                                    <div className="description-story">
                                        {story.description}
                                    </div>
                                    <div className="like-story">
                                        <span className="quantity-like">{story.likeCount}</span>
                                        <BsFillChatHeartFill className="like" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
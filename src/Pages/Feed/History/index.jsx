import React, { useEffect, useState } from "react";
import Menu from "../../../Components/menu";
import { useNavigate } from "react-router-dom";
import { BsFillSearchHeartFill, BsChatDotsFill, BsFillHeartFill, BsFillPlusCircleFill, BsCardList } from "react-icons/bs";
import { BiCameraOff } from "react-icons/bi";
import './index.css'
import Modal from '../../../Components/Modal/modal';
import CommentsModal from '../../../Components/Modal/Commets/comments.modal';
import axios from "axios";
import { TOKEN, API_URL, USER_NAME } from "../../../Data/Constants";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebase";


export default function History() {
    const navigate = useNavigate();
    const [showModalCreateStory, setShowModalCreateStory] = useState(false);
    const [showModalComments, setShowModalComments] = useState(false);
    const [isCheckedUserName, setIsCheckedUsername] = useState(true);
    const [isCheckedTittle, setIsCheckedTittle] = useState(false);
    const [isCheckedDescription, setIsCheckedDescription] = useState(false);
    const [filterStory, setFilterStory] = useState("name");
    const [listOfStory, setListOfStory] = useState([]);
    const [selectedStory, setSelectedStory] = useState(null);
    const [textGet, setTextGet] = useState("");
    const token = sessionStorage.getItem("TOKEN")
    useEffect(() => {
        if (token === null) {
            navigate('/singin')
        }
    });
    useEffect(() => {
        RenderStorys()
    }, []);

    function ActionModal() {
        setShowModalCreateStory(!showModalCreateStory);
    }
    function GetTextInput(event) {
        setTextGet(event.target.value);
    }
    function OnCheckedUsername() {
        setIsCheckedUsername(true);
        setIsCheckedTittle(false);
        setIsCheckedDescription(false);
        setFilterStory("name");
    }
    function OnCheckedTittle() {
        setIsCheckedUsername(false);
        setIsCheckedTittle(true);
        setIsCheckedDescription(false);
        setFilterStory("title");
    }
    function OnCheckedDescription() {
        setIsCheckedUsername(false);
        setIsCheckedTittle(false);
        setIsCheckedDescription(true);
        setFilterStory("description");
    }

    async function FindStory() {
        await axios.get(`${API_URL}/api/story/public/${filterStory}/${textGet}`, {
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
                        console.error('Erro ao obter URL da imagem:', error);
                        // Em caso de erro, retorna a história sem a URL da imagem
                        return story;
                    }
                }));
                setListOfStory(storiesWithImages)
            })
            .catch(error => console.log(error.response));
    }

    async function RenderStorys() {

        await axios.get(`${API_URL}/api/story/all`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
            .then(async response => {
                const storiesWithImages = await Promise.all(response.data.map(async story => {
                    try {
                        const storageRef = ref(storage, `Posts/${story.id}-imagem-post`);
                        const url = await getDownloadURL(storageRef);
                        
                            return { ...story, imagem: url};
                    } catch (error) {
                        return story;
                    }
                }));
                setListOfStory(storiesWithImages)
            })
            .catch(error => console.log('nenhuma imagem encontrada para o post !'));
    }
    function ActionModalComments(story) {
        setSelectedStory(story)
        ModalComments()
    }
    function ModalComments() {
        setShowModalComments(!showModalComments)
        console.log(selectedStory)
    }

    function ActionLikededStory(story) {
        CreateLikeded(story);
    }

    async function CreateLikeded(story) {
        await axios.post(`${API_URL}/api/likeded`, {
            name: USER_NAME,
            idStory: story.id
        }, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
            .then(async response => {
                console.log(response.status)
                RenderStorys()
            })
            .catch(error => console.log(error.response));
    }


    return (
        <>
            <div className="body-home-story" onLoad={RenderStorys}>
                <Menu name='history' />
                <div className="container-feeds">
                    <div className="filter-story">
                        <div className="filter-container-input">
                            <div className="filter-button-radio">
                                <label htmlFor="" style={{ fontFamily: "Poppins", fontWeight: 900 }}>Filter by: </label>
                                <div className="radio-inputs">
                                    <label className="radio">
                                        <input type="radio" name="radio" checked={isCheckedUserName} onClick={OnCheckedUsername} />
                                        <span className="name">Name User</span>
                                    </label>
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
                            <input className="input-filter-story" type="text" onChange={GetTextInput} />
                        </div>
                        <div className="filter-container-button">
                            <button className="btn-search-story" onClick={FindStory}>
                                <BsFillSearchHeartFill /> Search
                            </button>
                            <button onClick={ActionModal} className="btn-search-story">
                                <BsFillPlusCircleFill /> Story
                            </button>
                            <button onClick={RenderStorys} className="btn-search-story">
                                <BsCardList /> All Story
                            </button>
                        </div>
                    </div>
                    <div className="feed-story" onScroll={() => setShowModalComments(false)}>
                        {listOfStory && listOfStory.length > 0 &&
                            listOfStory.map((story, key) => (
                                <div className="card-story" key={key}>
                                    <div className="user-story">{story.nameUser}</div>
                                    {
                                        story.imagem === undefined ? <BiCameraOff className="icon-not-img" /> : <img className="img-all-post" src={story.imagem} alt="" />
                                    }

                                    <div className="tittle-story">{story.title}</div>
                                    <div className="description-story">
                                        {story.description}
                                    </div>
                                    <div className="like-comment-story">
                                        <div className="comment-like" onClick={() => ActionModalComments(story)} >
                                            <span className="quantity-like">Comentarios</span>
                                            <BsChatDotsFill />
                                        </div>
                                        <div className="comment-like" onClick={() => ActionLikededStory(story)}>
                                            <span>{story.likeCount}</span>
                                            <span className="quantity-like">Cutidas</span>
                                            <BsFillHeartFill />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Modal isOpen={showModalCreateStory} onClose={() => setShowModalCreateStory(false)} />
            {selectedStory && <CommentsModal isOpen={showModalComments} onClose={() => setShowModalComments(false)} story={selectedStory} />}
        </>
    )
}
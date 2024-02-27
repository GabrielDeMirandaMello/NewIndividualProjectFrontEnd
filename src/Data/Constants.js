// const AMBIENTE = "desenvolvimento"
const AMBIENTE = "producao"



var TOKEN = sessionStorage.getItem("TOKEN")
var USER_ID = Number(sessionStorage.getItem("ID"));
var USER_NAME = sessionStorage.getItem("NAME")
var USER_EMAIL = sessionStorage.getItem("EMAIL")
var USER_PHONE = sessionStorage.getItem("PHONE")
var USER_REST_MONTH = sessionStorage.getItem("REST MONTH")
var USER_FAVORITE_COMPANY = sessionStorage.getItem("FAVORITE COMPANY")
let API_URL = ""

AMBIENTE === "desenvolvimento" ? API_URL = "http://localhost:8080" : API_URL = "https://travels-history.onrender.com";


export { TOKEN, USER_ID, USER_NAME, USER_EMAIL, USER_PHONE, USER_REST_MONTH, USER_FAVORITE_COMPANY, API_URL };
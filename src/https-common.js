import axios from "axios";

export default axios.create({
    baseURL: "https://decoplastline.ua/api",
    headers: {
        "Content-type": "application/json"
    }
});
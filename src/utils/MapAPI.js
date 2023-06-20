import axios from "axios";

export default axios.create({
    baseURL: "https://dixy.ru/api/v1",  ///STORES?region_id=?region_id=
    responseType: "json",
    headers: { 'Content-Type': 'application/json'}
});
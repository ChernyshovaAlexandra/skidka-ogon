import axios from "axios";

export default axios.create({
    baseURL: "https://api.promo-dixy.ru/api/regions",  
    responseType: "json",
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
});
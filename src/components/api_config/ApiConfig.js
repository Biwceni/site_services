import axios from 'axios';

// Utilizando a definição da url global do axios
export default axios.create({
    withCredentials: false,
    baseURL: "https://mysql-services-deploy-render.onrender.com"
})
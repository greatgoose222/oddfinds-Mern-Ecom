import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.PROD
        ? import.meta.env.VITE_API_URL   // production
        : "",                            // development (use proxy)
    withCredentials: true,
});

export default api;



// import axios from "axios";

// const api = axios.create({
//     baseURL: import.meta.env.VITE_API_URL,
//     withCredentials: true,
// });

// export default api;
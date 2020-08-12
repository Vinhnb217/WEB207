import http from "./axiosHttp";

const getAll = () => {
    return http.get("/post");
};
const create = data => {
    return http.post("/post", data);
};

const remove = id => {
    console.log(id);
    return http.delete(`/post/${id}`);
};
const update = (id, data) => {
    return http.put(`/post/${id}`, data);
};

export default {
    getAll,
    create,
    remove,
    update,
};
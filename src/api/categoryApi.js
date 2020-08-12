import http from "./axiosHttp";

const getAll = () => {
    return http.get("/category");
};
const create = data => {
    return http.post("/category", data);
};

const remove = id => {
    console.log(id);
    return http.delete(`/category/${id}`);
};
const update = (id, data) => {
    return http.put(`/category/${id}`, data);
};

export default {
    getAll,
    create,
    remove,
    update,
};
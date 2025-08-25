import api from "..";

const UserService = {
  getUser(id) {
    return api.get(`/user/${id}`);
  },
  getMany() {
    return api.get("/user");
  },
  update(id, data) {
    return api.put(`/user/${id}`, data);
  },
  delete(id) {
    return api.delete(`/user/${id}`);
  },
};

export default UserService;

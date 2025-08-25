import api from ".."

const AuthService = {
    login: (email, senha ) => api.post(`/auth`,{email, senha}),
    getProfile: ()=> api.get("/auth")
}

export default AuthService;
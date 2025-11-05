import { createContext, useState, useContext } from "react"
import { loginApi } from "../services/apiServices"

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [nome, setNome] = useState("Bolhao")
    const [user, setUser] = useState({})
    // Login recebe os dados de acesso e faz a validação
    // Caso ok, o servidor retorna o token e outros dados
    const login = (usuario) => {
        // Simula autenticação no servidor
        const responseApi = loginApi(usuario)
        // Caso não tenha um interceptor na instância do axios,
        // é possível configurar o token retornado a API
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        setUser(responseApi)
    }
    // Apenas exclui os dados do usuário
    const logout = () => setUser(null)

    return (
        <AuthContext.Provider value={{ login, logout, logado:!!user, nome }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
import api from "./api";
import { apiPost } from "./api";

export async function getData() {
    const {data} = await api.get("/habilidades")
    return data
}

// Função para POST
 export const criarContato = async ( contato ) => {
    const {data} = await apiPost.post('/posts', contato)
    return data
 }
 // Função para UPDATE
 export const atualizarContato = async (id, contato) => {
    const {data} = await apiPost.put(`/posts/${id}`, contato)
    return data
 }
 // Função para DELETE
 export const deletarContato = async ( id ) => {
    const {data} = await apiPost.delete(`/posts/${id}`)
    return data
 }

 export const loginApi = async(usuario) =>{
   const {data} = await apiPost.post('/login',usuario)
   return data
 }
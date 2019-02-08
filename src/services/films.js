import { http } from './config'


export default {
    listarFilmes:() =>{
        return http.get('films/')
    },

    teste:(link) =>{
        return http.get(link)
    },

}
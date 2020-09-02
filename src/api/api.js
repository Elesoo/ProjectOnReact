import * as axios from 'axios';

let inistance = axios.create({
    headers: {
        Accept : "application/json"
    }
});

export const authAPI = {
    registration(email, phone, fullName, password, username){
        return inistance.post('api/users',{
            "email" : email,
            "phone" : phone,
            "fullName" : fullName,
            "password": password,
            "username" : username
        })
    },
    getPhotos(currentPage, pageSize){
        return inistance.get(`/api/media_objects?page=${currentPage}&limit=${pageSize}`);
    },
    login(username, password){
        return inistance.post(`/api/clients`, {
            "name": username,
            "allowedGrantTypes": [
                password
            ]
        })
    },
    logout(id){
        return inistance.delete(`/api/clients/${id}`)
    },

    loadFile(props){
        console.log(props)
        var formData = new FormData()
        formData.append("name", props.name);
        formData.append("file", props);
        return inistance.post(`/api/media_objects/`,formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
    }
}



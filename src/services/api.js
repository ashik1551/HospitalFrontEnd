import axios from "axios"

function getHeaders(){
    let headers={
        "Authorization":"Bearer "+localStorage.getItem('access')
    }
    return headers
}


const Base_Url="http://127.0.0.1:8000/api/"

export async function getUserApi(data){

    return await axios.post(Base_Url+'token/',data)

}

export async function createUserApi(data){

    return await axios.post(Base_Url+'user/',data)

}

export async function checkAdmin(){

    return await axios.get(Base_Url+'isadmin/',{headers:getHeaders()})

}

export async function getSpecializationApi(){

    return await axios.get(Base_Url+`specialization/`,{headers:getHeaders()})

}

export async function createSpecializationApi(data){

    return await axios.post(Base_Url+`specialization/`,data,{headers:getHeaders()})

}

export async function retrieveSpecializationApi(id){

    return await axios.get(Base_Url+`specialization/${id}/`,{headers:getHeaders()})

}

export async function updateSpecializationApi(id,data){

    return await axios.put(Base_Url+`specialization/${id}/`,data,{headers:getHeaders()})

}

export async function deleteSpecializationApi(id){

    return await axios.delete(Base_Url+`specialization/${id}/`,{headers:getHeaders()})

}

export async function retrieveDoctorData(id){

    return await axios.get(Base_Url+`doctor/${id}/`,{headers:getHeaders()})

}

export async function createBookingApi(id,data){

    return await axios.post(Base_Url+`doctor/${id}/booking/`,data,{headers:getHeaders()})

}

export async function getBookingList(){
    
    return await axios.get(Base_Url+"booking/",{headers:getHeaders()})

}

export async function createDoctorApi(id,data){

    let headers={
        "Authorization":"Bearer "+localStorage.getItem('access'),
        "Content-Type":"multipart/form-data"
    }

    return await axios.post(Base_Url+`specialization/${id}/doctor/`,data,{headers:headers})

}

export async function updateDoctorApi(spId,data,docId){

    let headers={
        "Authorization":"Bearer "+localStorage.getItem('access'),
        "Content-Type":"multipart/form-data"
    }

    return await axios.put(Base_Url+`${spId}/doctor/${docId}/`,data,{headers:headers})

}

export async function deleteDoctorApi(id){
    
    return await axios.delete(Base_Url+`doctor/${id}/`,{headers:getHeaders()})

}
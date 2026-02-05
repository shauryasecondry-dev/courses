import axios from 'axios';
let url = axios.create({
    baseURL: "https://courses-1-9ybk.onrender.com",
    withCredentials: true  // ✅ Set globally for all requests
})

export function me() {
    return url.get("/me");
}

export function login(data) {
    return url.post("/login", data);
}

export function signup(data) {
    return url.post("/signup", data, {
        headers: {
            "Content-Type": "application/json",
        }
    });
}

export function logout() {
    return url.get("/logout");
}

export function addCourse(data){
    return url.post("/admin/course", data)  // ✅ Let axios handle Content-Type
}

export function data(){
    return url.get("/data");
}
export function edit(id,data){
    return url.patch(`/admin/course/${id}`,data)
}
export function del(id)
{
    return url.delete(`/admin/course/${id}`)
}
export function purchase(id){
    return url.get(`/user/purchase/${id}`)
}
export function purchaseData(){
    return url.get("/user/purchasedata")
}
import axios from 'axios';

let url = axios.create({
    baseURL: "https://courses-1-9ybk.onrender.com",
    withCredentials: true  // ✅ ensures cookies are sent with all requests
});

// Get current user
export function me() {
    return url.get("/me");
}

// Login - explicitly include credentials
export function login(data) {
    return url.post("/login", data, { withCredentials: true });
}

// Signup - include credentials
export function signup(data){
    return url.post("/signup", data, {
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true
    });
}

// Logout
export function logout() {
    return url.get("/logout", { withCredentials: true });
}

// Admin course operations
export function addCourse(data){
    return url.post("/admin/course", data, { withCredentials: true });
}
export function data(){
    return url.get("/data", { withCredentials: true });
}
export function edit(id,data){
    return url.patch(`/admin/course/${id}`, data, { withCredentials: true });
}
export function del(id){
    return url.delete(`/admin/course/${id}`, { withCredentials: true });
}

// User purchase
export function purchase(id){
    return url.get(`/user/purchase/${id}`, { withCredentials: true });
}
export function purchaseData(){
    return url.get("/user/purchasedata", { withCredentials: true });
}

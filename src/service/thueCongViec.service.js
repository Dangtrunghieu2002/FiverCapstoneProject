import { http } from "./config";
export const thueCongViec = {
    thueCongViec : (data,token) => {
        return http.post(`/thue-cong-viec`,data,{
            headers:{
                token
            }
        })
    }
}
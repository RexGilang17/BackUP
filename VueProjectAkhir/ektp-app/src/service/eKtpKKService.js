import http from "@/http-common";

class kartuKeluargaService{
    create(data){
        return http.post("/kk/insert", data);
    }
    getAll(){
        return http.get("/kk/getAll");
    }
    deleteKK(id){
        return http.delete(`/kk/delete/${id}`)
    }
    updateKK(id, data){
        return http.put(`/kk/update/${id}`,data)
    }
    getKK(id){
        return http.get(`/kk/getkk/${id}`)
    }

    createAK(data){
        return http.post("/anggota/insert", data);
    }
    getAllAK(){
        return http.get("/anggota/getAll");
    }
    deleteAK(id){
        return http.delete(`/anggota/delete/${id}`)
    }
    updateAK(id, data){
        return http.put(`/anggota/update/${id}`,data)
    }
    getAK(id){
        return http.get(`/anggota/getAK/${id}`)
    }
}
export default new kartuKeluargaService();
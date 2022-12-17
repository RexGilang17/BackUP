import registerPage from "./pages/Register.vue";
import homePage from "./pages/Home.vue";
import tambahkkPage from "./pages/TambahKK.vue";
import detaikKKPage from "./pages/DetailKK.vue";
import register from "./components/RegisterPage.vue";
import detailAKPage from "./pages/DetailAK.vue";
import formDetailAK from "./pages/DetailEditAK.vue"




export default[
    {
        path: "/",
        component: registerPage,
        name:'Selamat Datang'
    },
    {
        path: "/home",
        component: homePage,
        name: 'Homepage'
    },
    {
        path: "/addKK",
        component: tambahkkPage,
        name: 'Tambah Kartu Keluarga'
    },
    {
        path: "/detailKK/:id",
        component: detaikKKPage, 
        name: 'Detail Kartu Keluarga'
    },
    {
        path: "/detailKK/:id/listAnggota",
        component: detailAKPage,  
        name: 'Detail Anggota Keluarga'
    },
    {
        path: "/detailKK/:id/listAnggota/detailAnggota/:id",
        component: formDetailAK,

    },
    {
        path: "/register",
        component: register,
        

    },
]
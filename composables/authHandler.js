export const GetUser = async () => {
    try {
        let nuxt = useNuxtApp()
        let store = useAdminStore()
        let axios = nuxt.$UseAxios
        const res = await axios.get("/admin/admin");
        if (res.status == 200) {
            let adminData = res.data;
            console.log(adminData)
            store.SetActiveUser(adminData.id, true);
            store.SetAdminData(adminData);
            store.SetAdmin(true);
            return true
        } else {
            throw { ...error, ...status, msg: errMsg };
        }
    } catch (err) {
        console.log(err);
        return false
    }
}


export const AuthHandler = async (id, token) => {
    try {
        let nuxt = useNuxtApp()
        let store = useAdminStore()
        let UseAxios = nuxt.$UseAxios
        let auth = nuxt.$authfunc
        const res = await UseAxios.get(`/api/admin?id=${id}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': token
            },
        })
        let data = res.data
        console.log(data)
        let results;
        if (data.status) {
            results = data.results
            store.SetAdminData(results)
            store.SetActiveUser(id, true)
            return true
        } else {
            await auth.signout()
            ShowSnack(data.msg ? data.msg : 'Session Expired', 'negative')
            return false
        }
    } catch (err) {
        console.log(err);
    }
}



export const TokenGetter = async () => {
    let nuxt = useNuxtApp()
    let auth = nuxt.$authfunc
    let authstate = auth.UserState()
    let currUser = authstate.currentUser || {}
    return { uid: currUser?.uid, token: currUser?.accessToken }

}

export const RegGen = (channel) => {
    const transref = `TR${channel}` + Math.floor(Math.random() * 26896162).toString()
    let createdAt = new Date();
    return { CreatedAt: createdAt, transref: transref, channel:  channel}

}


export const ValidatePasscode = async (id, token, email, passwd) => {
    try {
        let nuxt = useNuxtApp()
        let store = useRechargeStore()
        let UseAxios = nuxt.$UseAxios
        const res = await UseAxios.post('/passcode', {uid: id, email: email, passwd: passwd }, {
            headers: {
                'Accept': 'application/json',
                'Authorization': token
            },
        })
        const data = res.data
        console.log(data)
        if (data.status == "success") {
            return true
        } else {
            return false
        }
    } catch (err) {
        console.log(err);
        return false
    }
}
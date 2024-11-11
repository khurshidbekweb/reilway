import custimAxios from '@/services'

interface AuthLogin {
    login: string,
    password: string
}

export const authUtils = {
    auth: async ({login,password}: AuthLogin) => {
        const {data} = await custimAxios.post('/auth/login',{
            login: login,
            password: password,
        })
        localStorage.setItem("token", data?.token);
        return data
    }
}
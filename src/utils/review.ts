import custimAxios from "@/services"

export const reviewUtils = {
    getRewievs: async () => {
        const {data} = await custimAxios('/review', {
            headers: {
                Authorization: `Token ${localStorage.getItem("token")}`
            }
        })
        return data
    }
}
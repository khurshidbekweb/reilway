import custimAxios from "@/services"

export const reviewUtils = {
    getRewievs: async () => {
        const {data} = await custimAxios('/review', {
            headers: {
                Authorization: `Token ${localStorage.getItem("token")}`
            }
        })
        return data
    },    
    getReviewStatictics: async () => {
        const {data} = await custimAxios.get('/review/statistics/stats',{
            headers: {
                Authorization: `Token ${localStorage.getItem("token")}`
            }
        })
        return data
    },
    deleteReview: async (id: string) => {
        const { data} = await custimAxios.delete(`/review/delete/${id}`,{
            headers: {
                Authorization: `Token ${localStorage.getItem("token")}`
            }
        })
        return data
    }
}
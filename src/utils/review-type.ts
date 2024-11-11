import custimAxios from "@/services"

interface postReviewType{
    name: {
        uz:string,
        ru: string
    },
    reviewTypeId:string |''
}

export const reviewTypeUtils = {
    getReviewType: async () => {
        const {data} = await custimAxios.get('/review-type',{
            headers: {
                Authorization: `Token ${localStorage.getItem("token")}`
            }
        })
        return data
    },
    postReviewType: async ({name, reviewTypeId}:postReviewType) => {
        const {data} = await custimAxios.post('/review-type/add',{
            name, reviewTypeId
        }, {
            headers: {
                Authorization: `Token ${localStorage.getItem("token")}`
            }
        })
        return data
    }
}
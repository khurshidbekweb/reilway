import custimAxios from "@/services"

export interface postReviewTypeT{
    name: {
        uz:string,
        ru: string
    },
    reviewTypeId:string | null
}
export interface postReviewTypeP{
    name: {
        uz:string,
        ru: string
    },
    id:string 
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
    postReviewType: async ({name, reviewTypeId}:postReviewTypeT) => {
        const {data} = await custimAxios.post('/review-type/add',{
            name, reviewTypeId
        }, {
            headers: {
                Authorization: `Token ${localStorage.getItem("token")}`
            }
        })
        return data
    },
    editReviewType: async ({name, id}:postReviewTypeP) => {
        const {data} = await custimAxios.put(`/review-type/edit/${id}`,{
            name
        }, {
            headers: {
                Authorization: `Token ${localStorage.getItem("token")}`
            }
        })
        return data
    }
}
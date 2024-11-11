
export interface review {
    _v:number
    _id:string
    category: number
    comment:string
    createdAt: string
    mark:number    
    status:number
    updatedAt: string
    parent_review_type: reviewParent
    review_type: reviewType
    user: user
}
export interface reviewParent{
    _v:number
    _id:string
    createdAt: string
    name: {uz: string, ru: string}
    review: string
    sub_reviews: string[]
    updatedAt: string
}
export interface reviewType{
    _v:number
    _id:string
    createdAt: string
    name: {uz: string, ru: string}
    review: string
    sub_reviews:[]
    updatedAt:string
}

export interface user{
    _v:number
    _id:string
    createdAt: string
    action: string
    chat_id: number
    language: "ru" | "uz"
    phone_number: string
}
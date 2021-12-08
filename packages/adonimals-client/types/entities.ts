export type User = {
    id: number
    name: string
    photo: string
}

export type Post = {
    id: number,
    user: User,
    content: {
        text: string,
        images: string[]
    },
    like: boolean,
    createdAt: Date,
    updatedAt: Date
}

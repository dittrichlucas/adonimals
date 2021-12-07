export type User = {
    id: string
    name: string
    photo: string
}

export type Post = {
    id: string,
    user: {
        id: string,
        name: string
        photo: string
    },
    content: {
        text: string,
        images: string[]
    },
    like: boolean,
    createdAt: string,
    updatedAt: string
}

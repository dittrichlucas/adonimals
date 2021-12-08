import { createContext, PropsWithChildren, useContext } from 'react'
import { User } from '../../types/entities'

type UserContextType = {
    user: User | null
}

const UserContext = createContext<UserContextType>({
    user: null
})

export const UserProvider = ({ children, user }: PropsWithChildren<UserContextType>) => {
    const providerValue = { user }
    
    return (
        <UserContext.Provider value={ providerValue }>
            { children }
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext)
}

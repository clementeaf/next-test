import { create } from 'zustand'

interface Page {
    user: boolean,
    setUser: (name: boolean) => void,
}

const useUserStore = create<Page>((set) => ({
    user: false,
    setUser: (name: boolean) => set(() => ({ user: name})),
}))

export default useUserStore;
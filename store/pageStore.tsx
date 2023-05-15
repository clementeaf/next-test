import { create } from 'zustand'

interface Page {
    page: boolean;
    setPage: () => void;
}

const usePageStore = create<Page>((set) => ({
    page: true,
    setPage: () => set(() => ({page: false})),
}))

export default usePageStore;
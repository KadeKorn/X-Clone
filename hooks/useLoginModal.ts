import {create} from 'zustand';

interface LoginModalStore {
    isOpen:boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useLoginModal = create<LoginModalStore>((set) => ({
    isOpen: false,
    onOpen () => set({ isOpen: true }),
    onClose: () => set({ isopen:false }),
}))

export default useLoginModal;
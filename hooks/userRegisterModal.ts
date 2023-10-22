import {create} from 'zustand';

interface RegisterModalStore {
    isOpen:boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useLoginModal = create<RegisterModalStore>((set) => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen:false }),
}))

export default useRegisterModal;
import axios from "axios";
import useCurrentUser from "@/hooks/useCurrentUser"
import useEditModal from "@/hooks/useEditModal";
import useUser from "@/hooks/useUser";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

const EditModal = () => {
    const {data: currentUser } = useCurrentUser();
    const {mutate: mutateFetchedUser } = useUser(currentUser?.id);
    const editModal = useEditModal();

    const [profileImage,setProfileImage] = useState();
    const [coverImage,setCoverImage] = useState();
    const [name, setnName] = useState();
    const [username,setUserName] = useState();
    const [bio,setBio] = useState();

    useEffect(() => {
        setProfileImage(currentUser?.profileImage);
        setCoverImage(currentUser?.coverImage);
        setnName(currentUser?.name);
        setUserName(currentUser?.username);
        setBio(currentUser?.bio)
    }, [currentUser]);

    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);
            await axios.patch('/api/edit', {
                name,
                username,
                bio,
                profileImage,
                coverImage
            });
            mutateFetchedUser();

            toast.success('Updated')

            editModal.onClose(); 
        } catch (error) {
            toast.error('Something went wrong')
        } finally {
            setIsLoading(false)
        }
    }, [name, username, bio, profileImage, coverImage, editModal, mutateFetchedUser])

    return (
    <div></div>
  )
}

export default EditModal
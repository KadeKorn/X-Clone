import useCurrentUser from "@/hooks/useCurrentUser"
import useEditModal from "@/hooks/useEditModal";
import useUser from "@/hooks/useUser";
import { useEffect, useState } from "react";

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
    }, [currentUser])
    return (
    <div></div>
  )
}

export default EditModal
import { useRouter } from "next/router";
import { FaTwitter } from "react-icons/fa"; // Ill change this later

const SidebarLogo = () => {
  const router = useRouter();
  return (
    <div>
      <div
      onClick={() => router.push('/')}
        className="
    rounded-full
    h-14 
    w-14
    p-4
    flex
    items-center
    justify-center
    hover:bg-blue-300
    hover:bg-opacity-10
    cursor-pointer
    transition"
      >
        <FaTwitter size={28} color="white" />
      </div>
    </div>
  );
};

export default SidebarLogo;

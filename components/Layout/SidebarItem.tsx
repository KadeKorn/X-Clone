import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
  auth?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
  auth,
}) => {
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();
  const router = useRouter();
  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }
    if(auth && !currentUser) {
      loginModal.onOpen();
    }

    else if (href) {
      router.push(href);
    }
  }, [router, onClick, href, currentUser, auth, loginModal]);
  /* Mobile first */
  return (
    <div className="flex flex-row items-center" onClick={handleClick}>
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
        <Icon size={28} color="white" />
      </div>
      {/* Desktop view */}
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 ">
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;

// import { useRouter } from "next/router";
// import { useCallback } from "react";

// interface SidebarItemProps {
//   label: string;
//   href?: string;
//   icon: Icon;
//   onClick?: () => void; // Updated the type here
// }

// const SidebarItem: React.FC<SidebarItemProps> = ({
//   label,
//   href,
//   icon: Icon,
//   onClick,
// }) => {
//   const router = useRouter();
//   const handleClick = useCallback(() => {
//     if (onClick) {
//       return onClick();
//     } else if (href) {
//       router.push(href);
//     }
//   }, [router, onClick, href]);
//   /* Mobile first */
//   return (
//     <div className="flex flex-row items-center" onClick={handleClick}>
//       <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
//         <Icon size={28} color="white" />
//       </div>
//       {/* Desktop view */}
//       <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 ">
//         <Icon size={24} color="white" />
//         <p className="hidden lg:block text-white text-xl">{label}</p>
//       </div>
//     </div>
//   );
// };

// export default SidebarItem;

// Sidebar component
import { useRouter } from "next/router";
import { useCallback } from "react";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "next-auth/react";

import useCurrentUser from "@/hooks/useCurrentUser";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();
  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: BsBellFill,
      auth: true,
    },
    {
      label: "Profile",
      href: "/users/123", // Should be dynamic based on the logged-in user
      icon: FaUser,
      auth: true,
    },
  ];

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem 
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            auth={item.auth}  />
          ))}
          {currentUser && (
            <SidebarItem
              onClick={() => signOut()}
              icon={BiLogOut}
              label="Logout"
            />
          )}
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// // Sidebar component
// import { useRouter } from "next/router";
// import { useCallback } from "react";
// import { BsHouseFill, BsBellFill } from "react-icons/bs";
// import { FaUser } from "react-icons/fa";
// import { BiLogOut } from "react-icons/bi";
// import { signOut } from "next-auth/react";

// import useCurrentUser from "@/hooks/useCurrentUser";
// import SidebarLogo from "./SidebarLogo";
// import SidebarItem from "./SidebarItem";
// import SidebarTweetButton from "./SidebarTweetButton";

// const Sidebar = () => {
//   const router = useRouter();
//   const { data: currentUser } = useCurrentUser();
//   const items = [
//     {
//       label: "Home",
//       href: "/",
//       icon: BsHouseFill,
//     },
//     {
//       label: "Notifications",
//       href: "/notifications",
//       icon: BsBellFill,
//     },
//     {
//       label: "Profile",
//       href: "/users/123", // Should be dynamic based on the logged-in user
//       icon: FaUser,
//     },
//   ];

//   const onLogoutClick = useCallback(async () => {
//     try {
//       await signOut({ redirect: false });
//       router.push('/login'); // Or whatever your login route is
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   }, [router]);

//   return (
//     <div className="col-span-1 h-full pr-4 md:pr-6">
//       <div className="flex flex-col items-end">
//         <div className="space-y-2 lg:w-[230px]">
//           <SidebarLogo />
//           {items.map((item) => (
//             <SidebarItem key={item.href} {...item} />
//           ))}
//           {currentUser && (
//             <SidebarItem onClick={onLogoutClick} icon={BiLogOut} label="Logout" />
//           )}
//           <SidebarTweetButton />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

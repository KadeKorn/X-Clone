
interface SidebarItemProps {
    label: string;
    href?: string;
    icon: Icon,
    onClick?: () => void;  // Updated the type here
  }

const SidebarItem: React.FC<SidebarItemProps> = ({
    label,
    href,
    icon: Icon,
    onClick,  // Fixed the typo here
  }) => {
    return (
      <div className="flex flex-row items-center" onClick={onClick}>
        <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
          <Icon size={28} color="white"/>
        </div>
        {/* You can use label and href here if needed */}
      </div>
    );
  };
  
  export default SidebarItem;
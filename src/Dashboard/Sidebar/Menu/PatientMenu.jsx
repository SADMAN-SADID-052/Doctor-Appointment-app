import MenuItem from "./Menuitem";
import { CgProfile } from "react-icons/cg"
import { MdAnnouncement } from "react-icons/md";

const PatientMenu = () => {
  return (
    <div>
      <div className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600   cursor-pointer">
        <MenuItem
          icon={MdAnnouncement}
          label="Doctor List"
          address="announcements"
        />
      </div>
      <div className="flex items-center px-4 py-2  transition-colors duration-300 transform text-gray-600   cursor-pointer">
        <MenuItem icon={CgProfile} label="Profile" address="" />
      </div>
    </div>
  );
};

export default PatientMenu;

import MenuItem from "./Menuitem";
import { MdBookmarkAdd } from "react-icons/md";
import { ImAidKit } from "react-icons/im";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const PatientMenu = () => {
  return (
    <div>
      <div className="flex items-center  transition-colors duration-300 transform text-gray-600   cursor-pointer">
        <MenuItem
          icon={HiOutlineClipboardDocumentList}
          label="Doctor List"
          address="announcements"
        />
      </div>
      <div className="flex items-center  transition-colors duration-300 transform text-gray-600   cursor-pointer">
        <MenuItem
          icon={MdBookmarkAdd}
          label="Book Appointment"
          address="announcements"
        />
      </div>
      <div className="flex items-center  transition-colors duration-300 transform text-gray-600   cursor-pointer">
        <MenuItem
          icon={ImAidKit}
          label="My Appointment"
          address="announcements"
        />
      </div>
      
    </div>
  );
};

export default PatientMenu;

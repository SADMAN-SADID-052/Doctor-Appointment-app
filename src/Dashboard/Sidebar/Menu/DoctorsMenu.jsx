import { MdOutlinePlaylistAdd } from "react-icons/md";

import { LuListCheck } from "react-icons/lu";
// import { MdWorkHistory } from "react-icons/md";
import MenuItem from "./Menuitem";


const DoctorsMenu = () => {
  return (
    <div>
      <MenuItem
        icon={MdOutlinePlaylistAdd}
        label="Appointment List"
        address="announcements"
      />
      {/* <MenuItem icon={} label="Make Payment" address="" /> */}
      <MenuItem
        icon={LuListCheck}
        label="Appointment Management"
        address="payHistory"
      />
      {/* <MenuItem icon={CgProfile} label="Profile" address="" /> */}
    </div>
  );
};

export default DoctorsMenu;

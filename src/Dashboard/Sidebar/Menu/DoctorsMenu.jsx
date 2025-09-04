import { MdPayments } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdAnnouncement } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import MenuItem from "./Menuitem";


const DoctorsMenu = () => {
  return (
    <div>
      <MenuItem
        icon={MdAnnouncement}
        label="Announcements"
        address="announcements"
      />
      <MenuItem icon={MdPayments} label="Make Payment" address="" />
      <MenuItem
        icon={MdWorkHistory}
        label="Payment History"
        address="payHistory"
      />
      <MenuItem icon={CgProfile} label="Profile" address="" />
    </div>
  );
};

export default DoctorsMenu;

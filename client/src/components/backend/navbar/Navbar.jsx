import { BsSearch } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import profile from '../../../assets/image/defaultProfile.png';
const Navbar = () => {
  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <div className="input-box">
            <input type="text" placeholder="Search" />
            <BsSearch className="search-icon" size={23} />
          </div>
        </div>
        <div className="navbar-right">
          <IoMdNotificationsOutline size={25} />
          <div className="img-wrapper">
            <img src={profile} alt="" width={40} height={40} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

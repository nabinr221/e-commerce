import { BsSearch } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import profile from '../../../assets/image/defaultProfile.png';
import {
  NavbarWrapper,
  NavbarLeft,
  NavbarRight,
  InputBox,
  ImgWrapper,
  GreatingMessage,
} from './style';
const Navbar = () => {
  function getTimeBasedGreeting() {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return 'Good morning!';
    } else if (currentHour >= 12 && currentHour < 17) {
      return 'Good afternoon!';
    } else if (currentHour >= 17 && currentHour < 21) {
      return 'Good evening!';
    } else {
      return 'Have a wonderful night!';
    }
  }
  const greeting = getTimeBasedGreeting();
  console.log(greeting);

  const data = {
    name: 'nabin r chy',
    email: 'nabin@gmail.com',
    address: 'ktm',
    gender: 'male',
  };
  const originalName = data.name;
  const modifiedName = originalName.split(' ')[0];

  return (
    <>
      <NavbarWrapper>
        <NavbarLeft>
          <GreatingMessage>
            <h1>
              {greeting}
              {data.gender === 'male' && <span>Mr.</span>}
              {data.gender === 'female' && <span>Miss.</span>}
              <span>{modifiedName}</span>
            </h1>
          </GreatingMessage>
          <InputBox>
            <input type="text" placeholder="Search" />
            <BsSearch className="search-icon" size={23} />
          </InputBox>
        </NavbarLeft>
        <NavbarRight>
          <IoMdNotificationsOutline size={25} />
          <ImgWrapper>
            <img src={profile} alt="profile Image" />
          </ImgWrapper>
        </NavbarRight>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;

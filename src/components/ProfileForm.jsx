
import Input from "./Input";
import peter from "../assets/icon/peter.svg";
import badge from "../assets/icon/badge.svg";
import "../assets/css/profile.scss";

const ProfileForm = ({user}) => {
  return (
    <div className="profile">
      <div className="form">
        <div className="info">
          <Input label="FirstName" type="text" value={user.firstName}/>
        </div>
        <div className="info">
          <Input label="LastName" type="text" value={user.lastName} />
        </div>
        <div className="info">
          <Input label="City" type="text"  value={user.city}/>
        </div>
        <div className="info">
          <Input label="Postal Code" type="text" value={user.postalCode} />
        </div>

        <div className="address">
          <Input label="Address" type="text" value={user.address} />
        </div>

        <div className="info">
          <Input label="Email" type="email" value={user.email}/>
          <img className="badge" src={badge} alt="badge"  />
        </div>
        <div className="info">
          <Input label="Phone" type="tel" value={user.phone}/>
        </div>
        <div className="password">
          <Input label="Password" type="password" />
        </div>
      </div>
      <div className="picture">
        <img src={peter} alt="peter" />
      </div>
    </div>
  );
};

export default ProfileForm;

import "../assets/css/account.scss";
import career from "../assets/icon/career.svg";
import ProfileForm from "../components/ProfileForm";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";

const user = {
    firstName: "Petter",
    lastName: "Cetera",
    city: "London",
    postalCode: "E2 4XF",
    address: "123 Example",
    email: "petter@gmail.com",
    phone: "+442223334444",

}
const Account = () => {
  return (
    <div className="account">
      <div className="type">
        <img className="logo" src={career} alt="career" />
        <div className="description">
          <span className="title">Premium Account</span>
          <span className="paragraph">
            You have a premium account, granting you access to all the
            remarkable features offered by ResumeDone. With this privilege, you
            can indulge in the freedom of downloading an unlimited number of
            resumes and cover letters in both PDF and Word formats.
          </span>
        </div>
      </div>
      <div className="information">
        <span className="title"> Personal Information</span>
        <div className="form">
          <ProfileForm user={user} />
        </div>
        <span className="paragraph">
          Use this email to log in to your <a className="link">resumedone.io</a> account and receive
          notifications.
        </span>
        <Button text="Save" handleClick={() => alert("click")} />
      </div>
      <div className="show">
        <CheckBox />
        <span className="paragraph">Show my profile to serious employers on <a className="link">hirethesbest.io </a>for free</span>
      </div>
      <div className="delete">
        <span className="title">Delete account</span>
        <span className="paragraph">
          If you delete your account you’ll be permanently removing it from our
          systems - you can’t undo it.
        </span>
        <span className="confirm">Yes, Delete my account</span>
      </div>
      <div className="footer">
        <span className="paragraph">
          <a className="link">Get in touch with our support team</a> if you have any question or want to
          leave some feedback.<br /> We’ll be happy to hear from you.
        </span>
        <span className="line"></span>
        <div className="nav">
          <span className="item">Terms & Conditions</span>
          <span className="item">Privacy Policy</span>
          <span className="item">FAQ</span>
          <span className="item">Contact Us</span>
        </div>
      </div>
    </div>
  );
};

export default Account;

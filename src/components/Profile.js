import "../styles/profile.scss";
import ProfileIcon from "./ProfileIcon";
import users from "../data/users";

function Profile(props) {
  const {
    userName,
    caption,
    urlText,
    iconSize,
    captionSize,
    storyBorder,
    hideAccountName,
    image,
  } = props;

  let accountName = userName
    ? userName
    : users[Math.floor(Math.random() * users.length)].username;

  return (
    <>
      <div className="profile">
        <ProfileIcon
          iconSize={iconSize}
          storyBorder={storyBorder}
          image={image}
        />

        {(accountName || caption) && !hideAccountName && (
            <div className="textContainer">
                <span className="accountName">{accountName}</span>
                <span className={`caption ${captionSize}`}>{caption}</span>
            </div>
        )} 
        <a href="">{urlText}</a>
      </div>
    </>
  );
}

export default Profile;

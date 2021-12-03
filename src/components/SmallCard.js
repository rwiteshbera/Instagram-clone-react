import "../styles/smallCard.scss";
import Profile from "./Profile";
import { ReactComponent as CardButton } from "../images/cardButton.svg";
import CardMenu from "./CardMenu.js";
import Comment from "./Comment.js";

function SmallCard(props) {
  const { storyBorder, image, comments, likedByText, likedByNumber, hours } =
    props;

  return (
    <>
      <div className="card">
        <header>
          <Profile iconSize="medium" storyBorder={storyBorder} />
          <CardButton className="cardButton" />
        </header>
        <img src={image} alt="card content" className="cardImage" />
        <CardMenu className="cardMenu" />
        <div className="likedBy">
          <Profile iconSize="small" hideAccountName={true} />
          <span>
            Liked by <strong>{likedByText}</strong> and{" "}
            <strong>{likedByNumber} others</strong>
          </span>
        </div>
        <div className="commnets">
          {comments.map((e) => {
            return <Comment key={e.id} accountName={e.user} comment={e.text} />;
          })}
        </div>
        <div className="timePosted">{hours} HOURS AGO</div>
        <div className="addComment">
          <div className="commentText">Add a comment...</div>
          <div className="postText">POST</div>
        </div>
      </div>
    </>
  );
}

export default SmallCard;

import "../styles/card.scss";
import Stories from "./Stories";
import SmallCard from "./SmallCard.js";

function Card() {
  const commentsOne = [
    {
      user: "raffagrassetti",
      text: "Woah dude, this is awesome! 🔥",
      id: 1,
    },
    {
      user: "therealadamsavage",
      text: "Like!",
      id: 2,
    },
    {
      user: "mapvault",
      text: "Niceeeee!",
      id: 3,
    },
  ];

  const commentsTwo = [
    {
      user: "mapvault",
      text: "Amazing content, keep it up!",
      id: 4,
    },
  ];

  const commentsThree = [
    {
      user: "dadatlacak",
      text: "Love this!",
      id: 5,
    },
  ];

  return (
    <div className="cards">
      <Stories />

      <SmallCard
        storyBorder={true}
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        accountName="rafus192"
        likedByText="alex123"
        likedByNumber={89}
        hours={16}
      />
      <SmallCard
        storyBorder={true}
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        accountName="rafus192"
        likedByText="alex123"
        likedByNumber={89}
        hours={16}
      />
      <SmallCard
        storyBorder={true}
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        accountName="rafus192"
        likedByText="alex123"
        likedByNumber={89}
        hours={16}
      />
      <SmallCard
        storyBorder={true}
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        accountName="rafus192"
        likedByText="alex123"
        likedByNumber={89}
        hours={16}
      />
    </div>
  );
}

export default Card;

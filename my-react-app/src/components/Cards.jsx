import profilePic from "../assets/profile.png";

function Cards() {
  return (
    <div className="Cards">
      <img className="Card-image" src={profilePic} alt="Profile" />
      <h2 className="Card-title">Saba Leto</h2>
      <p className="Card-text">i study proggraming and i love working out</p>
    </div>
  );
}

export default Cards;

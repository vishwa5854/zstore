import "./card.css";

const Card = (props) => {
  let { website, userName, password } = props;

  return (
    <div className="box">
      <div>
        <h3>{ website }</h3>
        <h4 className="mt-2"><b>Username: </b>{ userName }</h4>
        <h4 className="mt-2"><b>Password: </b>{ password }</h4>
      </div>
      <i className="fa-regular fa-2x fa-copy"></i>
    </div>
  );
};

export default Card;

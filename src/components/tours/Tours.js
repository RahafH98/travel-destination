function Tours(props) {
    return (
      <div className="card" id="cardId">
          <h2>{props.name}</h2>
          <img src={props.img} alt={props.name} id="img"/>
      </div>
    );
  }
  export default Tours;
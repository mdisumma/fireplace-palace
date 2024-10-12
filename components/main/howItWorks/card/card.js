// creating the card component to itterate our data 
function Card(props) {
  return (
    <article className="card">
      {props.image}
      <h3 className="card-title">{props.title}</h3>
      <p className="card-description">{props.description}</p>
    </article>
  );
}

export default Card;

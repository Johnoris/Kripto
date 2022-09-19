const GetStartedCard = (props) => {
    return(
      <div className='get-started-card'>
        <div className='circle'><h4>{props.number}</h4></div>
        <div className='main'>
          <h3>{props.title}</h3>
          <p>{props.subtitle}</p>
        </div>
      </div>
    )
}
export default GetStartedCard;

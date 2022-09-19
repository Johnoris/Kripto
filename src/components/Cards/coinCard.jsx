const CoinsCard = (props) => {
    return(
      <div className='coins-card'>
        <div className='row-1'>
        <img src={props.src} alt=""/>
        </div>
        <div className='row-2'>
          <h5>{props.name}</h5>
        </div>
        <div className='row-3'>
          <h5>{props.price}</h5>
        </div>
        <div className='row-4'>
          <img src={props.chart} alt=''/>
        </div>
        <div className='row-5'>
          <h5>{props.cap}</h5>
        </div>
        <div className='row-6'>
          <h5>{props.volume}</h5>
          <h6>{props.subvolume}</h6>
        </div>
        <div className='row-7'>
          <button>Trade</button>
        </div>
      </div>
    )
}
export default CoinsCard;
// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails

  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="desc">{description}</p>
        <button className="show-more">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem

import './featuredProperties.css'
import useFetch from '../../hooks/useFetch'
import { Link } from 'react-router-dom'
const FeaturedProperties = () => {
  const { data, loading} = useFetch('hotels')
  const images = [
    'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1',
  ]
  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="fp">
          {data &&
            images.map((image, i) => (
              <div className="fpItem" key={i}>
                <img src={image} alt="" className="fpImg" />
                <span className="fpName">
                  <Link to={"./hotels/" + data[i]?._id}>{data[i]?.name}</Link>
                </span>
                <span className="fpCity"> {data[i]?.city}</span>
                <span className="fpPrice">Starting from ${data[i]?.cheapestPrice}</span>
                <div className="fpRating">
                  <button>{data[i]?.rating}</button>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  )
}

export default FeaturedProperties

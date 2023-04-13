import './featured.css'
import useFetch from '../../hooks/useFetch'
const Featured = () => {
  const { data, loading, error } = useFetch('hotels/countByCity/?cities=Ho Chi Minh,Ha Noi,Da Nang')
  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <div className="featured">
            <div className="featuredItem">
              <img src="/images/Ha Noi.jpg" alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>Ha Noi</h1>
                <h2>{data[1]} properties</h2>
              </div>
            </div>

            <div className="featuredItem">
              <img src="/images/HCM.jpg" alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>Ho Chi Minh</h1>
                <h2>{data[0]} properties</h2>
              </div>
            </div>

            <div className="featuredItem">
              <img src="/images/Da Nang.jpg" alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>Da Nang</h1>
                <h2>{data[2]} properties</h2>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Featured

import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Reserve from "../../components/reserve/Reserve";
import { DateRange } from "react-date-range";
import { useSelector } from "react-redux";

const Hotel = () => {
  const hotelId = useParams().id;
  const [slideNumber, setSlideNumber] = useState(0);
  const [roomPrice, setRoomPrice] = useState(0);
  const [open, setOpen] = useState(false);
  const [openReserve, setOpenReserve] = useState(false);
  const {log} = useSelector(state => state.user)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const totalStayDays =
    -new Date(date[0].startDate).getDay() +
    new Date(date[0].endDate).getDay() +
    1;
  const [state, setState] = useState({
    name: "",
    number: "",
    email: "",
    idCard: "",
    payment: "",
  });
  const { data, loading, error } = useFetch(`hotels/find/${hotelId}`);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };
  const roomPriceTotal = (checked, price) => {
    setRoomPrice(checked ? roomPrice + price : roomPrice - price);
  };
  const HandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!log) {
      return alert('Please Sign in First!')
    }
    if (
      !state.name ||
      !state.number ||
      !state.email ||
      !state.idCard ||
      !state.payment
    ) {
      return alert('Please enter all fields')
    }
    try {
    } catch (err) {
      console.log(err)
    }
  }

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    const allDate = new Date(start.getTime())
    const dates = []
    while (allDate <= end) {
      dates.push(new Date(allDate).getTime())
      allDate.setDate(allDate.getDate() + 1)
    }
    return dates
  }
  const alldates = getDatesInRange(date[0].startDate, date[0].endDate)
  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((datelength) =>      
    alldates.includes(new Date(datelength).getTime()),
    )
    return !isFound
  }
  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          <Navbar />
          <Header type="list" />
          <div className="hotelContainer">
            {open && (
              <div className="slider">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="close"
                  onClick={() => setOpen(false)}
                />
                <FontAwesomeIcon
                  icon={faCircleArrowLeft}
                  className="arrow"
                  onClick={() => handleMove("l")}
                />
                <div className="sliderWrapper">
                  <img
                    src={photos[slideNumber].src}
                    alt=""
                    className="sliderImg"
                  />
                </div>
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="arrow"
                  onClick={() => handleMove("r")}
                />
              </div>
            )}
            <div className="hotelWrapper">
              <button className="bookNow">Reserve or Book Now!</button>
              <h1 className="hotelTitle">{data.title}</h1>
              <div className="hotelAddress">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{data.address}</span>
              </div>
              <span className="hotelDistance">
                Excellent location – {data.distance}m from center
              </span>
              <span className="hotelPriceHighlight">
                Book a stay over ${data.cheapestPrice} at this property and get
                a free airport taxi
              </span>
              <div className="hotelImages">
                {data.photos?.map((photo, i) => (
                  <div className="hotelImgWrapper" key={i}>
                    <img
                      onClick={() => handleOpen(i)}
                      src={photo}
                      alt=""
                      className="hotelImg"
                    />
                  </div>
                ))}
              </div>
              <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                  <h1 className="hotelTitle">{data.title}</h1>
                  <p className="hotelDesc">{data.desc}</p>
                </div>
                <div className="hotelDetailsPrice">
                  <h1>Perfect for a {totalStayDays}-night stay!</h1>
                  <span>
                    Located in the real heart of {data.city}, this property has
                    an excellent location score of {data.rating}!
                  </span>
                  <h2>
                    <b>${data.cheapestPrice * totalStayDays}</b> (
                    {totalStayDays} nights)
                  </h2>
                  <button onClick={(e) => setOpenReserve(true)}>
                    Reserve or Book Now!
                  </button>
                </div>
              </div>
            </div>

            {openReserve && (
              <div>
                <div className="reserveContainer">
                  <span>
                    <h2>Dates:</h2>
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className=""
                      minDate={new Date()}
                    />
                  </span>
                  <span className="rReserve">
                    <form action="">
                      <h2>Reserve Info:</h2>
                      <p>Your Full Name:</p>
                      <input
                        type="text"
                        name="name"
                        size="20"
                        id=""
                        onChange={HandleChange}
                      />
                      <p>Your Phone Number:</p>
                      <input
                        type="number"
                        name="number"
                        size=""
                        id=""
                        onChange={HandleChange}
                      />
                      <p>Your Email:</p>
                      <input
                        type="email"
                        name="email"
                        size="20"
                        id=""
                        onChange={HandleChange}
                      />
                      <p>Your Identity Card Number:</p>
                      <input
                        type="number"
                        name="idCard"
                        size=""
                        id=""
                        onChange={HandleChange}
                      />
                    </form>
                  </span>
                </div>
                <h2>Select Rooms</h2>
                <div className="reserveContainer ">
                  <div className="rSelectedRoom">
                    {data.rooms?.map((room, i) => (
                      <Reserve
                        rooms={room}
                        roomPriceTotal={roomPriceTotal}
                        isAvailable={isAvailable}
                        key={i}
                      />
                    ))}
                  </div>
                    <p>
                      <strong>Total Price = ${roomPrice * totalStayDays}</strong>
                    </p>
                  <div>
                    <span>
                      <select
                        className=" w-50 form-select form-select-md mb-3"
                        aria-label=".form-select-lg example"
                      >
                        <option selected>Select</option>
                        <option value="Cash">Cash</option>
                        <option value="Credit Card">Credit Card</option>
                      </select>
                    </span>
                    <span className="">
                      <button
                        onClick={handleSubmit}
                        type="button"
                        className="btn btn-primary"
                      >
                        Reserve Now
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            )}
            <MailList />
            <Footer />
          </div>
        </div>
      )}
      {error && <span>{error}</span>}
    </>
  );
};

export default Hotel;

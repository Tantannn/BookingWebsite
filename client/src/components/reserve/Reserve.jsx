import "./reserve.css";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Reserve = ({
  setOpen,
  hotelId,
  dates,
  state,
  totalPriceCal,
  totalPrice,
  hotelName,
}) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);

  const auth = useSelector((state) => state.auth);
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1 );
    }

    return dates;
  };

  const alldates = getDatesInRange(
    dates[0].startDate,
    dates[0].endDate,
  );

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );
    return !isFound;
  };
const handleOption = (e) => {
  setSelectedOption(e.target.value)
  }
  const handleSelect = (e, price) => {
    const checked = e.target.checked;
    const value = e.target.value;
    const name = e.target.name;
    setSelectedRooms(
      checked
        ? [...selectedRooms, { value, name }]
        : selectedRooms.filter((item) => item.value !== value)
    );
    totalPriceCal(e.target.checked, price);
  };

  
  // console.log(selectedOption);
  const handleClick = async () => {
    console.log(selectedRooms);
    if (selectedOption === [] || !selectedOption) {
      return alert("Please select Option");
    }
    if (
      !state.fullName ||
      !state.phoneNumber ||
      !state.email ||
      !state.idCard 
    ) {
      return alert("Please enter all fields");
    }  
    try {
      const res1 = await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId.value}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      const res2 = await Promise.all([
        axios.post(`users/${auth.userId}`, { ...state }),
        axios.post(`transactions`, {
          startDate: dates[0].startDate,
          endDate: dates[0].endDate,
          price: totalPrice,
          hotel: hotelId,
          hotelName,
          user: auth.user,
          payment: selectedOption,
          rooms: selectedRooms.map( room => room.name)
        }),
      ]);
      if (res1 && res2)
        alert('Booked Successful!')
      setOpen(false);
      // navigate("/")
    } catch (err) {}
  };
  return (
    <div className="">
      <div className="">
        <span>Select your rooms:</span>
        <div className="rGrid">
          {data.map((item) => (
            <div className="rItem" key={item._id}>
              <div className="rItemInfo">
                <div className="rTitle">{item.title}</div>
                <div className="rDesc">{item.desc}</div>
                <div className="rMax">
                  Max people: <b>{item.maxPeople}</b>
                </div>
                <div className="rPrice">${item.price}</div>
              </div>
              <div className="rSelectRooms">
                {item.roomNumbers.map((roomNumber) => (
                  <div className="room" key={roomNumber._id}>
                    <label>{roomNumber.number}</label>
                    <input
                      type="checkbox"
                      value={roomNumber._id}
                      name={roomNumber.number}
                      onChange={(e) => handleSelect(e, item.price)}
                      disabled={!isAvailable(roomNumber)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <select id="" onChange={handleOption}>
          <option value="select">Select your Payment Medthod</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Cash">Cash</option>
        </select>
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
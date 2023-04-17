import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import './reserve.css'
const Reserve = ({ rooms,roomPriceTotal ,isAvailable}) => {
  const { data, loading, error } = useFetch(`rooms/find/${rooms}`);
  const [selectedRooms, setSelectedRooms] = useState('')
  const handleChange = (e, price) => {
    setSelectedRooms(e.target.checked ? [...selectedRooms, e.target.value] : selectedRooms.filter((item) => item !== e.target.value))
    roomPriceTotal(e.target.checked, +price)
  }
  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="rItem rSelectedRoom">
          <div>
            <p>
              <strong>{data.title}</strong>
            </p>
            <p>{data.desc}</p>
            <p>Max people: {data.maxPeople}</p>
            <p>${data.price}</p>
          </div>
          <div>
            {data.roomNumbers?.map((room,i) => (
              <div key={i}>
                <label>{room.number}</label>
                <input type="checkbox" name={room._id} value={room._id} onChange={(e) => handleChange(e, data.price)} disabled={!isAvailable((room))} />
              </div>
            ))}
          </div>
        </div>
      )}
      {error && <span>{error }</span>}
    </>
  );
};

export default Reserve;

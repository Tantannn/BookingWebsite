import React from 'react'
import Table from 'react-bootstrap/Table'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import MailList from '../../components/mailList/MailList'
import './Transactions.css'
import useFetch from '../../hooks/useFetch'

const Transactions = () => {
  const { data, loading, error } = useFetch(`hotels/find`);
  return (
    <section>
      <Navbar />
      <Header type={'dashboard'} />

      <section className="transac__tb__container">
        <h3>Your Transactions</h3>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Hotel</th>
              <th>Room</th>
              <th>Date</th>
              <th>Price</th>
              <th>Payment Method</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? <p>loading...</p> :
              data.map((item, i) => (
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{item.hotelName}</td>
                  <td>
                    {item.rooms.map((room, i) => {
                      if (i > 0) {
                        return ',' + room.roomNumber.number
                      } else {
                        return room.roomNumber.number
                      }
                    })}
                  </td>{' '}
                  <th>Date</th>
                  <td>${item.price}</td>
                  <td>{item.payment}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            {error && <p>{error}</p>}
          </tbody>
        </Table>
      </section>
      <MailList />
      <Footer />
    </section>
  )
}

export default Transactions

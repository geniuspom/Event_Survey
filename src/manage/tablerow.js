import React, { Component } from 'react';
import {connect} from "react-redux";

//import Select from 'react-select';

//import { loadtranssections, edittranssection } from '../actions/transections';

//import $ from 'jquery';

//import Datable_Jquery from '../assets/scripts/datatable';

const options = [
  { value: 'Created', label: 'Created' },
  { value: 'Booking', label: 'Booking' },
  { value: 'Confirmed', label: 'Confirmed' },
  { value: 'Cancelled', label: 'Cancelled' },
  { value: 'Deleted', label: 'Deleted' }
];

class TableRow extends Component {

render() {

  const { id, date, client_symbol, client_name, booking_type, booking_status, client_contact, client_email, client_tel, register_amt, moniter_amt, created_at} = this.props.data
  const handleChange = this.props.event

  const selectedOption = {value: booking_status, label: booking_status};

  const select_value_id = 'select_' + id

  return (
    <tr key={id} id={id}>
      <td>{created_at}</td>
      <td>{date}</td>
      <td>{client_symbol}</td>
      <td>{client_name}</td>
      <td>{booking_type}</td>
      <td className='width-180'>
        <span id={select_value_id} className='display_none'>{booking_status}</span>
        <select value={booking_status} onChange={handleChange} name={id} className="selectpicker">
          <option value="Created">Created</option>
          <option value="Booking">Booking</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Deleted">Deleted</option>
        </select>
      </td>
      <td>{client_contact}</td>
      <td>{client_email}</td>
      <td>{client_tel}</td>
      <td>{register_amt}</td>
      <td>{moniter_amt}</td>
    </tr>
  )
}

}
export default TableRow;

/*<Select
  key={id}
  name={'booking_status_'+id}
  value={selectedOption}
  onChange={handleChange}
  options={options}/>*/

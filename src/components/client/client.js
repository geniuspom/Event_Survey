import React, { Component, PropTypes } from 'react'

import { Link } from 'react-router-dom'

export default class ClientPage extends Component {

  render() {
    const { id, name, address, phone, symbol, website, tax_address, tax_id} = this.props

    return (
      <tr>
        <td>{id}</td>
        <td className="text-center"><Link to={'/client:'+id} class="ti-new-window action-bt"></Link></td>
        <td>{name}</td>
        <td className="text-center">{symbol}</td>
        <td>{address}</td>
        <td>{phone}</td>
        <td>{website}</td>
        <td>{tax_address}</td>
        <td>{tax_id}</td>
      </tr>
    )
  }
}

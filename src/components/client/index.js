import React, { Component } from 'react';
//import '../../../assets/styles/index.scss';
//import $ from 'jquery';
//import { Link , NavLink } from 'react-router';
//import Site_Logo from'../../../assets/static/images/ojlogo.png';
import ClientPage from './client'

const ClientPages = ({
  clients,
  putfunction,
  createNew
}) => (
  <main className='main-content bgc-grey-100'>
    <div id='mainContent'>
      <div className="container-fluid">
        <h4 className="c-grey-900 mT-10 mB-30">Data / การจัดการข้อมูล</h4>
        <div className="row">
          <div className="col-md-12">
            <div className="bgc-white bd bdrs-3 p-20 mB-20">
              <h4 className="c-grey-900 mB-20">Client List / รายชื่อลูกค้า</h4>
              <div className="mB-20">
                <button onClick={putfunction.bind(this)} className="btn btn-primary">Reload / โหลดข้อมูลใหม่</button>
                &nbsp;&nbsp;
                <button onClick={createNew.bind(this)} className="btn btn-success">เพิ่มลูกค้า</button>
              </div>
              <table id="dataTable" className="table table-striped table-bordered" cellSpacing="0" width="100%">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Action</th>
                      <th>Name</th>
                      <th>Symbol</th>
                      <th>Address</th>
                      <th>Phone</th>
                      <th>Website</th>
                      <th>Address TAX</th>
                      <th>TAX</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>ID</th>
                      <th>Action</th>
                      <th>Name</th>
                      <th>Symbol</th>
                      <th>Address</th>
                      <th>Phone</th>
                      <th>Website</th>
                      <th>Address TAX</th>
                      <th>TAX</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {
                      clients.map((client) => (
                        <ClientPage
                          key={client.id}
                          id={client.id}
                          name={client.name}
                          address={client.address}
                          phone={client.phone}
                          symbol={client.symbol}
                          website={client.website}
                          tax_address={client.tax_address}
                          tax_id={client.tax_id}
                        />
                      ))
                    }
                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
)

export default ClientPages;

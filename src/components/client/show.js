import React, { Component } from 'react';

const ShowClientPage = ({
  client,
  putfunction,
  backpage
}) => (
  <main className='main-content bgc-grey-100'>
    <div id='mainContent'>
      <div className="container-fluid">
        <h4 className="c-grey-900 mT-10 mB-30">Client Name / รายชื่อลูกค้า</h4>

        <div className="bd bgc-white">
          <div className="layers">

            <div className="layer w-100 pX-20 pT-20">
              <h5 className="lh-1 c-grey-900">ข้อมูลลูกค้า</h5>
            </div>

            <div className="layer w-100 p-20">

            <div className="row">
              <div className="col-md-12">
                <div className="bgc-white p-20 mB-20 content_list">

                <form>

                    <div className="row">
                      <label className="col-md-4 text-right">รหัสบริษัท</label>
                      <div className="col-md-6 text-info">{client.id}</div>
                    </div>

                    <div>&nbsp;</div>

                    <div className="row">
                      <label className="col-sm-2 col-form-label">ชื่อบริษัท</label>
                      <div className="col-md-8 text-info">
                        <input className="form-control" type="text" name="name" defaultValue={client.name}/>
                      </div>
                    </div>

                    <div>&nbsp;</div>

                    <div className="row">
                      <label className="col-md-4 text-right col-form-label">ชื่อย่อบริษัท</label>
                      <div className="col-md-6 text-info">
                        <input className="form-control" type="text" name="symbol" defaultValue={client.symbol}/>
                      </div>
                    </div>

                    <div>&nbsp;</div>

                    <div className="row">
                      <label className="col-md-4 text-right col-form-label">ที่อยู่</label>
                      <div className="col-md-6 text-info">
                        <textarea className="form-control" name="address" rows="3" defaultValue={client.address} />
                      </div>
                    </div>

                    <div>&nbsp;</div>

                    <div className="row">
                      <label className="col-md-4 text-right col-form-label">โทรศัพท์</label>
                      <div className="col-md-6 text-info">
                        <input className="form-control" type="text" name="phone" defaultValue={client.phone}/>
                      </div>
                    </div>

                    <div>&nbsp;</div>

                    <div className="row">
                      <label className="col-md-4 text-right col-form-label">เว็บไซต์</label>
                      <div className="col-md-6 text-info">
                        <input className="form-control" type="text" name="phone" defaultValue={client.website}/>
                      </div>
                    </div>

                    <div>&nbsp;</div>

                    <div className="row">
                      <label className="col-md-4 text-right col-form-label">ที่อยู่ตามเลขผู้เสียภาษี</label>
                      <div className="col-md-6 text-info">
                        <textarea className="form-control" name="address" rows="3" defaultValue={client.tax_address}/>
                      </div>
                    </div>

                    <div>&nbsp;</div>

                    <div className="row">
                      <label className="col-md-4 text-right col-form-label">เลขผู้เสียภาษี</label>
                      <div className="col-md-6 text-info">
                        <input className="form-control" type="text" name="tax_id" defaultValue={client.tax_id}/>
                      </div>
                    </div>

                    <div>&nbsp;</div>

                    <div className="row">
                      <label className="col-md-5 text-right">
                        <button onClick={putfunction()} className="btn btn-success">บันทึก</button>
                      </label>
                      <div className="col-md-6 text-info">
                        <div onClick={() => backpage()} className="btn btn-danger">ยกเลิก</div>
                      </div>
                    </div>

                  </form>

                </div>
                </div>
                </div>

            </div>

          </div>
        </div>




        </div>
      </div>
  </main>
)

export default ShowClientPage;

/*
{client.id}
{client.name}
{client.address}
{client.phone}
{client.symbol}*/

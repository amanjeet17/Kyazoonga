import React, { Component } from 'react';


const Hottictkets = (props) =>{
  const tickets= props.ticketsData;
  console.log("tickets",tickets);
    return(

      <section className ="hot-ticket-sec ticket-boxes">
        <div className ="container">
          <h2 className ="site-title">Hot Tickets <small>Get tickets to your favourite events</small></h2>
          <div className ="row">
          {
            tickets.map((ticket) => {
            return(
            <div className ="col-xs-12 col-sm-6 col-lg-4">
              <div className ="box">
              <a href="#" className ="block-link">
                <div className ="ticket-img">
                  <img src={ticket.image} alt=""/>
                  <span className ="ticket-price">{ticket.price}</span>
                </div>
                <div className ="ticket-info">
                  <span className ="time-info">{ticket.time}</span>
                  <h3 className ="ticket-title">{ticket.title}</h3>
                  <p className ="venue-info">{ticket.venue}</p>
                </div>
              </a>
                <div className ="social clearfix">
                  <div className ="pull-left">
                    <a className ="btn btn-default btn-xs ical" href="#">
                  <i className ="fa fa-calendar"></i> &nbsp;iCal</a>
                    <a className ="btn btn-default btn-xs ml-10" href="#">
                  <i className ="fa fa-calendar"></i> &nbsp;Google</a>
                  </div>
                  <div className ="pull-right">
                    <a className ="btn btn-default btn-xs btn-circle" href="#">
                  <i className ="fa fa-facebook"></i></a>
                    <a className ="btn btn-default btn-xs btn-circle" href="#">
                  <i className ="fa fa-twitter"></i></a>
                    <a className ="btn btn-default btn-xs btn-circle" href="#">
                  <i className ="fa fa-twitter"></i></a>
                    <a className ="btn btn-default btn-xs btn-circle" href="#">
                  <i className ="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          )}
        )

          }


          </div>
          <div className ="btn-sec text-center p-20 pt-0">
            <a href="#" className ="btn btn-primary btn-custome-lg">Discover More</a>
          </div>
        </div>
      </section>


    )

}



export default Hottictkets;

import React from 'react';

const Ticketsocials =() =>{
  return(
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
  )
}

export default Ticketsocials;

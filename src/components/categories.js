import React, { Component } from 'react';


const Categories = (props) => {
  const options = props.topcategories;
  console.log("options",options);
    return(
      <section className ="home-cat-sec text-center">
        <div className ="container">
          <h2 className ="site-title">Browse by top categories</h2>
          <div className ="row">
          {
            options.map((option) =>{
              return(
                <div className ="col-sm-4 cat-box">
                  <a href="#" className ="block-link">
                    <div className ="cat-txt">
                      <h3>{option.title}</h3>
                    </div>
                    <img src={option.image} alt="" className="img-full-width"/>
                  </a>
                </div>
              )
            })
          }

          </div>
        </div>
      </section>


    )
}
export default Categories;

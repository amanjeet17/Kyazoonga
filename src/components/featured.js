import React, { Component } from 'react';

const Featured = (props) => {
  const features = props.featureds;
    return(

      <section className ="home-featured-sec text-center">
        <h2 className ="site-title"><span>We ve been featured in</span></h2>
        <div className ="container-fluid">
        {
          features.map((feature) => {
            return(
              <a target="_blank" href={feature.link}>
                    <img src={feature.imageURL} alt={feature.alt}/></a>
            )
          })
        }
        </div>
      </section>
    )
}
export default Featured;

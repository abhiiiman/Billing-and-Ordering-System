import React from "react";

function BannerName({ name, discount, more }) {
  const currency = "$";
  return (
    <div className="bannerContent">
      <h3>Hello {name},</h3>
      <p>
        Savor the Flavors of Campus Life,<br></br>Welcome to the College Food Canteen.
      </p>
      <a href={more}>Explore More</a>
    </div>
  );
}

export default BannerName;

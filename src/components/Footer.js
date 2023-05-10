import React from 'react';
import "../assets/sass/footer.scss";

const Footer = () => {

  let today = new Date();
  let year = today.getFullYear();

  return (
    <div className='footer'>
      <p>
        &#x24D2; {year} Five Star's Booking All rights Reserved
      </p>
    </div>
  )
}

export default Footer
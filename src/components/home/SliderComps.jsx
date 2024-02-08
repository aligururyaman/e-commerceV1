import React from 'react'
import Slider from "react-slick";
const SliderComps = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      
  return (
    <div>
        <Slider {...settings} className='flex'>
          <div className='!flex justify-between items-center bg-gray-100'>
            <div className='mx-10 -mt-10'>
              <div className='text-6xl font-bold'>Rayban Güneş Gözlükleri</div>
              <div className='text-xl'>Hayata ve renklere daha sağlıklı ve güzel bakmanız için ...</div>
            </div>
            <img src="https://ideacdn.net/idea/ix/48/myassets/blogs/rayban-gunes-gozlugu.jpg?revision=1673872181" alt="heroSec" />
          </div>
          <div>
            <img src="https://www.yilmazoptik.com.tr/class/INNOVAEditor/assets/rayban-gozluk-kad%C4%B1n.jpg" alt="heroSec" />
          </div>
        </Slider>
    </div>
  )
}

export default SliderComps
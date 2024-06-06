import Testi from "./testi";
 
function CarouselDefault() {
  return (
    <div className="w-96 carousel rounded-box">
    <div className="carousel-item w-full">
        <Testi desc="At Gavaki Foundation, I've witnessed the incredible impact our initiatives have on farming communities. Our programs empower farmers with the knowledge and resources they need to succeed, and the results have been inspiring.
" auth="Parvin Gaikwad"/>
    </div> 
    <div className="carousel-item w-full">
        <Testi desc="Through our efforts at Gavaki Foundation, we've supported rural farmers in improving their agricultural practices, increasing their yields, and achieving greater economic stability. Together, we are making a real difference." auth="Nanadkishor Pohadare"/>
    </div> 
    <div className="carousel-item w-full">
        <Testi desc="Our mission at Gavaki Foundation is to drive innovation and sustainability in agriculture. We ensure that our programs not only address current challenges but also prepare our farmers for future opportunities." auth="Rushikesh Kasande"/>
    </div> 
    <div className="carousel-item w-full">
        <Testi desc="Being part of Gavaki Foundation has been a rewarding experience. Our focus on training and capacity building has empowered numerous farmers, enhancing their productivity and market access. We are committed to continuing this vital work." auth="Vrushal Shinde"/>
    </div> 
    
  </div>
  );
}

export default CarouselDefault
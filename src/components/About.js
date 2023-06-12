import React from 'react'


export default function About(props) {
    
  return (
    <div className={`container text-center border-${props.mode==="light"?"black":"white"} p-4`}>
      <marquee direction="left" scrollamount="15" behavior="scroll" loop="3" className="h4 pb-2 mb-4 fs-1">About Us - Welcome to Textutiles!</marquee>
    <p >At Textutiles, we are passionate about providing high-quality textiles that elevate your everyday experiences. Our mission is to offer a wide range of premium textiles that are not only beautiful and stylish but also durable and functional.
        With a deep understanding of the importance of textiles in our daily lives, we curate a collection that caters to various needs and preferences. Whether you're looking for luxurious bedding to create a serene sleep sanctuary, soft and absorbent towels for a pampering bathing experience, or stylish table linens to set an elegant dining table, we have you covered.</p>
      <p >At Textutiles, we understand that personal style matters. That's why we offer a diverse selection of designs, colors, and patterns to suit different tastes and interior aesthetics. Whether you prefer classic, contemporary, or bohemian styles, you'll find textiles that seamlessly blend with your unique vision and enhance the ambiance of your living spaces.
        We prioritize customer satisfaction and aim to provide a seamless shopping experience. Our friendly and knowledgeable customer support team is always ready to assist you with any queries or concerns you may have. We value your trust and strive to exceed your expectations at every step of your journey with us</p>  
      <p >As part of our commitment to sustainability, we also prioritize eco-friendly practices. From using responsibly sourced materials to minimizing waste in our packaging, we take conscious steps to reduce our environmental footprint. We believe in making choices that positively impact both our customers and the planet we all share.
        Thank you for choosing Textutiles as your go-to destination for premium textiles. We look forward to helping you create spaces that inspire comfort, beauty, and a touch of elegance. Explore our collection, and let us be part of your textile story.</p>  
    </div>
  )
}

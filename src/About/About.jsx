import React from 'react'
import img from '../images/isavedyouuuu.png'
import img3 from '../images/fork-plate.jpg'
import img2 from '../images/[removal.ai]_9ae49eee-8aa8-408e-b014-7e4014ea6798-okkkkkk.png'
import "../../src/Shop/HeadingShops.css"
import Nav from "../../src/NavBar/Nav";
import Footer from  "../../src/Footer/Footer";  


function About() {
  return (
    <>
    <Nav/>
    <div className='Firstdiv'>
        <img className='imge1' src={img2} alt="" />
      <img className='imge2' src={img} alt="" />
       <br /><br />
        <h1 className='textone'>About</h1>
        <p><a href="">shop / Home</a></p>

    </div>

   <div className='oklo'>
    <br /> <br /> <br /> <br />
    <img className='imge3' src={img3} alt="" />

       <br /> <br />
    <i>
      <p className='deypp'>We are a digital agency focused on delivering content and utility <br /> user-experiences.</p>
      </i>
      <br /> <br />
      <p>"Upgrade your kitchen with top-quality appliances from us! Our products combine durability, 
        innovation, and style to make cooking easier and more <br /> enjoyable. Whether you're a home chef or just looking
         to simplify your kitchen routine, our appliances are designed <br /> to meet your needs. Don’t miss out on transforming your
          kitchen – shop with us today for the best deals!"</p>


      <img src="http://wp.plazathemes.com/debaco/wp-content/uploads/2019/02/about-us-signature.png" alt="" />
      

   </div>



  <Footer/>



      


    </>
  )
}

export default About
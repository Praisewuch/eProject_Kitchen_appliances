import React from 'react'
import img2 from '../images/fish.jpg'
import Card from './Card'
import img3 from '../images/spoons.jpg'
import img4 from '../images/placemat.jpg'
import img5 from '../images/mat.jpg'
import img6 from '../images/glass.jpg'
import img7 from '../images/circle-mat.jpg'
import img8 from '../images/weird-fork.jpg'
import img9 from '../images/napkin.jpg'
const NewArrivials = () => {
  return (
    <div className='newArrivials'>
      <h1>New Arrivials</h1>
      <p>Accumsan vitae pede lacus ut ullamcorper sollictundin qusique libero est.</p>
      <nav className='disp'>
        <ul className='ul'>
        <li className='glas'>GLASSWARE</li>
        <li className='disp'>PLACEMATS</li>
        <li className='disp'>CUTLERY</li>
        <li>NAPKINS</li>
        </ul>
      </nav>
      <div className="box-slider">
        <Card
          img={img2}
          type={"Toy, Placements"}
          text1={"Eodem modo vel mattis ante pile"}
          text2={"ava li peller jap"}
          stars={2}
          price={"86.00"}
        />
        <Card
          img={img3}
          type={"Cutlery, Placemats"}
          text1={"suscipit allqium lobortis est"}
          text2={"essentially unchanged"}
          stars={0}
          price={"85.00"}
        />
        <Card
          img={img4}
          type={"Game, Placemats"}
          text1={"loboris latamin voluptaitubs susculpit"}
          text2={"embarrassing industry"}
          stars={1}
          price={"80.00"}
        />
        <Card
          img={img5}
          type={"Napkins, Placemats"}
          text1={"Posswure hendrit enim dingnissim"}
          text2={"james available"}
          stars={0}
          price={"45.00"}
        />
      </div>
      <div className="box-slider">
        <Card
          img={img6}
          type={"Napkins, Placemats"}
          text1={"Bibendum enim fringilla dingnissim"}
          text2={"available"}
          stars={0}
          price={"86.00"}
        />
        <Card
          img={img7}
          type={"Napinks, Placemats"}
          text1={"Natus gravida et congue pellantesque"}
          text2={"un appeeal to maketin"}
          stars={1}
          price={"85.00"}
        />
        <Card
          img={img8}
          type={"Cutlery, Placemats"}
          text1={"kareoki duis pulvinar obortis"}
          text2={"Mirum est notare"}
          stars={2}
          price={"84.00"}
        />
        <Card
          img={img9}
          type={"Napkins, Placemats"}
          text1={"Duis pulvinar obortis eleifend"}
          text2={"Excepteur iusto odio"}
          stars={1}
          price={"75.00"}
        />
      </div>
    </div>
  )
}

export default NewArrivials;

import Carousel4 from "./pages/Carousels.jsx/Carousel4"
import Carousel3 from "./pages/Carousels.jsx/Carousel3"
import Carousel2 from "./pages/Carousels.jsx/Carousel2"
import { useState } from "react";

function Main() {

  const [showModal, setShowModal] = useState(false);
  const [selectedCarousel, setSelectedCarousel] = useState(null);

  const toggleModal = (carouselComponent) => {
    setSelectedCarousel(carouselComponent);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCarousel(null); 
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <main>
        {/* Landing Page */}
        <section id="landing-page">
  
          <div class="banner">
            <p>Crafting Premium Living, One Brushstroke at a Time.</p>
            <button class="hollow-button" onClick={() => window.location.href = '/work'}>View our work</button>
            <button class="solid-button" onClick={() => window.location.href = '/contact'}>Contact us</button>
          
         </div>
    </section>

    {/* Section 1 */}
    <section id="section-left">
<img classname="main-image"src="/waimarama1.jpeg" alt="House in Waimarama's hallway"></img>
<div className="section-text main-image">
  <p className="section-header">WHO WE ARE</p>
<p>Welcome to Pedersen Painting & Decorating, your trusted choice for superior painting solutions in Hawke's Bay. As a family-run business, we take pride in delivering exceptional results tailored to your vision. With a focus on residential new builds and partnerships with industry leaders, we promise a premium finish that stands the test of time.</p>
            <button class="section-button" onClick={() => window.location.href = '/about'}>More about us</button>
            </div>
    </section>


    {/*  Section 2  */}
    <section id="section-right">
      <img classname="main-image" src="/waimarama2.jpeg" alt="House in Waimarama's bathroom"></img>
      <div className="section-text main-image">
      <p className="section-header">OUR SERVICES</p>
      <p>
Elevate your space with our premium services. From residential to commercial painting, we specialize in precision and professionalism. Our offerings include interior and exterior transformations, wallpapering, waterblasting, and roof painting. Explore our services and experience the difference in every project.</p>
            <button class="section-button" onClick={() => window.location.href = '/services'}>View our services</button>
            </div>
    </section>

     {/* Section 3  */}
     <section id="section3">
  <div class="flex-container">
  <div class="flex-item">
  <div class="image-container" onClick={() => toggleModal(<Carousel4 />)}>
    <img src="/Taihape.jpeg" alt="House in Taihape"/>
    <div class="static-overlay"></div>
    <div class="overlay"></div>
    <div class="text">Taihape</div>
  </div>
</div>

<div class="flex-item">
  <div class="image-container" onClick={() => toggleModal(<Carousel3 />)}>
    <img src="/Waimarama.jpeg" alt="House in Waimarama"/>
    <div class="static-overlay"></div>
    <div class="overlay"></div>
    <div class="text">Waimārama</div>
  </div>
</div>

    <div class="flex-item">
  <div class="image-container" onClick={() => toggleModal(<Carousel2 />)}>
    <img src="/Edenlane.jpeg" alt="House on Eden Lane" />
    <div class="static-overlay"></div>
    <div class="overlay"></div>
    <div class="text">Eden Lane</div>
  </div>
</div>
  </div>
</section>

{showModal && (
          <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal">
              <button className="exit-button" onClick={closeModal}>X</button>
              {selectedCarousel}
            </div>
          </div>
        )}


    </main>
  )
}

export default Main
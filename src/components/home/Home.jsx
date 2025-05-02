import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { Sling as Hamburger } from 'hamburger-react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { EffectCards } from 'swiper/modules';
// import 'swiper/css';
import 'swiper/css/effect-cards';

function Home() {

    const [isOpen, setOpen] = useState(true);
    const [isOpencat, setOpenCat] = useState(true);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

    const handlehamburger=()=>{
        setOpen(!isOpen);
        setOpenCat(true);
        console.log(isOpen)
    }
    const handleCategory=()=>{
      setOpenCat(!isOpencat);
      console.log(isOpencat)
    }

  useEffect(() => {
    AOS.init({
        disable: function() {
            var maxWidth = 768;
            return window.innerWidth < maxWidth;
        }
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <nav>
        <div id="navbar" >
          <div id="first_part">
            <div id="nav_img">
              <img src="images/shudhham_logo.png" alt="Logo" />
            </div>

            <div id="nav_links">
              <ul>
                <li> <a href="#hero_section"> Home</a></li>
                <li className="li_hover">
                 <Link>Category</Link>
                  <ul className="hover_style">
                    <li> <a href="#gift_products"> Gift hampers</a> </li>
                    <li><a href="#products"> Dry Fruits</a> </li>
                  </ul>
                </li>
                <li><a href="#products"> Products </a></li>
                <li> <a href="#footer-section"> About Us </a></li>
                <li><a href="#footer-section"> Contact </a></li>
              </ul>
            </div>
            <div id="ham">
            <Hamburger onToggle={handlehamburger} direction="right" />
            </div>
          </div>
          <div className={isOpen ? "" : "hamtoggle" } id="ham_menu">
            <ul>
              <li> <a href="#hero_section">Home</a></li>
              <li onClick={handleCategory}  id="li_hover2">
                Category +
                <ul className={isOpencat ? "catclose" : "catOpen"} id="hover_style2">
                  <li> <a href="#gift_products"> Gift hampers</a> </li>
                  <li><a href="#products"> Dry Fruits</a> </li>
                </ul>
              </li>
              <li><Link to="#products"> Products </Link></li>
                <li> <Link to="#footer-section"> About Us </Link></li>
                <li> <Link to="#footer-section"> Contact </Link></li>
            </ul>

        </div>
        </div>
        
        
      </nav>

      <section id="hero_section">
        {/* <div id="hero">
          <h1 class="cursor typewriter-animation">
            Enrich with goodness and purity .</h1>
          <p>- Tanish Enterprise</p>
        </div> */}
        {/* <div id="testheading">
        <div id='rssBlock'>
   <p class="cnnContents">
       <span class="marqueeStyle">&nbsp;continuous infinite text loop 1 continuous infinite text loop 2 </span>
        <span class="marqueeStyle2">&nbsp;continuous infinite text loop 3 continuous infinite text loop 4&nbsp;</span>
      </p>
      </div>
        </div> */}
        <div id="hero2">
        <div class="marquee">
          <span>WellCome In Our Shop🙏&nbsp;</span>
          <span>WellCome In Our Shop🙏&nbsp;</span>
          <span>WellCome In Our Shop🙏&nbsp;</span>
          <span>WellCome In Our Shop🙏&nbsp;</span>
        
        </div>
        </div>
      </section>
      <section id="heroscroll">
          <div className="marquee2">
          <span>WellCome In Our Shop🙏 &nbsp; &nbsp;</span>
          <span>WellCome In Our Shop🙏 &nbsp;&nbsp;</span>
          <span>WellCome In Our Shop🙏 &nbsp;&nbsp;</span>
          <span>WellCome In Our Shop🙏 &nbsp;&nbsp;</span>
          <span>WellCome In Our Shop🙏 &nbsp;&nbsp;</span>
          <span>WellCome In Our Shop🙏 &nbsp;&nbsp;</span>
          <span>WellCome In Our Shop🙏 &nbsp;&nbsp;</span>
          <span>WellCome In Our Shop🙏 &nbsp;&nbsp;</span>
          
          </div>
      </section>
     
      {/* products */}
    <section id="products" class="products">
        <h2>Our Premium Products</h2>
        <div class="product-grid">
            <div class="product-card">
                <img src="images/static-img.jpg" alt="Dried Mango"/>
                <div class="product-info">
                    <h3>Dried Mango</h3>
                    <p>Sweet, tropical mango slices dried to perfection.</p>
                    <div class="price">$9.99</div>
                    
                </div>
            </div>
            <div class="product-card">
                <img src="images/static-img.jpg" alt="Dried Cranberries"/>
                <div class="product-info">
                    <h3>Dried Cranberries</h3>
                    <p>Tangy and sweet cranberries, perfect for snacking.</p>
                    <div class="price">$7.99</div>
                    
                </div>
            </div>
            <div class="product-card">
                <img src="images/static-img.jpg" alt="Dried Apricots"/>
                <div class="product-info">
                    <h3>Dried Apricots</h3>
                    <p>Soft and chewy apricots with rich flavor.</p>
                    <div class="price">$8.99</div>
                    
                </div>
            </div>
            <div class="product-card">
                <img src="images/static-img.jpg" alt="Mixed Berries"/>
                <div class="product-info">
                    <h3>Mixed Berries</h3>
                    <p>A delicious blend of strawberries, blueberries, and cherries.</p>
                    <div class="price">$10.99</div>
                    
                </div>
            </div>
            <div class="product-card">
                <img src="images/static-img.jpg" alt="Dried Mango"/>
                <div class="product-info">
                    <h3>Dried Mango</h3>
                    <p>Sweet, tropical mango slices dried to perfection.</p>
                    <div class="price">$9.99</div>
                    
                </div>
            </div>
            <div class="product-card">
                <img src="images/static-img.jpg" alt="Dried Cranberries"/>
                <div class="product-info">
                    <h3>Dried Cranberries</h3>
                    <p>Tangy and sweet cranberries, perfect for snacking.</p>
                    <div class="price">$7.99</div>
                    
                </div>
            </div>
            <div class="product-card">
                <img src="images/static-img.jpg" alt="Dried Apricots"/>
                <div class="product-info">
                    <h3>Dried Apricots</h3>
                    <p>Soft and chewy apricots with rich flavor.</p>
                    <div class="price">$8.99</div>
                    
                </div>
            </div>
            <div class="product-card">
                <img src="images/static-img.jpg" alt="Mixed Berries"/>
                <div class="product-info">
                    <h3>Mixed Berries</h3>
                    <p>A delicious blend of strawberries, blueberries, and cherries.</p>
                    <div class="price">$10.99</div>
                    
                </div>
            </div>
        </div>
    </section>

    <section id="gift_products" class="products">
        <h2>Our Gift Items</h2>
        <div class="product-grid">
            <div data-aos="flip-left" data-aos-delay="0" class="product-card">
                <img src="images/giftimage.jpg" alt="Dried Mango"/>
                <div  class="product-info">
                    <h3>Dried Mango</h3>
                    <p>Sweet, tropical mango slices dried to perfection.</p>
                    <div class="price">$9.99</div>
                    
                </div>
            </div>
            <div data-aos="flip-left" data-aos-delay="1000" class="product-card">
                <img src="images/giftimage.jpg" alt="Dried Cranberries"/>
                <div class="product-info">
                    <h3>Dried Cranberries</h3>
                    <p>Tangy and sweet cranberries, perfect for snacking.</p>
                    <div class="price">$7.99</div>
                    
                </div>
            </div>
            <div data-aos="flip-left" data-aos-delay="200" class="product-card">
                <img src="images/giftimage.jpg" alt="Dried Apricots"/>
                <div class="product-info">
                    <h3>Dried Apricots</h3>
                    <p>Soft and chewy apricots with rich flavor.</p>
                    <div class="price">$8.99</div>
                    
                </div>
            </div>
            <div data-aos="flip-left" data-aos-delay="300" class="product-card">
                <img src="images/giftimage.jpg" alt="Mixed Berries"/>
                <div class="product-info">
                    <h3>Mixed Berries</h3>
                    <p>A delicious blend of strawberries, blueberries, and cherries.</p>
                    <div class="price">$10.99</div>
                    
                </div>
            </div>
            <div data-aos="flip-left" data-aos-delay="400" class="product-card">
                <img src="images/giftimage.jpg" alt="Dried Mango"/>
                <div class="product-info">
                    <h3>Dried Mango</h3>
                    <p>Sweet, tropical mango slices dried to perfection.</p>
                    <div class="price">$9.99</div>
                    
                </div>
            </div>
            <div data-aos="flip-left" data-aos-delay="500" class="product-card">
                <img src="images/giftimage.jpg" alt="Dried Cranberries"/>
                <div class="product-info">
                    <h3>Dried Cranberries</h3>
                    <p>Tangy and sweet cranberries, perfect for snacking.</p>
                    <div class="price">$7.99</div>
                    
                </div>
            </div>
            <div data-aos="flip-left" data-aos-delay="600" class="product-card">
                <img src="images/giftimage.jpg" alt="Dried Apricots"/>
                <div class="product-info">
                    <h3>Dried Apricots</h3>
                    <p>Soft and chewy apricots with rich flavor.</p>
                    <div class="price">$8.99</div>
                    
                </div>
            </div>
            <div data-aos="flip-left" data-aos-delay="700"  class="product-card">
                <img src="images/giftimage.jpg" alt="Mixed Berries"/>
                <div class="product-info">
                    <h3>Mixed Berries</h3>
                    <p>A delicious blend of strawberries, blueberries, and cherries.</p>
                    <div class="price">$10.99</div>
                    
                </div>
            </div>
        </div>
    </section>
      <section class="features">
        <h2>Why Choose Our Dried Fruits?</h2>
        <div class="feature-cards">
          <div class="feature-card">
            <img src="./images/image2.jpg" alt="Natural" />
            <h3>1000% Natural</h3>
            <p>
              No added sugars, preservatives, or artificial flavors — just pure,
              natural fruit goodness.
            </p>
          </div>
          <div class="feature-card">
            <img src="./images/image1.jpg" alt="Nutritious" />
            <h3>Nutrient-Rich</h3>
            <p>
              Rich in vitamins, minerals, and fiber to help you maintain a
              healthy lifestyle.
            </p>
          </div>
          <div class="feature-card">
            <img src="./images/image3.png" alt="Sustainable" />
            <h3>Sustainably Sourced</h3>
            <p>
              Ethically sourced from local farmers who follow sustainable and
              eco-friendly farming practices.
            </p>
          </div>
          <div class="feature-card">
            <img src="./images/image4.jpg" alt="Affordable" />
            <h3>Affordable & Fair Pricing</h3>
            <p>
              High-quality dried fruits at prices that offer great value without
              compromising on quality.
            </p>
          </div>
        </div>
        <div id="test">

        </div>
</section>



    


    <section id="testimonials" class="testimonials">
        
                <h2>What Our Customers Say</h2>
                <div id="testimonial-cards1" class="testimonial-cards">
                <Slider {...settings}>
                  <div>
                  <div class="testimonial-card">
                                      <p>"These dried fruits are absolutely delicious! The mangoes taste like candy but are completely natural. I'm a customer for life!"</p>
                                      <div class="author">- Sarah Johnson</div>
                                  </div>
                  </div>
                  <div>
                  <div class="testimonial-card">
                                  <p>"I love adding these dried fruits to my morning oatmeal. Great quality and the taste is incredible. Highly recommend!"</p>
                                  <div class="author">- Michael Rodriguez</div>
                              </div>
                  </div>
                  <div>
                  <div class="testimonial-card">
                      <p>"These dried fruits are absolutely delicious! The mangoes taste like candy but are completely natural. I'm a customer for life!"</p>
                      <div class="author">- Sarah Johnson</div>
                  </div>
                  </div>
                  <div>
                  <div class="testimonial-card">
                      <p>"These dried fruits are absolutely delicious! The mangoes taste like candy but are completely natural. I'm a customer for life!"</p>
                      <div class="author">- Sarah Johnson</div>
                  </div>
                  </div>
                  
                
                </Slider>
                
                    
                </div>
                <div id="testimonial-cards2" class="testimonial-cards">
                {/* <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  centeredSlides={true}
                  loop={true}
                  freeMode={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Autoplay, FreeMode]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                  <div class="testimonial-card">
                      <p>"These dried fruits are absolutely delicious! The mangoes taste like candy but are completely natural. I'm a customer for life!"</p>
                      <div class="author">- Sarah Johnson</div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div class="testimonial-card">
                                  <p>"I love adding these dried fruits to my morning oatmeal. Great quality and the taste is incredible. Highly recommend!"</p>
                                  <div class="author">- Michael Rodriguez</div>
                              </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div class="testimonial-card">
                      <p>"These dried fruits are absolutely delicious! The mangoes taste like candy but are completely natural. I'm a customer for life!"</p>
                      <div class="author">- Sarah Johnson</div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div class="testimonial-card">
                      <p>"These dried fruits are absolutely delicious! The mangoes taste like candy but are completely natural. I'm a customer for life!"</p>
                      <div class="author">- Sarah Johnson</div>
                  </div>
                  </SwiperSlide>
                 
                </Swiper> */}
                
               <div id="secSlide">
               <Swiper
                effect={'cards'}
                grabCursor={true}
                // loop={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                modules={[EffectCards,]}
                className="mySwiper"
              >
                <SwiperSlide><div class="testimonial-card">
                      <p>"These dried fruits are absolutely delicious! The mangoes taste like candy but are completely natural. I'm a customer for life!"</p>
                      <div class="author">- Sarah Johnson</div>
                  </div></SwiperSlide>
                <SwiperSlide><div class="testimonial-card">
                      <p>"These dried fruits are absolutely delicious! The mangoes taste like candy but are completely natural. I'm a customer for life!"</p>
                      <div class="author">- Sarah Johnson</div>
                  </div></SwiperSlide>
                <SwiperSlide><div class="testimonial-card">
                      <p>"These dried fruits are absolutely delicious! The mangoes taste like candy but are completely natural. I'm a customer for life!"</p>
                      <div class="author">- Sarah Johnson</div>
                  </div></SwiperSlide>
                <SwiperSlide><div class="testimonial-card">
                      <p>"These dried fruits are absolutely delicious! The mangoes taste like candy but are completely natural. I'm a customer for life!"</p>
                      <div class="author">- Sarah Johnson</div>
                  </div></SwiperSlide>
                {/* <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
              </Swiper>
               </div>

                    
                </div>
       
    </section>

    <footer>
        <div  class="footer-content">
            <div id="footer-section" class="footer-section">
                <h3>About Us</h3>
                <p>We're dedicated to bringing you the finest quality dried fruits <br />from around the world.</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <a href="#hero_section">Home</a>
                <a href="#products">Products</a>
              
                <a href="#test">Reviews</a>
                <a href="#contact">Contact</a>
            </div>
            <div class="footer-section">
                <h3>Contact Us</h3>
                <p><a href="#">
                Email: info@naturalgoodness.com
                </a></p>
                <p id="phone">Phone: (555) 123-4567 </p> {/*for link whatsapp https://wa.me/1XXXXXXXXXX 
                                                         Example: https://wa.me/?text=I'm%20inquiring%20about%20the%20apartment%20listing*/}

                <p> <a href="https://www.google.com/maps/place/Shudhham+by+TANISH+ENTERPRISES/@22.7522076,75.9072297,16.32z/data=!4m6!3m5!1s0x3962e34683f4d993:0xaa8d0b229d2271d0!8m2!3d22.7544968!4d75.9119763!16s%2Fg%2F11y9b5zv2f?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D">Address: Building, 15, MR 1, near medihub clinic, <br />
                Mahalaxmi Nagar, Indore, Madhya Pradesh 452010</a> </p>
            </div>
        </div>
       
        <div class="social-links">
            <a href="#" id="link_icon1"><FaFacebook size={28} /></a>
            <a href="#" id="link_icon2"><IoLogoInstagram  size={24} /></a>
            <a href="#" id="link_icon3"><FaTwitter size={24}/></a>
            <a href="#" id="link_icon4"><IoLogoWhatsapp size={28} /></a>
        </div>
        <div class="copyright">
            &copy; 2025 Shudhham. All rights reserved.
        </div>
    </footer>

    <a id="top_arrow" href="#hero_section"><div id="topscroll">
      <FaArrowUp size={24}/>
    </div></a>
      
    </>
  );
}

export default Home;

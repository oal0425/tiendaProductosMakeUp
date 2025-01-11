import Hero from '../components/Hero/Hero'
import shapes from "../assets/images/shapes.svg";
import paint from "../assets/images/paint.svg";
import code from "../assets/images/code.svg";
import brushLipstick from "../assets/images/brush_lipstick.jpg";
import commonArrow from "../assets/images/arrow.svg";
import customerFace from "../assets/images/face.jpg";
import customerFace2 from "../assets/images/face2.jpg";
import customerFace3 from "../assets/images/face3.jpg";
import arrow from "../assets/images/arrow.svg";
import rightArrow from "../assets/images/rightarrow.svg";
import leftArrow from "../assets/images/leftarrow.svg";
import "../components/Home/Home.css"




function Home() {
    return (
      <>
        <Hero/>
        <main>
          <section className="container about">
              <h2 className="subtitle"> Los mejores productos de Belleza en un solo lugar</h2>
              <p className="about_paragraph"> Lo mejor de todas las marcas que fabrican sus productos con los mejores materiales libres de agentes nocivos.</p>
              <div className="about__main">
                  <article className="about__icons">
                      <img src={shapes} alt="shapes_icon" className="about__icon"/>
                      <h3 className="about__title"> Mejores combinaciones de productos</h3>
                      <p className="about__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim at molestias voluptas inventore.</p>
                  </article>
                  <article className="about__icons">
                      <img src={paint} alt="paint_icon" className="about__icon"/>
                      <h3 className="about__title"> Elementos para maquillar</h3>
                      <p className="about__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim at molestias voluptas inventore.</p>
                  </article>
                  <article className="about__icons">
                      <img src={code} alt="code_icon" className="about__icon"/>
                      <h3 className="about__title"> Visita nuestro catalogo web y cursos</h3>
                      <p className="about__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim at molestias voluptas inventore.</p>
                  </article>
              </div>
          </section>

          <section className="knowledge">
            <div className="knowledge__container container">
                <div className="knowledge_texts">
                    <h2 className="subtitle"> La mejor tienda de maquillaje, aprovecha ahora!</h2>
                    <p className="knowledge__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis commodi maxime atque neque magnam, vitae omnis est dicta exercitationem id! Reiciendis culpa sunt atque tempora magni velit adipisci odit dicta.</p>
                    <a href="#" className="cta"> Entra a la tienda</a>
                </div>

                <figure className="knowledge__picture">
                    <img src={brushLipstick} alt="" className="knowledge__img"/>
                </figure>

            </div>
          </section>

          <section className="price container">
                <h2 className="subtitle"> Obten el combo perfecto para maquillarte</h2>

                <div className="price__table">
                    <div className="price__element">
                        <p className="price__name"> Flexbox</p>
                        <h3 className="price__price"> Free</h3>

                        <div className="price__items">
                            <p className="price__features"> Flexbox</p>
                            <p className="price__features">Layout</p>
                            <p className="price__features">Responsibe</p>
                        </div>

                        <a href="#" className="price__cta"> Comienza ya</a>
                    </div>
                
                
                
                    <div className="price__element price__element--best">
                        <p className="price__name"> Grid</p>
                        <h3 className="price__price"> $30 / mes</h3>
        
                        <div className="price__items">
                            <p className="price__features">Grid</p>
                            <p className="price__features">Implicit Grid</p>
                            <p className="price__features">Responsive</p>
                        </div>
        
                        <a href="#" className="price__cta"> Comienza ya</a>
                    </div>
                

                
                    <div className="price__element">
                        <p className="price__name"> Animations </p>
                        <h3 className="price__price"> $40 / mes</h3>
        
                        <div className="price__items">
                            <p className="price__features">Animation</p>
                            <p className="price__features">Transition</p>
                            <p className="price__features">Render Website</p>
                        </div>
                        <a href="#" className="price__cta"> Comienza ya</a>
                    </div>
                </div>

            </section>



            <section className="testimony">
                <div className="testimony__container container">
                    <img src={leftArrow} alt="left_arrow" className="testimony__arrow" id="before"/>
                    <section className="testimony__body testimony__body--show" data-id="1">
                        <div className="testimony__texts">
                            <h2 className="subtitle"> Maria la del barrio <span className="testimony__course"> Cliente de Bellezas desde 1810</span></h2>
                            <p className="testimony__review"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur molestiae recusandae corrupti quo, consequatur ratione at repellat aperiam facere deleniti, neque reprehenderit nostrum aliquam illo accusantium numquam placeat aspernatur, consectetur vel facilis laudantium excepturi porro a! Omnis nihil numquam nemo nostrum porro eum ipsam dolore deleniti quas hic, quia vel praesentium distinctio eos obcaecati culpa suscipit aperiam fugiat. Soluta cumque eligendi dolorum repudiandae magnam quae dolor sint aspernatur minima.</p>
                        </div>
                        <figure className="testimony__picture">
                            <img src={customerFace} alt="customerFace" className="testimony__img"/>
                        </figure>
                    </section>

                    <section className="testimony__body" data-id="2">
                        <div className="testimony__texts">
                            <h2 className="subtitle"> Betty Ecomoda <span className="testimony__course"> Cliente de Bellezas desde 2000</span></h2>
                            <p className="testimony__review"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur molestiae recusandae corrupti quo, consequatur ratione at repellat aperiam facere deleniti, neque reprehenderit nostrum aliquam illo accusantium numquam placeat aspernatur, consectetur vel facilis laudantium excepturi porro a! Omnis nihil numquam nemo nostrum porro eum ipsam dolore deleniti quas hic, quia vel praesentium distinctio eos obcaecati culpa suscipit aperiam fugiat. Soluta cumque eligendi dolorum repudiandae magnam quae dolor sint aspernatur minima.</p>
                        </div>
                        <figure className="testimony__picture">
                            <img src={customerFace2} alt="customerFace2" className="testimony__img"/>
                        </figure>
                    </section>

                    <section className="testimony__body" data-id="3">
                        <div className="testimony__texts">
                            <h2 className="subtitle"> Nicolas Bumbasaurio <span className="testimony__course"> Cliente de Bellezas desde 2000</span></h2>
                            <p className="testimony__review"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur molestiae recusandae corrupti quo, consequatur ratione at repellat aperiam facere deleniti, neque reprehenderit nostrum aliquam illo accusantium numquam placeat aspernatur, consectetur vel facilis laudantium excepturi porro a! Omnis nihil numquam nemo nostrum porro eum ipsam dolore deleniti quas hic, quia vel praesentium distinctio eos obcaecati culpa suscipit aperiam fugiat. Soluta cumque eligendi dolorum repudiandae magnam quae dolor sint aspernatur minima.</p>
                        </div>
                        <figure className="testimony__picture">
                            <img src={customerFace3} alt="customerFace3" className="testimony__img"/>
                        </figure>
                    </section>

                    <img src={rightArrow} alt="right_arrow" className="testimony__arrow" id="next"/>
                </div>
            </section>


            <section className="questions container">
                <h2 className="subtitle">Preguntas Frecuentes</h2>
                <p className="questions__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum repudiandae natus? Nam distinctio a cum aliquid, sed blanditiis suscipit.</p>

                <section className="questions__container">
                    <article className="questions__padding">
                        <div className="questions__answer">
                            <h3 className="questions__title">
                                ¿Cómo puedo comprar mis productos en esta tienda?
                                <span className="questions__arrow">
                                    <img src={commonArrow} alt="commonArrow" className="questions__img"/>
                                </span>
                            </h3>

                            <p className="questions__show">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum in veritatis est excepturi, rerum dolore nisi reprehenderit consequuntur consectetur culpa inventore. Doloribus temporibus, beatae, laudantium impedit nisi, quia ducimus ipsam vero illum autem deleniti magnam amet? Eum cumque quibusdam velit. Distinctio et sit accusantium voluptatum nostrum omnis, architecto deserunt praesentium eveniet excepturi sequi expedita repudiandae porro eum, perspiciatis numquam? Numquam voluptatem veniam tenetur. Ab iusto ducimus harum quis ratione. Provident, odio, nihil ex explicabo officia iste soluta fuga impedit voluptatibus temporibus numquam ipsum! Laborum beatae fugit voluptatum culpa, quaerat rem molestias, vero commodi, omnis eaque reiciendis? Atque qui minus nisi. Ab esse ullam quibusdam quia porro ducimus, inventore totam corporis deleniti animi aliquid id dolorum quis nulla in magnam illum!</p>

                        </div>
                    </article>

                    <article className="questions__padding">
                        <div className="questions__answer">
                            <h3 className="questions__title">
                                ¿Hacen envios gratis?
                                <span className="questions__arrow">
                                    <img src={arrow} alt="commonArrow" className="questions__img"/>
                                </span>
                            </h3>

                            <p className="questions__show">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum in veritatis est excepturi, rerum dolore nisi reprehenderit consequuntur consectetur culpa inventore. Doloribus temporibus, beatae, laudantium impedit nisi, quia ducimus ipsam vero illum autem deleniti magnam amet? Eum cumque quibusdam velit. Distinctio et sit accusantium voluptatum nostrum omnis, architecto deserunt praesentium eveniet excepturi sequi expedita repudiandae porro eum, perspiciatis numquam? Numquam voluptatem veniam tenetur. Ab iusto ducimus harum quis ratione. Provident, odio, nihil ex explicabo officia iste soluta fuga impedit voluptatibus temporibus numquam ipsum! Laborum beatae fugit voluptatum culpa, quaerat rem molestias, vero commodi, omnis eaque reiciendis? Atque qui minus nisi. Ab esse ullam quibusdam quia porro ducimus, inventore totam corporis deleniti animi aliquid id dolorum quis nulla in magnam illum!</p>

                        </div>
                    </article>

                    <article className="questions__padding">
                        <div className="questions__answer">
                            <h3 className="questions__title">
                                ¿Son naturales los productos de la tienda?
                                <span className="questions__arrow">
                                <img src={arrow} alt="commonArrow" className="questions__img"/>
                                </span>
                            </h3>

                            <p className="questions__show">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum in veritatis est excepturi, rerum dolore nisi reprehenderit consequuntur consectetur culpa inventore. Doloribus temporibus, beatae, laudantium impedit nisi, quia ducimus ipsam vero illum autem deleniti magnam amet? Eum cumque quibusdam velit. Distinctio et sit accusantium voluptatum nostrum omnis, architecto deserunt praesentium eveniet excepturi sequi expedita repudiandae porro eum, perspiciatis numquam? Numquam voluptatem veniam tenetur. Ab iusto ducimus harum quis ratione. Provident, odio, nihil ex explicabo officia iste soluta fuga impedit voluptatibus temporibus numquam ipsum! Laborum beatae fugit voluptatum culpa, quaerat rem molestias, vero commodi, omnis eaque reiciendis? Atque qui minus nisi. Ab esse ullam quibusdam quia porro ducimus, inventore totam corporis deleniti animi aliquid id dolorum quis nulla in magnam illum!</p>

                        </div>
                    </article>
                </section>
            </section>

            <section className="questions__offer">
                <h2 className="subtitle">Estas listo para cambiar tu vida con nuestra tienda?</h2>
                <p className="questions__copy">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, iure error. Dolore officia facilis nisi! Quos, aspernatur. Harum quod sapiente odio quidem quam eius? Veniam a amet est minus libero.
                </p>
                <a href="#" className="cta">Unete ahora!</a>
            </section>

        </main>
        
        
      </>
      
  )
  }
  
  export default Home;
  
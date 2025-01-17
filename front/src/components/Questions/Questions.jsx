import arrow from "../../assets/images/arrow.svg";
import commonArrow from "../../assets/images/arrow.svg";
import "./questionsHome.css";
function questions(){
    return(
        <>
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
        </>
    )
}

export default questions;
import brushLipstick from "../../assets/images/brush_lipstick.jpg";
import "./knowledgeHome.css";
function knowledge(){
    return(
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
    )
}

export default knowledge;
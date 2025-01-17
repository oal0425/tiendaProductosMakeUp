import shapes from "../../assets/images/shapes.svg";
import paint from "../../assets/images/paint.svg";
import code from "../../assets/images/code.svg";
import "./acercadelsitio.css";

function acercaDelSitio(){
    return(
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
    )
}

export default acercaDelSitio;
import "./priceHome.css";
function price(){
    return(
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
    )
}

export default price;
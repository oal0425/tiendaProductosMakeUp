import customerFace from "../../assets/images/face.jpg";
import customerFace2 from "../../assets/images/face2.jpg";
import customerFace3 from "../../assets/images/face3.jpg";
import rightArrow from "../../assets/images/rightarrow.svg";
import leftArrow from "../../assets/images/leftarrow.svg";
import "./testimonyHome.css";


function testimony (){
    return(
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
    )
}

export default testimony;
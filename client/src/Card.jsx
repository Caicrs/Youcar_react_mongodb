import "./assets/styles/style.css"
import Axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

function Card () {

    const [cars,setCars] = useState([])

    useEffect(()=>{
        Axios.get("http://localhost:3001/").then((response)=>{
            setCars(response.data)
        })
    },[])

           
  
    return(
            <>

            {cars.map((carros,index) => 

                 <div className="card_car" key={`carListItem_${index}`} >
                
           

                      

                    <img src={carros.foto}  className="img-config"/>
                        
                    <div className="title_and_id_box">
                        <h3>{carros.modelo}</h3>
                        <h4 className="car_id">#{index + 1}</h4>
                    </div>

                        <div className="description">
                            {carros.descricao}
                        </div>

                            <div className="year_and_km_box">
                                <h3 className="year">{carros.ano}</h3>
                                <h3 className="km">{carros.km} km</h3>
                            </div>

                         <div className="line"></div>

                            <div className="price_box">
                                
                                <div className="price">
                                    R$ {carros.preco}
                                </div>
                            </div>
                               
                                <div className="details">
                                    <div type="button"  className="btn-edit">
                                         <Link to={`/details/${carros._id}`} ><div className="text-btn"  >Detalhes</div></Link> 
                                    </div>
                                </div>
                                    
                                    
                    
                                <form className="card_buttons ">
                                   
                                    
                                    <div type="button" className="btn-edit"> 
                                     <Link to={`/editcar/${carros._id}`} ><div className="text-btn">Editar</div></Link>
                                    </div>

                                    


                                </form>



                </div>

                

            )}

            </>
    )
}

export default Card;

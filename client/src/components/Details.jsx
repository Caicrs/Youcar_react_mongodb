import "../assets/styles/style.css"
import "../assets/styles/details.css"
import Navbar from '../components/Navbar'
import Axios from "axios"
import { Link } from "react-router-dom"
import { useState,useEffect } from "react"

const Details = () =>{

    const [carId,setCarId] = useState([])

    useEffect(()=>{
        var url_pre = window.location.href;
        console.log(url_pre)
        var url = url_pre.slice(30)
       
        Axios.get(`http://localhost:3001/details/${url}`).then((response)=>{
            setCarId(response.data[0])
    
        })
    },[])

     const deleteCar = (id) => {
            Axios.delete(`http://localhost:3001/delete/${id}`)
            }

    return(
        <>  
        <Navbar/>
            <div className="details_container">
                 <img src={carId.foto}  className="img-config"></img>

                <div className="title_and_id_box">
                        <h3>{carId.modelo}</h3>
                        <h4 className="car_id"></h4>
                    </div>

                    <div className="description desc">
                            {carId.descricao}
                        </div>

                            <div className="year_and_km_box">
                                <h3 className="year">{carId.ano}</h3>
                                <h3 className="km">{carId.km} km</h3>
                            </div>

                         <div className="line"></div>

                            <div className="price_box">
                                
                                <div className="price">
                                    R$ {carId.preco}
                                </div>
                            </div>

                            <div type="button" className="btn-edit"> 
                                    <Link to="/"><div onClick={() => deleteCar(carId._id)} className="text-btn"  >Deletar</div></Link>
                                    </div>


            </div>
        </>
    )
}
export default Details ;
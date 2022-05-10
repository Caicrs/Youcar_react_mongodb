import { useState,useEffect} from "react"
import { Link } from "react-router-dom"
import Axios from 'axios'
import "../assets/styles/style.css"
import "../assets/styles/newcar.css"
import Navbar from '../components/Navbar'





const Newcar = () => {

 

     const Update = () => {

        

         // Nao ta chegando e armazzenando os do banco de dados
            const[myid,setMyId] =useState([])
            const [modelo,setModelo] = useState([])
            const [ano,setAno] = useState('')
            const [km,setKm] = useState('')
            const [descricao,setDescricao] = useState('')
            const [foto,setFoto] = useState('')
            const [preco,setPreco] = useState('')

            useEffect(()=>{
                var url_pre = window.location.href;
                console.log(url_pre)
                var url = url_pre.slice(30)
            
                Axios.get(`http://localhost:3001/details/${url}`).then((response)=>{
                    setMyId(response.data[0]._id)
                    setModelo(response.data[0].modelo)
                    setAno(response.data[0].ano)
                    setKm(response.data[0].km)
                    setDescricao(response.data[0].descricao)
                    setFoto(response.data[0].foto)
                    setPreco(response.data[0].preco)
 
                })
            },[])
            const updateCar = (id) => {
            
            Axios.put("http://localhost:3001/update",
            {id:id,modelo:modelo,ano:ano,km:km,descricao:descricao,foto:foto,preco:preco})

            }

            return(
                    <>
                        <Navbar/>
                        <div class="container">
                        
                     
                        
                            <div class="form_box">
                                

                                    
                                    <form method="put">
                                    
                                            
                                            <ul><input className="inputcar" type="text" onChange={(event) => {setModelo(event.target.value);}} placeholder={modelo}  /> </ul>  
                                            <ul><input className="inputcar" type="text" onChange={(event) => {setAno(event.target.value);}} placeholder={ano} name="nome"  /> </ul>  
                                            <ul><input className="inputcar" type="text" onChange={(event) => {setKm(event.target.value);}} placeholder={km} name="nome" /> </ul>   
                                            <ul><input className="inputcar" type="text" onChange={(event) => {setDescricao(event.target.value);}} placeholder={descricao}name="nome" /> </ul>  
                                            <ul><input className="inputcar" type="text" onChange={(event) => {setFoto(event.target.value);}} placeholder={foto} name="nome" /> </ul>  
                                            <ul><input className="inputcar" type="text" onChange={(event) => {setPreco(event.target.value);}} placeholder={preco} name="nome" /> </ul>  
                                            
                                            
                                            
                                                <ul><Link to="/">
                                                <button className="btn-edit btn-2" onClick={() => updateCar(myid)} type="submit">Update</button>
                                                </Link>
                                                    
                                                    
                                                    </ul>
                                            
                                            
                                            
                                    
                                    
                                    </form>

                            
                            </div>

                        </div>
                    </>
                )
        }

const Create = () => {

    const [modelo,setModelo] = useState('')
    const [ano,setAno] = useState('')
    const [km,setKm] = useState('')
    const [descricao,setDescricao] = useState('')
    const [foto,setFoto] = useState('')
    const [preco,setPreco] = useState('')

     const addCar = () => {
        Axios.post("http://localhost:3001/insert",
        {modelo:modelo,ano:ano,km:km,descricao:descricao,foto:foto,preco:preco}
        
        )

    }
            return(
                    <>
                        <Navbar/>
                        <div class="container">
                        
                 
                        
                            <div class="form_box">
                                

                                    
                                    <form action="http://localhost:3000/" method="put">
                                    
                                            
                                            <ul><input className="inputcar" type="text" onChange={(event) => {setModelo(event.target.value);}} placeholder="Modelo" name="nome" /> </ul>  
                                            <ul><input className="inputcar" type="text" onChange={(event) => {setAno(event.target.value);}} placeholder="Ano" name="nome" /> </ul>  
                                            <ul><input className="inputcar" type="text" onChange={(event) => {setKm(event.target.value);}} placeholder="Km" name="nome" /> </ul>   
                                            <ul><input className="inputcar" type="text" onChange={(event) => {setDescricao(event.target.value);}} placeholder="Descricao" name="nome" /> </ul>  
                                            <ul><input className="inputcar" type="text" onChange={(event) => {setFoto(event.target.value);}} placeholder="Foto" name="nome" /> </ul>  
                                            <ul><input className="inputcar" type="text" onChange={(event) => {setPreco(event.target.value);}} placeholder="Preco" name="nome" /> </ul>  
                                            
                                            
                                            
                                                <ul><Link to="/">
                                                <button className="btn-edit btn-2" onClick={addCar} type="submit">Send</button>
                                                </Link>
                                                    
                                                    
                                                    </ul>
                                            
                                            
                                            
                                    
                                    
                                    </form>

                            
                            </div>

                        </div>
                    </>
                )
 }


   return(
        <>
         {window.location.href === "http://localhost:3000/newcar" ? <Create/> : <Update/> }
        </>

   )



       


   

   

}


export default Newcar ;
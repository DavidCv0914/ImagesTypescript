import { AiFillCloseCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useState,useEffect,useRef } from "react";
import { getImages,createImage,updateImage,deleteImage } from "./api/api";
import './App.css'

export interface images{
		id?: number,
		title: string,
		description: string,
		img: string,
		create_img?: string
}



function App() {
  const lolbel = useRef<HTMLLabelElement>(null);
  const [images,setImages] = useState<images[]>([]);
  const [id,setId] = useState<number>();
  const [newImages,setNewImages] = useState<images>({
    title:"",
    description:"",
    img:""
  });
  const [updateImages,setUpdateImages] = useState<images>({
    title:"",
    description:"",
    img:""
  });

  const handleOnChange=(e: React.ChangeEvent<HTMLInputElement>) => {
    setNewImages({...newImages, [e.target.name]:e.target.value})
  }

  const openModal = (id?:number) =>{
    console.log(id);
    setId(id)
    const element = lolbel.current;
    if (element) {
      element.click();
    }
  }

  const handleOnChangeUpdate=(e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateImages({...updateImages, [e.target.name]:e.target.value})
  }

  const handleSubmit=async() => {
    const response = await createImage(newImages)
    console.log(response.data);
    
  }

  const handleSubmitUpdate=async() => {
    const response = await updateImage(id,updateImages)
    console.log(response.data);
    const element = lolbel.current;
    if (element) {
      element.click();
    }
    if (response.data=="update") {
      window.location.reload();
    }
  }

  const deleteImage1= async(idParam?:number) => {
    const response = await deleteImage(idParam);
    console.log(response);
    if (response.data=="delete") {
      window.location.reload();
    }
    
  }

  useEffect(()=>{
    async function loadImages() {
      const response = await getImages();
      setImages(response.data)
    }
    loadImages()
  },[])

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2>CREA TU IMAGEN</h2>
      <input name="title" type="text" placeholder="titulo" onChange={handleOnChange}/>
      <input name="description" type="text" placeholder="descripcion" onChange={handleOnChange}/>
      <input name="img" type="text" placeholder="url" onChange={handleOnChange}/>
      <button>Guardar</button>
    </form>
      <section>
        
        {images.map((image)=>(
          <div className="images" key={image.id}>
            <img src={image.img} alt="no cargo la imagen" />
            <h4>{image.title.toUpperCase()}</h4>
            <p>{image.description}</p>
            <span style={{background:"#009f03"}} onClick={() => openModal(image.id)}>Actualizar</span>  
            <span onClick={() => deleteImage1(image.id)}>Eliminar</span>
          </div>
        ))}
     

      <div className="boton2-modal">
            <label htmlFor="btn2-modal" id="lolbel" ref={lolbel}>
              Abrir Modal
            </label>
          </div>
          <input type="checkbox" id="btn2-modal" />
          <div className="container2-modal">
            <div className="content2-modal">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>Actualizar imagen</h2>{" "}
                <span>
                  <label htmlFor="btn2-modal">
                    <IconContext.Provider value={{ size: "30px" }}>
                      {" "}
                      <div>
                        {" "}
                        <AiFillCloseCircle />
                      </div>
                    </IconContext.Provider>
                  </label>
                </span>
              </div>
          <div className="input-modal">
              <input name="title" type="text" placeholder="titulo" onChange={handleOnChangeUpdate}/>
              <input name="description" type="text" placeholder="descripcion" onChange={handleOnChangeUpdate}/>
              <input name="img" type="text" placeholder="url" onChange={handleOnChangeUpdate}/>
              <div className="btn2-cerrar">
          </div>
                <label className="actualizar" style={{background:"#009f03"}}  onClick={handleSubmitUpdate}>
                  Actualizar
                </label>
              </div>
            </div>
            <label htmlFor="btn2-modal" className="cerrar2-modal"></label>
          </div>
          
     </section>
     </>
  )
}

export default App

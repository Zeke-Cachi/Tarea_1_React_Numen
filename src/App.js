import './App.css';
import CardArray from './components/CardArray';



const db = [
  {
    id: "1",
    img: "./img/DSC_2793-1-scaled-e1656688981376.jpg",
    logo: "./img/heart.svg",
    precio: "$ 1.896",
    envio: "",
    detalle: "Batidora industrial de 24 kilotones de capacidad"
  },
  {
    id: "2",
    img: "./img/raqueta.jpg",
    logo: "./img/heart.svg",
    precio: "$ 12.468",
    envio: "Envío gratis",
    detalle: "Raqueta de tenis profesional, la mejor calidad"
  },
  {
    id: "3",
    img: "./img/guitarra.jpg",
    logo: "./img/heart.svg",
    precio: "$ 98.456",
    envio: "",
    detalle: "Guitarra eléctrica Squier roja"
  },
  {
    id: "4",
    img: "./img/notebook.jpg",
    logo: "./img/heart.svg",
    precio: "$ 204.569",
    envio: "Envío gratis",
    detalle: "Notebook Lenovo A3443SJG 8 GB RAM 5TB Memoria"
  },
  {
    id: "5",
    img: "./img/teclado.jpg",
    logo: "./img/heart.svg",
    precio: "$ 18.999",
    envio: "",
    detalle: "Teclado con colorcitos LED, muy lindo"
  },
  {
    id: "6",
    img: "./img/zapatillas.jpg",
    logo: "./img/heart.svg",
    precio: "$ 11.999",
    envio: "",
    detalle: "Zapatillas New Balance 345 para niños color marrón"
  },
  {
    id: "7",
    img: "./img/smartv.jpg",
    logo: "./img/heart.svg",
    precio: "$ 124.569",
    envio: "Envío gratis",
    detalle: "Smart TV Samsung 55' primera calidad 4K"
  },

]

function App() {
  return (
    <body style={appStyle}>
      <>
        <CardArray 
          data={db}/>
      </>
    </body>
  );
}

export default App;

const appStyle = {
  margin: "0",
  padding: "10rem 0 0 0",
  height: "100vh",
  minHeight: "100%",
}
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row  mt-3'> {/* ROW ES EL RECUADRO DEL TITULO, POR LO QUE EL 
        MT3 VA EN EL ROW YA QUE FUNCIONA DE ARRIBA HACIA ABAJO */}
          <div className='col-lg-12'>
            <h2>Pagina de calculo de remuneraciones</h2>
          </div>
        </div>
      </div>

      
      {/* CREACION DE OTRA COLUMNA CON DOS FILAS SEPARADAS */}
        <div className='row  mt-3'>{/* FILA NUEVA*/}
          <div className='col-lg-6'>{/* PRIMERA COLUMNA*/}
            <h2>Datos Sueldo Bruto</h2>
            <br></br>
            <label htmlFor='Sueldo Bruto'>Ingrese sueldo bruto</label>
            <input type='number' id='sueldo' placeholder='Ingrese sueldo bruto'></input>
          </div>
          <div className='col-lg-6'>{/* SEGUNDA COLUMNA */}
            <h2>Resultados</h2>
          </div>
        </div>
      
    </div>
  );
}

export default App;

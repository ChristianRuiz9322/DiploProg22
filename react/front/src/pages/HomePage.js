import React from 'react';

const HomePage = (props) => {
    return (
        <main className='holder'>
            <div className='homeimg'>
                <img src='' alt='' />
            </div>
            <div className='columnas'>
                <div className='bienvenidos'>
                    <h2>bienvenidos</h2>
                    <p>lorem 

                    </p>
                    <p>
                        lorem
                    </p>
                </div>
                <div className='testimonios'>
                    <h2>Testimonios</h2>
                    <div className='testimonio'>
                        <span class="cita">Simplemente excelente</span>
                        <span class="autor">Juan Perez - Zapatos.com</span>
                    </div>
                </div>
            </div>
        </main>
        );
}

export default HomePage;
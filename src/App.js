import React from 'react';
import TelaHome from './TelaHome';
import TelaRecall from './TelaRecall';


export default function App() {
    const [tela, setTela] = React.useState(true);

    return(
        <>
            {tela ? 
            <div className='home-page'>
                <TelaHome />
                <button onClick={() => setTela(false)}>Iniciar Recall</button>
            </div>
            : <TelaRecall />}
        </>
    )
}


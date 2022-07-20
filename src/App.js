export default function App() {
    return(
        // <div className="home-page">
        //     <img src="assets/img/logo.png"/>
        //     <h1>ZapRecall</h1>
        //     <button>Iniciar Recall</button>
        // </div>
    <div>
        <div className="header">
            <img src="assets/img/logo-pequeno.png" />
            <h1>ZapRecall</h1>
        </div>
        <div className="flash-cards">
        <div className="flash-card-question">
            <h1>O que é JSX?</h1>
            <img src="assets/img/setinha.png" />
        </div>
        <div className="flash-card-options">
            <h1>JSX é uma sintaxe para escrever HTML dentro do JS</h1>
            <div className="button-options">
                <button>Não lembrei</button>
                <button>Quase não lembrei</button>
                <button>Zap!</button>
            </div>
        </div>
        <div className="flash-card">
            <h1>Pergunta 3</h1>
            <ion-icon name="play-outline"></ion-icon>
        </div>
        <div className="flash-card">
            <h1>Pergunta 4</h1>
            <ion-icon name="play-outline"></ion-icon>
        </div>
        <div className="flash-card">
            <h1>Pergunta 5</h1>
            <ion-icon name="play-outline"></ion-icon>
        </div>
        <div className="flash-card">
            <h1>Pergunta 6</h1>
            <ion-icon name="play-outline"></ion-icon>
        </div>
        <div className="flash-card">
            <h1>Pergunta 7</h1>
            <ion-icon name="play-outline"></ion-icon>
        </div>
        <div className="flash-card">
            <h1>Pergunta 8</h1>
            <ion-icon name="play-outline"></ion-icon>
        </div>
        </div>

        {/* <footer>
            <p>1/4 CONCLUÍDOS</p>
            <div className="icon-answers">
            <ion-icon id="zap" name="checkmark-circle"></ion-icon>
            <ion-icon id="quase-zap" name="help-circle"></ion-icon>
            <ion-icon id="não-lembrei" name="close-circle"></ion-icon>
            <ion-icon id="zap" name="checkmark-circle"></ion-icon>
            </div>
        </footer> */}

        <footer className="result-msg">
            <p>
                <img src="assets/img/party.png" />
                <span>Parabéns!</span>
            </p>
            <p>Você não esqueceu de nenhum flashcard!</p>
            <p>1/4 CONCLUÍDOS</p>
            <div className="icon-answers">
            <ion-icon id="zap" name="checkmark-circle"></ion-icon>
            <ion-icon id="quase-zap" name="help-circle"></ion-icon>
            <ion-icon id="não-lembrei" name="close-circle"></ion-icon>
            <ion-icon id="zap" name="checkmark-circle"></ion-icon>
            </div>
        </footer>


    </div>
    )
}


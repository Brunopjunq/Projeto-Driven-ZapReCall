import Header from "./Header";
import Footer from "./Footer";import Cards from "./Cards";
import { useState } from "react";
;

export default function TelaRecall() {
    const [answers, setAnswers] = useState(0);
    const [rightAnswers, setRightAnsewrs] = useState(0);
    const [numQts, setNumQts] = useState(0);
    const [IconsAnswer] = useState([]);

    return (
        <div>
            <Header />
            <Cards answers={answers} setAnswers={setAnswers} rightAnswers={rightAnswers} setRightAnsewrs={setRightAnsewrs} setNumQts={setNumQts} IconsAnswer={IconsAnswer}/>
            {/* <div className="flash-cards">
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
                <div className="flash-card-result zap">
                    <h1>Pergunta 3</h1>
                    <ion-icon id="zap" name="checkmark-circle"></ion-icon>
                </div>
                <div className="flash-card-result quase-zap">
                    <h1>Pergunta 4</h1>
                    <ion-icon id="quase-zap" name="help-circle"></ion-icon>
                </div>
                <div className="flash-card-result não-lembrei">
                    <h1>Pergunta 5</h1>
                    <ion-icon id="não-lembrei" name="close-circle"></ion-icon>
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
            </div> */}
            <Footer />
        </div>
    )
}
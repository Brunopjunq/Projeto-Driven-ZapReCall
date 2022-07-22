import React from "react";

const cards = [
    {question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript' },
    {question: 'O React é __', answer: 'uma biblioteca JavaScript para construção de interfaces' },
    {question: 'Componentes devem iniciar com __ ', answer: 'letra maiúscula' },
    {question: 'Podemos colocar __ dentro do JSX', answer: 'expressões' },
    {question: 'O ReactDOM nos ajuda __', answer: 'interagindo com a DOM para colocar componentes React na mesma' },
    {question: 'Usamos o npm para __', answer: 'gerenciar os pacotes necessários e suas dependências' },
    {question: 'Usamos props para __', answer: 'passar diferentes informações para componentes ' },
    {question: 'Usamos estado (state) para __', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' }
];

cards.sort(random);

function random() {
    return Math.random() - 0.5;
}


export default function Cards(props) {
    const {setNumQts, answers, setAnswers, rightAnswers, setRightAnsewrs, IconsAnswer} = props

    setNumQts(cards.length);

    return (
        <div className="flash-cards">
            {cards.map((cards, index) => EachCard(cards,index,answers, setAnswers, rightAnswers, setRightAnsewrs, IconsAnswer))}
        </div>
    )

}

function EachCard(cards,index,answers,setAnswers,rightAnswers,setRightAnsewrs,IconsAnswer) {
    const [questionType,setQuestionType] = React.useState('flashcard');

    function CountAnswer(answer) {
        setQuestionType(answer);
        setAnswers(answers+1);

        if(answer === 'não-lembrei') {
            IconsAnswer.push('close-circle');
        }
        else if(answer === 'quase-zap') {
            IconsAnswer.push('help-circle');
            setRightAnsewrs(rightAnswers+1);
        }
        else if (answer === 'zap') {
            IconsAnswer.push('checkmark-circle');
            setRightAnsewrs(rightAnswers+1);
        }
    }

    if (questionType === 'flashcard') {
        return (
            <div onClick={() => setQuestionType('question')} className="flash-card" key={index}>
                    <h1>Pergunta {index+1}</h1>
                    <ion-icon name="play-outline"></ion-icon>
            </div>
        )
    }
    else if(questionType === 'question') {
        return (
            <div className="flash-card-question" key={index}>
                <h1>{cards.question}</h1>
                <img onClick={() => setQuestionType('options')} src="assets/img/setinha.png" />
            </div>
        )

    }
    else if(questionType === 'options') {
        return (
            <div className="flash-card-options" key={index}>
                <h1>{cards.answer}</h1>
                <div className="button-options">
                    <button onClick={() => CountAnswer('não-lembrei')}>Não lembrei</button>
                    <button onClick={() => CountAnswer('quase-zap')}>Quase não lembrei</button>
                    <button onClick={() => CountAnswer('zap')}>Zap!</button>
                </div>
            </div>
        )
    }

    else {

        if(questionType === 'não-lembrei') {
            return (
                <div className="flash-card-result não-lembrei" key={index}>
                    <h1>Pergunta {index+1}</h1>
                    <ion-icon id="não-lembrei" name="close-circle"></ion-icon>
                </div>
            )
        }
        else if(questionType === 'quase-zap') {
            return (
                <div className="flash-card-result quase-zap" key={index}>
                    <h1>Pergunta {index+1}</h1>
                    <ion-icon id="quase-zap" name="help-circle"></ion-icon>
                </div>
            )
        }
        else if(questionType === 'zap') {
            return (
                <div className="flash-card-result zap" key={index}>
                    <h1>Pergunta {index+1}</h1>
                    <ion-icon id="zap" name="checkmark-circle"></ion-icon>
                </div>
            )
        }
    }


}
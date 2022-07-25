export default function Footer(props) {
    const {numQts,answers,rightAnswers,IconsAnswer,} = props
    
    if(numQts === 0 || answers === 0) {
        return (
            <footer>
                <p>{answers}/{numQts} CONCLUÍDOS</p>
            </footer>
        )
    }
    else if(answers < numQts) {
        return (
            <footer>
                <p>{answers}/{numQts} CONCLUÍDOS</p>
                <div className="icon-answers">
                {IconsAnswer.map(icon => ShowIconsResult(icon))}
                </div>
            </footer>
        )
    }
    else {
        if(rightAnswers < numQts) {
            return (
                <footer className="result-msg">
                    <p>
                        <img src="assets/img/sad.png" />
                        <span>Putz...</span>
                    </p>
                    <p>Ainda faltam alguns... Mas não desanime!</p>
                    <p>{rightAnswers}/{numQts} CONCLUÍDOS</p>
                    <div className="icon-answers">
                        {IconsAnswer.map(icon => ShowIconsResult(icon))}
                    </div>
                </footer>
            )
        }
        else {
            return (
                <footer className="result-msg">
                    <p>
                        <img src="assets/img/party.png" />
                        <span>Parabéns!</span>
                    </p>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                    <p>{rightAnswers}/{numQts} CONCLUÍDOS</p>
                    <div className="icon-answers">
                        {IconsAnswer.map(icon => ShowIconsResult(icon))}
                    </div>
                </footer>
            )
        }
    }
    
}

function ShowIconsResult (icon) {
    if(icon === 'close-circle') {
        return <ion-icon id="não-lembrei" name="close-circle"></ion-icon>
    }
    else if(icon === 'help-circle') {
        return <ion-icon id="quase-zap" name="help-circle"></ion-icon>
    } 
    else if(icon === 'checkmark-circle') {
        return <ion-icon id="zap" name="checkmark-circle"></ion-icon>
    }
}
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
            <Footer numQts = {numQts} IconsAnswer = {IconsAnswer} rightAnswers = {rightAnswers} answers = {answers}/>
        </div>
    )
}
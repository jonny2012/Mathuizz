import { useState } from "react"
import style from "./easy.module.css"



 export default function EasyContent({setCorectCount, setWrongCount, setTestsCount, change}){
    const [FirstNumber, SetFirstNumber] = useState(Math.floor(Math.random() * (30 - 1) + 1))
    const [SecondNumber, SetSecondNumber] = useState(Math.floor(Math.random() * (30 - 1) + 1))
    const [CorectCount, setCorectCountEasy] = useState(0)
    const [WrongCount, setWrongCountEasy] = useState(0)
    const [TestsCount, setTestsCountEasy] = useState(0)
    let sum = 0
    sum = FirstNumber + SecondNumber

    function checkResult() {
        const input = document.querySelector("#input")
        const box = document.querySelector(".box")
        const corect = document.createElement("div")
        corect.className = "block correct"
        const wrong = document.createElement("div")
        wrong.className = "block wrong"

        if (sum === Number(input.value)) {
            box.appendChild(corect)
            setCorectCountEasy(() => CorectCount + 1)
            setCorectCount(()=> CorectCount +1)
         

        }
        else {
            box.appendChild(wrong)
            setWrongCountEasy(() => WrongCount + 1)
            setWrongCount(()=> CorectCount +1)
        }

    }
    function ChangeRandomNumber() {
        checkResult()
        const input = document.querySelector("#input")
        SetFirstNumber(Math.floor(Math.random() * (30 - 1) + 1))
        SetSecondNumber(Math.floor(Math.random() * (30 - 1) + 1))
        input.value = ''
        input.focus()
        setTestsCountEasy(() => TestsCount + 1)
        setTestsCount(() => TestsCount + 1)
    
    }
  

    return(
        <div className={style.content}>

        <span style={{ fontSize: "70px", color: "#72f4f4" }}>{FirstNumber}</span>
        <span style={{ fontSize: "70px", color: "#72f4f4" }}>+</span>
        <span style={{ fontSize: "70px", color: "#72f4f4" }}>{SecondNumber}</span>
        <span style={{ fontSize: "70px", color: "#72f4f4" }}>=</span>
        <input onKeyDown={(e) => { if (e.key === "Enter") ChangeRandomNumber() }} id="input" className={style.input} type="number" />
        <button className={style.btn} onClick={ChangeRandomNumber}> Next</button>
    </div>
    )
}
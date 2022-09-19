import React, { useContext, useState } from "react"
import { LangContext } from "./contextapi"

export const Section = () => {
    const context = useContext(LangContext)
    const [i, setI] = useState(0)
    const toggle = () => {
            if (i === context.length - 1) {
                setI(0)
            } else {
                setI(i + 1)
            }
    }
    return (
        <div>
            {/* <LangContext.Consumer>
                {value => <h1>{value[i]}</h1>}
            </LangContext.Consumer> */}
            <h1>{context[i]}</h1>
            <button onClick={toggle}>change</button>
        </div>
    )
}
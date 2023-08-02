import { getAllByPlaceholderText } from "@testing-library/react"
import React from "react"

export default function Saludar(props) {
    const {userInfo, saludarFn} = props;
    // const {nombre} = userInfo

    // console.log(props);
    // console.log(userInfo);

    const {enviarSaludo, nombre, apellidos} = props
    console.log(props);

    return(
        <div>
            {/* <button onClick={()=>saludarFn(nombre)}>Saludar</button> */}
            <button onClick={()=>enviarSaludo(nombre, apellidos)}>Saludar</button>
        </div>
    )
}

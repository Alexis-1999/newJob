/**
 * Controlar cuando va a desaparecer
 */

/***
 * Ejemplo de uso del método componenteWillUnmount para componente clase
 * Ejemplo de uso del hooks para componene funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca');
    }

  render() {
    return (
      <div>
        <h1>
            WillUnmount
        </h1>
      </div>
    )
  }
}

export const WillUnMountHook = () => {

    useEffect(() => {
        // Aquí no ponemos nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca');
        };
    }, []);

    return (
        <div>
            <h1>
                WillUnmount
            </h1>
        </div>
    );
}



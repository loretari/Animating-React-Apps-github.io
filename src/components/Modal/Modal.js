import React from 'react';


import './Modal.css';
import Transition from "react-transition-group/esm/Transition";

const modal = (props) => {

    const animationTiming = {
        enter: 400,
        exit: 1000
    }

   return (
       <Transition
           mountOnEnter
           unmountOnExit
           in ={props.show}
           timeout={animationTiming}>
           {state => {
               const cssClasses = [
                   'Modal',
                   state === 'entering'
                   ? 'ModalOpen'
                       : state === 'exiting' ? 'ModalClosed' : null

               ];
               return (
                       <div className= {cssClasses.join(' ')}>
                           <h1>A Modal</h1>
                           <button className= 'Button' onClick={props.closed}>Dismiss</button>
                       </div>
                   )

           }

           }

       </Transition>
   )

}

;

export default modal;
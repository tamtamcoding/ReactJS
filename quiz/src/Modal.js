import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const {isModalOpen, closeModal, correct, questions} = useGlobalContext()
  const percentage = ((correct / questions.length)* 100).toFixed(0)
  const hello = () =>{
    if(percentage <=70){
      return <p>dude, maybe you should try reading more books</p>
    }
    else{
      return <p>dude you know nobody like, nobody like a show off</p>
    }
  }

  return <div className={`${isModalOpen ? 'modal-container isOpen': 'modal-container'}`}>
    <div className="modal-content">
      <h2>
        you finished the quiz!
      </h2>
      <p>you answered {percentage}% of questions correctly</p>
      {hello()}
      
     
      <button className="close-btn" onClick={closeModal}>
        play again
      </button>
    </div>
  </div>
  
}

export default Modal

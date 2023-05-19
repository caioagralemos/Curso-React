import Modal from "../components/modal";
import Botao from "../components/button";
import { useState } from "react";

function ModalPage () {
    const [modalState, setmodalState] = useState(false)
    const handleClick = () => {
        setmodalState(true)
    }
    return(
        <div>
        <Botao onClick={handleClick} primary outline>Modal Button</Botao>
        {modalState && <Modal />}
        </div>
    ) 
}
export default ModalPage
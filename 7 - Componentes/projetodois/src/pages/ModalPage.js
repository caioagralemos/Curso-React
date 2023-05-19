import Modal from "../components/modal";
import Botao from "../components/button";
import { useState } from "react";

function ModalPage() {
    const [modalState, setmodalState] = useState(false)
    const handleClick = () => {
        setmodalState(!modalState)
    }
    const actionBar = (
        <div>
            <Botao primary onClick={handleClick}>Fechar!</Botao>
        </div>
    )
    return (
        <div>
            <Botao onClick={handleClick} primary outline>Modal Button</Botao>
            {modalState && <Modal actionBar={actionBar} handleClick={handleClick}>Esse modal é feito pra testar as tecnicas de modal em React e pode ser fechado clicando no botão ou em qualquer lugar fora do modal.</Modal>}
        </div>
    )
}
export default ModalPage
import ReactDOM from "react-dom"
import { useEffect } from "react"

function Modal({ handleClick, children = "I'm a modal", actionBar }) {
    useEffect(() => {
        document.body.classList.add('overflow-hidden')
        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [])
    return ReactDOM.createPortal( // necessário jogar numa div isolada no html pra que ela sempre possa cubrir a pag inteira
        <div>
            <div onClick={handleClick} className="fixed inset-0 bg-gray-300 opacity-60"></div>
            <div className="fixed inset-40 p-10 bg-white border-black border-2 rounded-xl">
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className="flex justify-end">
                        {actionBar}
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    )
}
export default Modal
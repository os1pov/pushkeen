import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import CloseSVG from '../../assets/svg/CloseSVG'
import './PopupForm.scss'

interface IProps {
    style: {
        display: "none" | "flex"
    }
    setDisplay: any
}

const PopupForm: React.FC<IProps> = ({ style, setDisplay }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [body, setBody] = useState("")

    const { id } = useParams()
    const { createComment } = useActions()

    const closePopup = () => {
        setDisplay("none")
        setName("")
        setEmail("")
        setBody("")
    }

    const onClickButton = () => {
        if (id && email && name && body) {
            createComment(id, {email, name, body})
            closePopup()
        }
    }

    return (
        <div className="popup-form" style={style} onClick={closePopup}>
            <div className="popup-form__background"></div>
            <div className="popup-form__content" onClick={event => event.stopPropagation()}>
                <div className="popup-form__title">
                    <div className="popup-form__title__body">Добавление комментария</div>
                    <div className="popup-form__close" onClick={closePopup}>
                        <CloseSVG />
                    </div>
                </div>
                <div className="popup-form__input__wrapper">
                    <div className="popup-form__input__title">Email</div>
                    <input className="popup-form__input__content" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="popup-form__input__wrapper">
                    <div className="popup-form__input__title">Name</div>
                    <input className="popup-form__input__content" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div className="popup-form__input__wrapper">
                    <div className="popup-form__input__title">Body</div>
                    <textarea className="popup-form__input__content" value={body} onChange={e => setBody(e.target.value)}/>
                </div>
                <div className="popup-form__button" onClick={onClickButton}>Отправить</div>
            </div>
        </div>
    )
}

export default PopupForm
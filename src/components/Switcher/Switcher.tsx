import React, { useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import classNames from 'classnames'
import './Switcher.scss'

const Switcher = () => {
    const [checked, setChecked] = useState<false | true>(false)
    const { version } = useTypedSelector(state => state.settings)
    const { setVersion } = useActions()

    const switcherDefaultClass = classNames("switcher__default", {switcher__active: version === "default"})
    const switcherLargeClass = classNames("switcher__large", {switcher__active: version === "large"})

    const onChangeChecked = () => {
        // ф-ия устанавливает checked и version на противоположное значение
        // когда checked = false, version = "default"
        // когда checked = true, version = "large"

        checked ? setChecked(false) : setChecked(true)
        checked ? setVersion("default") : setVersion("large")
    }

    return (
        <div className="switcher">
            <div
                className={switcherDefaultClass}
                onClick={() => setVersion("default")}
            />
            <label className="slider">
                <input type='checkbox' checked={checked} onChange={onChangeChecked} />
                <div className="slider__line"></div>
                <div className="slider__circle"></div>
            </label>
            <div className={switcherLargeClass}
                 onClick={() => setVersion("large")}
            />
        </div>
    )
}

export default Switcher
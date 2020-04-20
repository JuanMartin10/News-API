import React, { useState } from 'react'

const useSelect = (initialState, options) => {

    const [state, updateState] = useState(initialState)

    const SelectNews = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => updateState(e.target.value)}
        >
            {options.map(elm => (
                <option key={elm.value} value={elm.value}>{elm.label}</option>
            ))}
        </select>
    )
    return [state, SelectNews]
}

export default useSelect

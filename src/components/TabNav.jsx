import React from 'react'

function TabNav (props) {

    const active = (true ? "active " : "")

    return (
        <div className="tabs">
            <ul className="tabs__nav">
                {props.tabs.map((tab) => {
                    const active = (tab === props.selected ? "active " : "")

                    return (
                        <li className="tab__item" key={tab}>
                            <a className={"tab__link " + active} onClick={() => props.setSelected(tab)}>
                                {tab}
                            </a>
                        </li>
                    )
                })}
            </ul>
            {props.children}
        </div>
    )
}

export default TabNav
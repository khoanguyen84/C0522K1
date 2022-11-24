import React, { useState } from "react";

const menus = [
    {
        name: "Home",
        url: "/home"
    },
    {
        name: "Profile",
        url: "/profile"
    },
    {
        name: "Messages",
        url: "/messages"
    },
    {
        name: "Settings",
        url: "/settings"
    },

]
function LeftSide() {
    const [selectMenu, setSelectMenu] = useState("Home");
    const handleSelectMenu = (e, menu) => {
        e.preventDefault();
        setSelectMenu(menu)
    }
    return (
        <div className="list-group" id="list-tab" role="tablist">
            {
                menus.map(menu => (
                    <a className={`list-group-item list-group-item-action ${menu.name === selectMenu ? 'active' : ''}`}
                        key={menu.name}
                        href={menu.url} role="tab" aria-controls="list-home"
                        onClick={(e) => handleSelectMenu(e, menu.name)}
                    >{menu.name}</a>
                ))
            }
        </div>
    )
}

export default LeftSide;
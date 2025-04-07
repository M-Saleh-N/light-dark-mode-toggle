import { useState, useEffect } from "react";
import './toggle.css';

function Toggle(){
    const [isToggled, setIsToggled] = useState(false);

    const toggle = () => {
        setIsToggled(!isToggled);
};

useEffect(() => {
    // Toggle body classes for dark and light mode
    if (isToggled) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }
}, [isToggled]);


return(
    <div className="toggle">
        <div className="toggle-cont">Welcome to my colour change Toggle web site</div>
         <button onClick={toggle}>{isToggled ? "Switch to Light Mode" : "Switch to Dark Mode"}</button>
    </div>
);
    

}

export default Toggle;



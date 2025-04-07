import { useState, useEffect } from "react";
import './toggle.css';

function toggle(){
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
        <button onClick={toggle}>Toggle</button>

    </div>
)
    

}

export default toggle;



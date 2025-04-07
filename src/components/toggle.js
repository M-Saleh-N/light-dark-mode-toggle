import { useState, useEffect } from "react";
import './toggle.css';

function toggle(){
    const [isToggled, setIsToggled] = useState(false);

    const toggle = () => {
        setIsToggled(!isToggled);
};

useEffect (() => {
    document.body.style.backgroundColor = isToggled ? 'black' : 'white';
    document.body.style.color = isToggled ? 'white' : 'black';
    }, [isToggled]);
}


}
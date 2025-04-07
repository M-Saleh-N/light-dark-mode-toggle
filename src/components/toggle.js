import { useState, useEffect } from "react";
import './toggle.css';

function toggle(){
    const [isToggled, setIsToggled] = useState(false);

    const toggle = () => {
        setIsToggled(!isToggled);
}
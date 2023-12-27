import { useState } from "react";


const geceModuAc = (lightMode) => {
    const [theme, setTheme] = useState(lightMode);

    const handleTheme = (themeValue) => {
        setTheme(themeValue);
    }

    return [theme, handleTheme];
}

export default geceModuAc;
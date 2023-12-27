import { useState } from "react"


const localStorageKullan = (key, initVal = false) => {
    const storedVal = localStorage.getItem(key);


    const [val, setVal] = useState(JSON.parse(storedVal) || initVal);

    const handleVal = (newVal) => {
        setVal(newVal);
        localStorage.setItem(key, newVal);
    }

    return [val, handleVal];
}

export default localStorageKullan;
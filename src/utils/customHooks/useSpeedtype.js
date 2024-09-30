import { useEffect } from "react";
import { useState } from "react";

const useSpeedtype = (data,speed) => {

    const [word, setWord] = useState('');
    const [counter, setCounter] = useState(0);
    const [is_increasing, setIs_Increasing] = useState(true);


    //this will add the characters
    const extendWord = () => {
        const timeout = setTimeout(() => {

            setWord(data[counter].slice(0, word.length + 1));
            if (word === data[counter]) {
                setIs_Increasing(false);
            }
            clearTimeout(timeout);
        }, speed);

    }

    //this will delete the characters
    const deleteWords = () => {
        const timeout = setTimeout(() => {

            setWord(data[counter].slice(0, word.length - 1));

            if (word === '') {
                setIs_Increasing(true);
                setWord('')
                if (counter === data.length - 1) {
                    setCounter(0);
                } else {
                    setCounter(counter + 1);
                }

            }
            clearTimeout(timeout);
        }, speed);
    }


    useEffect(() => {
        if (data.length === 0) return;
        if (is_increasing) {

            extendWord();

        } else {
            deleteWords();
        }
        // eslint-disable-next-line 
    }, [word, is_increasing])


    return word;
}

export default useSpeedtype;
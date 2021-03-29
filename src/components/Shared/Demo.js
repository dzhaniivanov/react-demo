import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

function Demo() {
    /*     const [state, setState] = useState({
            count:11,
            step:1
        }); */

    const [count, setCount] = useState(1);
    const [step, setStep] = useState(1)
    // let [character, setCharacter] = useState({ name: 'nobody' });
    const [character, isCharacterLoading] = useFetch(`https://swapi.dev/api/people/${step}`, {});

    /*    useEffect(() => {
           fetch(`https://swapi.dev/api/people/${step}`)
               .then(res => res.json())
               .then(result => setCharacter(result))
   
           return () => {
               console.log('unmount');
           }
       }, [step]) */

    const onCounterButtonClickHandler = () => {
        //setCount(count+1)  not good practice,first value of useState is read only
        /* setState(oldState => ({...oldState,count:oldState.count+oldState.step})) */
        setCount(oldState => oldState + step);
    }

    const onSelectChange = (e) => {
        const stepValue = Number(e.target.value);

        setStep(stepValue)

    }



    return (
        <div>
            <h1>{isCharacterLoading ? 'loading...' : `${character.name}'s counter`} counter</h1>
            <div>dsds</div>
            <button onClick={onCounterButtonClickHandler}>+++</button>
            <select name="step" id="step" onChange={onSelectChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <Link to="/">Home</Link>

        </div>
    )
}

export default Demo;

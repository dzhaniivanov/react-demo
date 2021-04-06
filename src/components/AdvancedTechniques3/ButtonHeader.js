import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ButtonHeader = ({

}) => {
    const [theme] = useContext(ThemeContext);

    return (
        <header style={{ color: theme.color == 'dark' ? 'darkgray' : 'lightgreen' }}>
            <h1>some text</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore animi architecto qui amet optio corporis exercitationem rem ea dicta nulla. </p>
        </header>
    )
}

export default ButtonHeader;
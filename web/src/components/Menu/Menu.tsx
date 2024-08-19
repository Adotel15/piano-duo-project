import { menuOptions } from './menuOptions';

const Menu = () => {
    return (
        <ul>
            {menuOptions.map(option =>
                <li key={option.id}>
                    <a href={option.path}>{option.label}</a>
                </li>
            )}
        </ul>
    );
};

export default Menu;

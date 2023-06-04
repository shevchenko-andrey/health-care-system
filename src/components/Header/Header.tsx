import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { ReactComponent as Burger } from "../../assets/burger.svg";
import { Container } from "../Container";
import "./Header.scss";

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <Container>
        <div className='header__container'>
          <Burger className='header__burger-menu' />
          <nav className='header__navigation nav'>
            <ul className='nav__list'>
              <li className='nav__item'>
                <a className='nav__link'>What we do</a>
              </li>
              <li className='nav__item'>
                <a className='nav__link'>Our customers</a>
              </li>
              <li className='nav__item'>
                <a className='nav__link'>About us</a>
              </li>
              <li className='nav__item'>
                <a className='nav__link'>Blog</a>
              </li>
            </ul>
          </nav>
          <div className='actions-panel'>
            <button className='actions-panel__login'>Login</button>
            <button className='actions-panel__demo'>
              <span>Get Demo</span>
              <Arrow className='actions-panel__icon' />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

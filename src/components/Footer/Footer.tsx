import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
import ReviewBoard from "../../assets/review-board.png";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='top__block'>
          <div className='newletter'>
            <h2 className='news__title'>Get our newsletter.</h2>
            <p className='news__description'>
              Violet's health equity newsletter includes the latest industry
              news, cultural competence education, and company updates.
            </p>
            <button className='subscribe__btn'>Subscribe</button>
          </div>
          <div className='review__board'>
            <img
              src={ReviewBoard}
              alt='review board'
              width='240px'
              height='160px'
            />
            <div className='blog'>
              <h3 className='blog__title'>Blog</h3>
              <p className='blog__description'>
                Announcing Violet’s 2023 Clinical Review Board.
              </p>
              <a href='#' className='read__link'>
                Read now
              </a>
            </div>
          </div>
        </div>
        <div className='divider'></div>
        <div className='bottom__block'>
          <div className='top-wrapper'>
            <p className='footer__description'>
              Powering culturally competent care at scale.
            </p>
            <ul className='social__media'>
              <li className='social__item'>
                <a href=''>
                  <Linkedin />
                </a>
              </li>
              <li className='social__item'>
                <a href=''>
                  <Twitter />
                </a>
              </li>
            </ul>
          </div>
          <div className='activities-block'>
            <div className='activities'>
              <div className='activities__wrapper'>
                <h3 className='activities__title'>What we do</h3>
                <ul className='activities__list'>
                  <li className='activity'>Credentialing</li>
                  <li className='activity'>Upskilling</li>
                  <li className='activity'>Customers</li>
                  <li className='activity'>Log In</li>
                </ul>
              </div>
            </div>
            <div className='activities'>
              <div className='activities__wrapper'>
                <h3 className='activities__title'>About us</h3>
                <ul className='activities__list'>
                  <li className='activity'>Our mission</li>
                  <li className='activity'>Our team</li>
                  <li className='activity'>Our educators</li>
                  <li className='activity'>Careers</li>
                  <li className='activity'>Blog</li>
                  <li className='activity'>Newsletter</li>
                </ul>
              </div>
            </div>

            <div className='activities'>
              <div className='activities__wrapper'>
                <h3 className='activities__title'>Contact</h3>
                <ul className='activities__list'>
                  <li className='activity'>Press</li>
                  <li className='activity'>Contact</li>
                  <li className='activity'>Privacy</li>
                  <li className='activity'>Terms of service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='footer__rights'>
          <p>© 2022 Violet Services, Inc.</p>
        </div>
      </div>
    </div>
  );
};

import ontrakImage from "../../assets/ontrak.png";
import pivotalImage from "../../assets/pivotal.png";
import "./Organizations.scss";

export const Organizations: React.FC = () => {
  return (
    <section className='organizations-section'>
      <div className='container organizations-section__container'>
        <p className='organizations-section__description'>
          Powering inclusive care for the industry's leading organizations.
        </p>
        <ul className='organizations-section__list'>
          <li>
            <img
              className='organizations-section__img'
              src={ontrakImage}
              alt='Ontrack'
            />
          </li>
          <li>
            <img
              className='organizations-section__img'
              src={ontrakImage}
              alt=''
            />
          </li>
          <li>
            <img
              className='organizations-section__img'
              src={pivotalImage}
              alt=''
            />
          </li>
          <li>
            <img
              className='organizations-section__img'
              src={pivotalImage}
              alt=''
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

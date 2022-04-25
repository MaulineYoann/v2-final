import React from 'react';
import './Home.scss';
import profil from '../../assets/profil.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
// eslint-disable-next-line no-unused-vars
import Button from '../Button';


function Home() {
  return (
    <hero className="home">
      <div className="containTitle">
        <h1 className="title">
          Bienvenue, <br /> je suis{' '}
          <span className="name">Yoann Mauline</span>
          <br />
          {
            <Typewriter
              options={{
                strings: [
                  'Développeur Front-end',
                  'Développeur JavaScript',
                  'Consultant Informatique',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          }
        </h1>
        <p>passioné de technologies.</p>
        <p className="useful">
          Liens utiles:
          <a
            href="https://www.linkedin.com/in/yoann-mauline/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="link" />
          </a>
          <a
            href="https://github.com/MaulineYoann"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="link" />
          </a>
        </p>

        {/* <a href={CV} download={CV}>
          mon cv
          <Button name="Mon CV" className={styles.buttonEmpty} />
        </a> */}
      </div>
      <div className="imageContain">
        <img src={profil} width={400} height={400} alt="profil" />
      </div>
    </hero>
  );
}

export default Home;
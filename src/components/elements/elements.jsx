import Aftercard from "../aftercard/aftercard";
import Amazonprime from "../amazonprime/amazonprime";
import Categorycard from "../categorycard/categorycard";
import { AnimatedCircularProgressBarDemo } from "../circle/circle";
import Icons from "../icons/icons";
import Mapaftercard from "../mapaftercard/mapaftercard";
import Aftercardsec from "../aftercardsec/aftecardsec";
import "./elements.css";
import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Elements = ({ prime, bookheader, bookheader2, bookheader3 }) => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="gradient-background">
        <div style={{ maxWidth: "580px", margin: "auto", paddingTop: "150px", textAlign: "center" }}>
          <h1
            style={{
              fontSize: "50px",
              fontWeight: "300",
              marginBottom: "1.25rem",
              lineHeight: "1.25",
            }}
            data-aos="zoom-in"
          >
            {t('everyone_listening')}
          </h1>
          <p
            style={{ maxWidth: "400px", margin: "0 auto" }}
            data-aos="fade-up"
          >
            {t('bestsellers_new_releases')}
          </p>
        </div>
        <Icons />
        <Aftercard bookheader={bookheader} bookheader2={bookheader2} bookheader3={bookheader3} />
        <Mapaftercard />
        <Categorycard />
        <Aftercardsec bookheader={bookheader} bookheader2={bookheader2} />

        <div className="flex mt-[100px]" style={{ maxWidth: "900px" }}>
          <AnimatedCircularProgressBarDemo />
          <AnimatedCircularProgressBarDemo />
          <AnimatedCircularProgressBarDemo />
        </div>
      </div>
    </>
  );
}

export default Elements;
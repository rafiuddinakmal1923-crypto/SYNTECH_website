import React from "react";

import krenovator from "../assets/footer/Krenovator.jpeg";
import runcloud from "../assets/footer/runcloud-education.jpg";
import ericsson from "../assets/footer/ericsson.png";
import lgms from "../assets/footer/lgms.jpg";
import bnm from "../assets/footer/bnm.png";
import iem from "../assets/footer/iem.jpg";
import ieeeras from "../assets/footer/ieee-ras.png";
import mdec from "../assets/footer/mdec.jpg";
import juristech from "../assets/footer/juristech.jpg";
import cimb from "../assets/footer/cimb.jpg";

import utp_logo from "../assets/footer/utp_logo.png";
import dc_logo from "../assets/footer/dc_logo.png";
import syntech from "../assets/syntech-logo 2.png";

const Footer = () => {
  return (
    <>
      <section>
        <footer>
          <div className="flex flex-col md:flex-row h-auto w-full">
            {/* LEFT: partners */}
            <div className="flex flex-col min-w-auto md:flex-4/5 bg-white p-4">
              <div className="font-Poppins font-semibold tracking-tight text-xl md:text-2xl mb-4">
                <header>OUR PAST COLLABORATORS</header>
              </div>

              {/* Mobile layout (md and below) */}
              <div className="flex md:hidden flex-col gap-y-4">
                {/* Row 1: 4 logos */}
                <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-3">
                  <a
                    href="https://www.krenovator.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <img
                      src={krenovator}
                      alt="Krenovator"
                      className="h-[50px] w-auto"
                    />
                  </a>
                  <a
                    href="https://www.ericsson.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <img
                      src={ericsson}
                      alt="Ericsson"
                      className="h-[50px] w-auto"
                    />
                  </a>
                  <a
                    href="https://lgms.global/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <img src={lgms} alt="LGMS" className="h-[50px] w-auto" />
                  </a>
                  <a
                    href="https://www.bnm.gov.my/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <img
                      src={bnm}
                      alt="Bank Negara Malaysia"
                      className="h-[50px] w-auto"
                    />
                  </a>
                </div>

                {/* Row 2: 3 logos */}
                <div className="flex flex-row items-center justify-center gap-x-6">
                  <a
                    href="https://runcloud.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <img
                      src={runcloud}
                      alt="RunCloud"
                      className="h-[70px] w-auto"
                    />
                  </a>
                  <a
                    href="https://www.myiem.org.my/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <img src={iem} alt="IEM" className="h-[70px] w-auto" />
                  </a>
                  <a
                    href="https://mdec.my/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <img src={mdec} alt="MDEC" className="h-[70px] w-auto" />
                  </a>
                </div>

                {/* Row 3: CIMB (big logo) */}
                <div className="flex justify-center">
                  <a
                    href="https://www.cimb.com.my/en/personal/home.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <img src={cimb} alt="CIMB" className="h-[80px] w-auto" />
                  </a>
                </div>

                {/* Row 4: Juristech (big logo) */}
                <div className="flex justify-center">
                  <a
                    href="https://juristech.net/juristech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <img
                      src={juristech}
                      alt="Juristech"
                      className="h-[80px] w-auto"
                    />
                  </a>
                </div>

                {/* Row 5: IEEE RAS (biggest logo at bottom) */}
                <div className="flex justify-center">
                  <a
                    href="https://ras.ieeemy.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <img
                      src={ieeeras}
                      alt="IEEE RAS Malaysia"
                      className="h-[100px] w-auto"
                    />
                  </a>
                </div>
              </div>

              {/* Medium and Large layout (original) */}
              <div className="hidden md:flex flex-col gap-y-2 md:gap-y-3">
                {/* Top row (6) — responsive wrap, centered on small, evenly spaced on md+ */}
                <div className="flex flex-row flex-wrap items-center justify-center md:justify-evenly gap-x-6 gap-y-4">
                  <a
                    href="https://www.krenovator.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <img
                      src={krenovator}
                      alt="Krenovator"
                      className="h-[56px] sm:h-[64px] md:h-[90px] w-auto"
                    />
                  </a>
                  <a
                    href="https://runcloud.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <img
                      src={runcloud}
                      alt="RunCloud"
                      className="h-[56px] sm:h-[64px] md:h-[140px] lg:h-[160px] w-auto"
                    />
                  </a>
                  <a
                    href="https://www.ericsson.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <img
                      src={ericsson}
                      alt="Ericsson"
                      className="h-[56px] sm:h-[64px] md:h-[90px] w-auto"
                    />
                  </a>
                  <a
                    href="https://lgms.global/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <img
                      src={lgms}
                      alt="LGMS"
                      className="h-[56px] sm:h-[64px] md:h-[90px] w-auto"
                    />
                  </a>
                  <a
                    href="https://www.bnm.gov.my/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <img
                      src={bnm}
                      alt="Bank Negara Malaysia"
                      className="h-[56px] sm:h-[64px] md:h-[90px] w-auto"
                    />
                  </a>
                  <a
                    href="https://www.myiem.org.my/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <img
                      src={iem}
                      alt="IEM"
                      className="h-[56px] sm:h-[64px] md:h-[120px] lg:h-[140px] w-auto"
                    />
                  </a>
                </div>

                {/* Bottom row (4) — responsive wrap, a bit taller like your design */}
                <div className="flex flex-row flex-wrap items-center justify-center md:justify-evenly gap-x-8 gap-y-5">
                  <a
                    href="https://ras.ieeemy.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <img
                      src={ieeeras}
                      alt="IEEE RAS Malaysia"
                      className="h-[64px] sm:h-[72px] md:h-[90px] w-auto"
                    />
                  </a>
                  <a
                    href="https://mdec.my/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <img
                      src={mdec}
                      alt="MDEC"
                      className="h-[64px] sm:h-[72px] md:h-[130px] lg:h-[150px] w-auto"
                    />
                  </a>

                  <a
                    href="https://juristech.net/juristech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <img
                      src={juristech}
                      alt="Juristech"
                      className="h-[64px] sm:h-[72px] md:h-[110px] w-auto"
                    />
                  </a>
                  <a
                    href="https://www.cimb.com.my/en/personal/home.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <img
                      src={cimb}
                      alt="CIMB"
                      className="h-[64px] sm:h-[72px] md:h-[110px] w-auto"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: brand column (unchanged) */}
            <div className="flex flex-row w-full md:w-auto bg-black px-1 md:flex-1/5">
              <div className="flex flex-1 justify-center items-center flex-col">
                <div>
                  <img
                    src={utp_logo}
                    className="h-15 w-20 md:h-22 md:w-auto"
                    alt="UTP"
                  />
                </div>
                <div className="text-white font-Poppins font-semibold tracking-tight text-[20px] md:text-3xl text-center">
                  SYNTECH
                </div>
                <div>
                  <img
                    src={dc_logo}
                    className="h-15 w-20 md:h-22 md:w-30"
                    alt="DC"
                  />
                </div>
              </div>
              <div className="flex flex-1 justify-center items-center">
                <div>
                  <img
                    src={syntech}
                    className="min-h-15 min-w-15 md:h-auto md:w-auto"
                    alt="Syntech Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;

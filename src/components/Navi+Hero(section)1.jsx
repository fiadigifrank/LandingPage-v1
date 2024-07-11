import * as React from "react";

const HeaderNavItem = ({ text }) => (
  <div className="header-nav-item">
    {text}
  </div>
);

const HeaderNavLink = ({ text, src }) => (
  <div className="header-nav-link">
    <div className="text">{text}</div>
    <img src={src} alt="" className="icon-small"/>
  </div>
);

const MyComponent = () => {
  return (
    <>
      <style jsx>{`
        .container {
          background-color: var(--Gray-00, #fff);
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 100%;
        }
        .header {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          min-height: 1080px;
          width: 100%;
          align-items: center;
          padding: 39px 48px 0;
        }
        @media (max-width: 991px) {
          .header {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .bg-img {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-position: center;
        }
        .header-content {
          position: relative;
          z-index: 10;
          display: flex;
          width: 100%;
          max-width: 1542px;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .header-content {
            max-width: 100%;
          }
        }
        .header-nav {
          display: flex;
          gap: 0px;
          font-size: 22px;
        }
        @media (max-width: 991px) {
          .header-nav {
            flex-wrap: wrap;
          }
        }
        .header-nav-menu {
          z-index: 10;
          display: flex;
          gap: 20px;
          color: #000;
          font-weight: 400;
          margin-left: 2%;
          white-space: nowrap;
          text-align: center;
          letter-spacing: 1.1px;
          justify-content: space-between;
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .header-nav-menu {
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .icon {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 50px;
        }
        .header-nav-item {
          font-family: Poppins, sans-serif;
          padding: 8px 15px;
        }
        @media (max-width: 991px) {
          .header-nav-item {
            white-space: initial;
          }
        }
        .text {
          color: #000;
          text-align: center;
          font-family: Poppins;
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 1.1px;
        }
        .login-container {
          display: flex;
          gap: 20px;
          margin-left: 5%;
          justify-content: space-between;
          align-items: center;
        }
        .login {
          color: #000;
          font-family: Inter, sans-serif;
          font-weight: 400;
        }
        .signup-container {
          display: flex;
          flex-direction: column;
          font-weight: 700;
          text-align: center;
          line-height: 73%;
          justify-content: center;
        }
        .signup {
          border-radius: 10px;
          border: 2px solid var(--Linear-TEXT, #63b8ac);
          padding: 14px 31px;
        }
        @media (max-width: 991px) {
          .signup {
            padding: 0 20px;
          }
        }
        .signup-text {
          display: flex;
          width: 84px;
          height: 22px;
          flex-direction: column;
          justify-content: center;
          flex-shrink: 0;
          text-align: center;
          font-family: Inter;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 16px; /* 72.727% */
          background: var(--Linear-TEXT, linear-gradient(96deg, #63B8AC 51.43%, #1D3765 64.93%));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .main-content {
          align-self: center;
          margin-top: 222px;
          width: 100%;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .main-content {
            margin-top: 40px;
          }
        }
        .main-content-wrapper {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .main-content-wrapper {
            flex-direction: column;
            gap: 0px;
          }
        }
        .main-column {
          display: flex;
          flex-direction: column;
          width: 74%;
        }
        @media (max-width: 991px) {
          .main-column {
            width: 100%;
          }
        }
        .text-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 1px;
          max-width: 100%;
        }
        .header-title {
          display: flex;
          flex-direction: column;
          font-size: 120px;
          font-weight: 400;
          text-align: center;
          letter-spacing: 2.4px;
          width: fit-content;
        }
        @media (max-width: 991px) {
          .header-title {
            font-size: 40px;
          }
        }
        .circle-green {
          display: flex;
          margin-left: 55%;
          border-radius: 50%;
          background-color: var(--subscrption-green, #4aa181);
          width: 25px;
          height: 23px;
        }
        .circle-green-left {
          position: fixed;
          top: 15%;
          left: 52%;
          width: 21%;
          height: 20%;
          flex-shrink: 0;
        }
        .title {
          display: flex;
          width: 800px;
          height: 101px;
          flex-direction: column;
          justify-content: center;
          flex-shrink: 0;
          text-align: center;
          font-family: Dongle;
          font-size: 120px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 2.4px;
          background: var(--Linear-TEXT, linear-gradient(96deg, #63B8AC 51.43%, #1D3765 64.93%));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .circle-blue {
          border-radius: 50%;
          background-color: var(--subscption-blue, #0066de);
          height: 23px;
        }
        .subtitle {
          color: #2B2A2A;
          text-align: center;
          font-family: ABeeZee;
          font-size: 64px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 1.28px;
        }
        .subtitle1 {
          margin: 5% auto;
          color: #989898;
          text-align: center;
          font-family: ABeeZee;
          font-size: 64px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 1.28px;
          color: #323030;
          font-family: ABeeZee;
          font-size: 64px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 1.28px;
          background: var(--Linear-TEXT, linear-gradient(96deg, #63B8AC 51.43%, #1D3765 64.93%));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @media (max-width: 991px) {
          .subtitle {
            font-size: 40px;
          }
        }
        .description {
          color: #878484;
          text-align: center;
          font-family: ABeeZee;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 33px; /* 165% */
          letter-spacing: 0.72px;
        }
        .button-container {
          justify-content: center;
          display: flex;
          margin-top: 102px;
          gap: 10px;
          font-size: 20px;
          font-weight: 700;
          text-align: center;
        }
        @media (max-width: 991px) {
          .button-container {
            margin-top: 40px;
          }
        }
        .button {
          border-radius: 10px;
          border: 2px solid var(--Linear-TEXT, #63b8ac);
        }
        @media (max-width: 991px) {
          .button {
            padding: 0 20px;
          }
        }
        .button-text {
          display: flex;
          width: 162.75px;
          height: 56px;
          flex-direction: column;
          justify-content: center;
          flex-shrink: 0;
          text-align: center;
          font-family: Inter;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 16px; /* 80% */
          background: var(--Linear-TEXT, linear-gradient(96deg, #63B8AC 51.43%, #1D3765 64.93%));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .button-free {
          display: flex;
          width: 178px;
          height: 56px;
          flex-shrink: 0;
          text-align: center;
          font-family: Inter;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          background: linear-gradient(92deg, #217ca8 7.22%, #63b8ac 76.98%);
          color: #fff;
        }
        .secondary-column {
          display: flex;
          flex-direction: column;
          width: 26%;
          text-align: center;
        }
        @media (max-width: 991px) {
          .secondary-column {
            width: 100%;
          }
        }
        .card {
          display: flex;
          flex-direction: column;
          padding: 0 80px;
          align-items: center;
        }
        @media (max-width: 991px) {
          .card {
            padding: 0 20px;
          }
        }
        .card-img-wrapper {
          display: flex;
          width: 75px;
          height: 75px;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          border-radius: 30px;
          margin-left: -150%
        }
        .card-img-wrapper-center {
          width: 75px;
          height: 75px;
          flex-shrink: 0;
        }
        .card-img-wrapper-end {
          width: 80px;
          height: 80px;
          flex-shrink: 0;
          margin-left: 120%;
        }
        @media (max-width: 991px) {
          .card-img-wrapper {
            padding-right: 20px;
            margin: 0 10px;
          }
        }
        .header-nav-link {
          display: flex;
          height: 30px
          margin-left: 40px;
          align-items: center;
        }
        .icon-small {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          margin-left: 10px;
          margin-top: 5px;
          width: 18px !important;
          height: 18px !important;
          transform: rotate(-180deg, 526, 72.5);
        }
        .medical_icon1 {
          width: 75px;
          height: 75px;
          flex-shrink: 0;
        }
        .medical_icon2 {
          width: 80px;
          height: 80px;
          flex-shrink: 0;
        }
        .medical_icon3 {
          width: 80px;
          height: 78.709px;
          flex-shrink: 0;
        }
        .medical_icon4 {
          width: 65px;
          height: 65px;
          flex-shrink: 0;
        }
        .card-img-wrapper .icon-medium {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 94px;
          box-shadow: 0px 0px 40.137px 0px rgba(6, 28, 61, 0.1);
          align-self: end;
        }
        .main-illustrations {
          display: flex;
          margin-top: -543px;
          width: 100%;
          max-width: 1572px;
          flex-direction: column;
          align-items: start;
        }
        @media (max-width: 991px) {
          .main-illustrations {
            margin-top: -200px;
          }
        }
        .illustration {
          justify-content: center;
          align-items: center;
          border-radius: 217.408px;
          box-shadow: 0px 0px 40.137px 0px rgba(6, 28, 61, 0.1);
          background-color: var(--Gray-00, #fff);
          padding: 0 3px;
          margin: 15px 0;
        }
        .icon-large {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        .hero-title {
          align-self: center;
          display: flex;
          margin-top: 124px;
          width: 100%;
          max-width: 1320px;
          font-size: 190px;
          font-weight: 400;
          white-space: nowrap;
          text-align: center;
          letter-spacing: -6.65px;
          line-height: 100%;
          justify-content: center;
          padding: 0 60px;
        }
        @media (max-width: 991px) {
          .hero-title {
            font-size: 40px;
            white-space: initial;
            padding: 0 20px;
          }
        }
        .Scroll-container {
          justify-content: center;
          align-items: center;
          display: flex;
          flex-direction: column;
          margin-top: 102px ;
          gap: 10px;
          font-size: 20px;
          font-weight: 700;
          text-align: center;
        }
        .Scroll_txt {
          color: var(--Gray-400, #9BA4B1);
          text-align: center;
          /* Body/Medium/500 */
          font-family: Inter;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px; /* 150% */
        }
        .ArrowDown {
          width: 20px;
          height: 30px;
          flex-shrink: 0;
        }
      `}</style>
      <div className="container">
        <header className="header">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/884403135a4a3962bec661c576fb68b4697452678c59c62cfcc6a96f1d5a0abd?apiKey=16d05611e7e4446e9bdc5a2a04ac7003&" alt="header background" className="bg-img" />
          <div className="header-content">
            <nav className="header-nav">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bc0f493a20676fa33bb30bf433860b9f90f4faf71debc04f0a56f5d7fa55b74?apiKey=16d05611e7e4446e9bdc5a2a04ac7003&" alt="brand logo" className="icon" />
              <div className="header-nav-menu">
                <HeaderNavLink text="Products" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf17ec4bfb34fab03fe0022eae24948608c0e96d16c7359454e781fc69b678b3?apiKey=16d05611e7e4446e9bdc5a2a04ac7003&" />
                <HeaderNavLink text="Solutions" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf17ec4bfb34fab03fe0022eae24948608c0e96d16c7359454e781fc69b678b3?apiKey=16d05611e7e4446e9bdc5a2a04ac7003&" />
                <HeaderNavLink text="Resources" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf17ec4bfb34fab03fe0022eae24948608c0e96d16c7359454e781fc69b678b3?apiKey=16d05611e7e4446e9bdc5a2a04ac7003&" />
                <HeaderNavItem text="Community" />
                <HeaderNavItem text="Pricing" />
              </div>
              <div className="login-container">
                <div className="login">Log in</div>
                <div className="signup-container">
                  <div className="signup">
                    <div className="signup-text">Sign Up</div>
                  </div>
                </div>
              </div>
            </nav>
            <main className="main-content">
              <div className="main-content-wrapper">
                <aside className="secondary-column">
                  <div className="card">
                    <div className="card-img-wrapper">
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/208391d135ba09f063f0c729fdd2cf627306ed2d1f2f3def4b8eeec2e5e7a7a8?apiKey=16d05611e7e4446e9bdc5a2a04ac7003&" alt="illustration image 1" className="medical_icon1" />
                    </div>
                    <div className="card-img-wrapper-end">
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb638f1897409d48722e8a341608014b17c54ba667ec1c5cecc95ef166b5f417?apiKey=16d05611e7e4446e9bdc5a2a04ac7003&" alt="illustration image 2" className="icon-large" />
                    </div>
                    <div className="card-img-wrapper-center">
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d36a152217e6e903ca418537082e6cc883737fee3e3ce44a0272f538f80c6dfd?apiKey=16d05611e7e4446e9bdc5a2a04ac7003&" alt="illustration image 3" className="icon-large" />
                    </div>
                    <div className="card-img-wrapper-end">
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab1a62496d57d9a180a605a4a24c5c1db37bb2f8a7b42d27869803e1b2743bfe?apiKey=16d05611e7e4446e9bdc5a2a04ac7003&" alt="illustration image 4" className="icon-large" />
                    </div>
                    <div className="card-img-wrapper">
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ae94b09a27bcca32defacdffc106fb59231b4d1e392398834880bbb20c699a8?apiKey=16d05611e7e4446e9bdc5a2a04ac7003&" alt="illustration image 5" className="icon-large" />
                    </div>
                  </div>
                </aside>
                <section className="main-column">
                  <div className="text-container">
                    <div className="header-title">
                      <div className="title">Dental VLM.</div>
                      <img src="vlm_bord.svg" alt="card image 5" className="circle-green-left" />
                    </div>
                    <div className="subtitle1">
                      Radiography&nbsp;
                      <span>Diagnose</span>
                    </div>
                    <div className="subtitle">Sensitive, Quickly and Reliably</div>
                    <div className="description">
                      Automatically diagnose 18 pathological findings<br />
                      Especially on periodontal 4 stage efficiently dentist
                    </div>
                    <div className="button-container">
                      <div className="button">
                        <div className="button-text">Learn More</div>
                      </div>
                      <div className="button-free">
                        Try For Free -&gt;
                      </div>
                    </div>
                  </div>
                </section>
                <aside className="secondary-column">
                  <div className="card">
                    <div className="card-img-wrapper">
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/11b5f117b3e5d724aa9029c3d09c4fca892155c5e21f5ad62fa544429ef1a081?apiKey=16d05611e7e4446e9bdc5a2a04ac7003&" alt="card image 1" className="medical_icon1" />
                    </div>
                    <div className="card-img-wrapper-end">
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7411b0ff-fca2-431c-82f6-c10f37941999?apiKey=16d05611e7e4446e9bdc5a2a04ac7003&" alt="card image 2" className="medical_icon2" />
                    </div>
                    <div className="card-img-wrapper-center">
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c72a5f725c1c5012b24a9e9a5232625c2377f71c51a221c8296d3b526036145?apiKey=16d05611e7e4446e9bdc5a2a04ac7003&" alt="card image 3" className="medical_icon3" />
                    </div>
                    <div className="card-img-wrapper-end">
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/67b7462b6038f23a6f58bc5093d2d2c694ea234fead9f57d0019e14d8b0381a2?apiKey=16d05611e7e4446e9bdc5a2a04ac7003&" alt="card image 4" className="medical_icon3" />
                    </div>
                    <div className="card-img-wrapper">
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c9622cf3281f992f4cec7d9a05f8acb634ce3a589e3ac6a6e353990f88460c2?apiKey=16d05611e7e4446e9bdc5a2a04ac7003&" alt="card image 5" className="medical_icon4" />
                    </div>
                  </div>
                </aside>
              </div>
            </main>
          </div>
        </header>
        <div className="Scroll-container">
          <span className="Scroll_txt">Scroll down</span>
          <img src="solid32arrowdown.svg" alt="card image 5" className="ArrowDown" />
        </div>
      </div>
    </>
  );
};

export default MyComponent;
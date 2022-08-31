import React from "react";
import "./Footer.css";
import Button from "./../Button/Button";

function Footer() {
  return (
    <>
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__content_contact">
            <h4>Reach Out To Us At</h4>
            <div className="address">
              <span>
                <svg
                  width="29"
                  height="24"
                  viewBox="0 0 29 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.455 17L15.6595 15V9.858C17.7326 9.411 19.2732 7.858 19.2732 6C19.2732 3.794 17.1122 2 14.455 2C11.7977 2 9.63672 3.794 9.63672 6C9.63672 7.858 11.1774 9.411 13.2504 9.858V15L14.455 17ZM12.0458 6C12.0458 4.897 13.1263 4 14.455 4C15.7836 4 16.8641 4.897 16.8641 6C16.8641 7.103 15.7836 8 14.455 8C13.1263 8 12.0458 7.103 12.0458 6Z"
                    fill="white"
                  />
                  <path
                    d="M19.5937 10.563L18.9517 12.491C22.0727 13.207 24.0903 14.584 24.0903 16C24.0903 17.892 20.1333 20 14.4538 20C8.77431 20 4.81733 17.892 4.81733 16C4.81733 14.584 6.83497 13.207 9.95719 12.49L9.31516 10.562C5.05463 11.54 2.4082 13.623 2.4082 16C2.4082 19.364 7.69984 22 14.4538 22C21.2078 22 26.4994 19.364 26.4994 16C26.4994 13.623 23.853 11.54 19.5937 10.563Z"
                    fill="white"
                  />
                </svg>
              </span>
              <p>128, Itire road, Lawanson, Surulere, Lagos, Nigeria</p>
            </div>
            <div className="phoneno">
              <span>
                <svg
                  width="29"
                  height="24"
                  viewBox="0 0 29 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.13 13.288C20.0182 13.195 19.8855 13.1213 19.7393 13.071C19.5932 13.0206 19.4365 12.9948 19.2783 12.9948C19.1201 12.9948 18.9635 13.0206 18.8174 13.071C18.6712 13.1213 18.5385 13.195 18.4267 13.288L16.5067 14.882C15.6165 14.662 13.9554 14.162 12.9026 13.288C11.8498 12.414 11.2475 11.035 10.9825 10.296L12.9026 8.70195C13.0146 8.60916 13.1034 8.49896 13.164 8.37765C13.2246 8.25633 13.2558 8.12629 13.2558 7.99495C13.2558 7.86362 13.2246 7.73357 13.164 7.61226C13.1034 7.49094 13.0146 7.38074 12.9026 7.28795L8.08436 3.28795C7.97259 3.19501 7.83984 3.12127 7.69371 3.07096C7.54758 3.02065 7.39093 2.99475 7.23273 2.99475C7.07453 2.99475 6.91789 3.02065 6.77176 3.07096C6.62562 3.12127 6.49288 3.19501 6.38111 3.28795L3.11434 5.99995C2.6566 6.37995 2.39883 6.90195 2.40846 7.43495C2.43617 8.85895 2.89029 13.805 7.58567 17.703C12.281 21.601 18.2388 21.977 19.9541 22H19.9878C20.6238 22 21.2249 21.792 21.6802 21.414L24.947 18.702C25.059 18.6092 25.1478 18.499 25.2084 18.3776C25.269 18.2563 25.3002 18.1263 25.3002 17.995C25.3002 17.8636 25.269 17.7336 25.2084 17.6123C25.1478 17.4909 25.059 17.3807 24.947 17.288L20.13 13.288ZM19.977 20C18.4737 19.979 13.3302 19.644 9.28892 16.288C5.23436 12.922 4.84168 8.63695 4.81759 7.41395L7.23273 5.40895L10.3477 7.99495L8.79023 9.28795C8.64865 9.4054 8.54455 9.55029 8.48735 9.70952C8.43014 9.86875 8.42163 10.0373 8.46259 10.2C8.4915 10.315 9.19858 13.042 11.1981 14.702C13.1977 16.362 16.4826 16.949 16.6211 16.973C16.8169 17.0077 17.0201 17.0011 17.212 16.9538C17.4039 16.9064 17.5785 16.8198 17.7196 16.702L19.2771 15.409L22.3921 17.995L19.977 20Z"
                    fill="white"
                  />
                  <path
                    d="M20.2314 5.791L14.8145 10.288L16.5177 11.702L21.9346 7.205L25.3026 10V2.995H16.8646L20.2314 5.791Z"
                    fill="white"
                  />
                </svg>
              </span>
              <p>+234 8144443523</p>
            </div>
            <div className="email">
              <span>
                <svg
                  width="25"
                  height="16"
                  viewBox="0 0 25 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.6821 14H19.273V5.25L12.0456 9L4.81825 5.25V14H2.40912V2H3.8546L12.0456 6.25L20.2366 2H21.6821V14ZM21.6821 0H2.40912C1.07206 0 0 0.89 0 2V14C0 14.5304 0.253817 15.0391 0.705616 15.4142C1.15741 15.7893 1.77018 16 2.40912 16H21.6821C22.321 16 22.9338 15.7893 23.3856 15.4142C23.8374 15.0391 24.0912 14.5304 24.0912 14V2C24.0912 1.46957 23.8374 0.960859 23.3856 0.585786C22.9338 0.210714 22.321 0 21.6821 0Z"
                    fill="white"
                  />
                </svg>
              </span>
              <p>support@lampnets.com</p>
            </div>
          </div>
          <div className="newsletter">
            <h4>Newsletter</h4>
            <p>
              Sign up to be the first to recieve our latest inspiring stories
              and industry news
            </p>
            <div className="footer__email">
              <form>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="footer__email_input"
                />
                <Button text="Subscribe" btnStyle="btn__primary" />
              </form>
            </div>
          </div>
        </div>
        <div className="footer__socials">
          <div className="lamp__socials_logo">
            <span>
              <svg
                width="113"
                height="30"
                viewBox="0 0 113 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.66 19.36H9.14V22H1.24V7.96H4.66V19.36ZM9.69125 16.4C9.69125 15.2533 9.90458 14.2467 10.3313 13.38C10.7713 12.5133 11.3646 11.8467 12.1113 11.38C12.8579 10.9133 13.6913 10.68 14.6113 10.68C15.3979 10.68 16.0846 10.84 16.6713 11.16C17.2713 11.48 17.7313 11.9 18.0513 12.42V10.84H21.4713V22H18.0513V20.42C17.7179 20.94 17.2513 21.36 16.6513 21.68C16.0646 22 15.3779 22.16 14.5913 22.16C13.6846 22.16 12.8579 21.9267 12.1113 21.46C11.3646 20.98 10.7713 20.3067 10.3313 19.44C9.90458 18.56 9.69125 17.5467 9.69125 16.4ZM18.0513 16.42C18.0513 15.5667 17.8113 14.8933 17.3313 14.4C16.8646 13.9067 16.2913 13.66 15.6113 13.66C14.9313 13.66 14.3513 13.9067 13.8713 14.4C13.4046 14.88 13.1713 15.5467 13.1713 16.4C13.1713 17.2533 13.4046 17.9333 13.8713 18.44C14.3513 18.9333 14.9313 19.18 15.6113 19.18C16.2913 19.18 16.8646 18.9333 17.3313 18.44C17.8113 17.9467 18.0513 17.2733 18.0513 16.42ZM37.7855 10.72C39.1721 10.72 40.2721 11.14 41.0855 11.98C41.9121 12.82 42.3255 13.9867 42.3255 15.48V22H38.9255V15.94C38.9255 15.22 38.7321 14.6667 38.3455 14.28C37.9721 13.88 37.4521 13.68 36.7855 13.68C36.1188 13.68 35.5921 13.88 35.2055 14.28C34.8321 14.6667 34.6455 15.22 34.6455 15.94V22H31.2455V15.94C31.2455 15.22 31.0521 14.6667 30.6655 14.28C30.2921 13.88 29.7721 13.68 29.1055 13.68C28.4388 13.68 27.9121 13.88 27.5255 14.28C27.1521 14.6667 26.9655 15.22 26.9655 15.94V22H23.5455V10.84H26.9655V12.24C27.3121 11.7733 27.7655 11.4067 28.3255 11.14C28.8855 10.86 29.5188 10.72 30.2255 10.72C31.0655 10.72 31.8121 10.9 32.4655 11.26C33.1321 11.62 33.6521 12.1333 34.0255 12.8C34.4121 12.1867 34.9388 11.6867 35.6055 11.3C36.2721 10.9133 36.9988 10.72 37.7855 10.72ZM47.7373 12.42C48.0707 11.9 48.5307 11.48 49.1173 11.16C49.704 10.84 50.3907 10.68 51.1773 10.68C52.0973 10.68 52.9307 10.9133 53.6773 11.38C54.424 11.8467 55.0107 12.5133 55.4373 13.38C55.8773 14.2467 56.0973 15.2533 56.0973 16.4C56.0973 17.5467 55.8773 18.56 55.4373 19.44C55.0107 20.3067 54.424 20.98 53.6773 21.46C52.9307 21.9267 52.0973 22.16 51.1773 22.16C50.404 22.16 49.7173 22 49.1173 21.68C48.5307 21.36 48.0707 20.9467 47.7373 20.44V27.32H44.3173V10.84H47.7373V12.42ZM52.6173 16.4C52.6173 15.5467 52.3773 14.88 51.8973 14.4C51.4307 13.9067 50.8507 13.66 50.1573 13.66C49.4773 13.66 48.8973 13.9067 48.4173 14.4C47.9507 14.8933 47.7173 15.5667 47.7173 16.42C47.7173 17.2733 47.9507 17.9467 48.4173 18.44C48.8973 18.9333 49.4773 19.18 50.1573 19.18C50.8373 19.18 51.4173 18.9333 51.8973 18.44C52.3773 17.9333 52.6173 17.2533 52.6173 16.4ZM64.2916 10.72C65.5982 10.72 66.6382 11.1467 67.4116 12C68.1982 12.84 68.5916 14 68.5916 15.48V22H65.1916V15.94C65.1916 15.1933 64.9982 14.6133 64.6116 14.2C64.2249 13.7867 63.7049 13.58 63.0516 13.58C62.3982 13.58 61.8782 13.7867 61.4916 14.2C61.1049 14.6133 60.9116 15.1933 60.9116 15.94V22H57.4916V10.84H60.9116V12.32C61.2582 11.8267 61.7249 11.44 62.3116 11.16C62.8982 10.8667 63.5582 10.72 64.2916 10.72ZM81.0881 16.24C81.0881 16.56 81.0681 16.8933 81.0281 17.24H73.2881C73.3415 17.9333 73.5615 18.4667 73.9481 18.84C74.3481 19.2 74.8348 19.38 75.4081 19.38C76.2615 19.38 76.8548 19.02 77.1881 18.3H80.8281C80.6415 19.0333 80.3015 19.6933 79.8081 20.28C79.3281 20.8667 78.7215 21.3267 77.9881 21.66C77.2548 21.9933 76.4348 22.16 75.5281 22.16C74.4348 22.16 73.4615 21.9267 72.6081 21.46C71.7548 20.9933 71.0881 20.3267 70.6081 19.46C70.1281 18.5933 69.8881 17.58 69.8881 16.42C69.8881 15.26 70.1215 14.2467 70.5881 13.38C71.0681 12.5133 71.7348 11.8467 72.5881 11.38C73.4415 10.9133 74.4215 10.68 75.5281 10.68C76.6081 10.68 77.5681 10.9067 78.4081 11.36C79.2481 11.8133 79.9015 12.46 80.3681 13.3C80.8481 14.14 81.0881 15.12 81.0881 16.24ZM77.5881 15.34C77.5881 14.7533 77.3881 14.2867 76.9881 13.94C76.5881 13.5933 76.0881 13.42 75.4881 13.42C74.9148 13.42 74.4281 13.5867 74.0281 13.92C73.6415 14.2533 73.4015 14.7267 73.3081 15.34H77.5881ZM88.7123 19.1V22H86.9723C85.7323 22 84.7657 21.7 84.0723 21.1C83.379 20.4867 83.0323 19.4933 83.0323 18.12V13.68H81.6723V10.84H83.0323V8.12H86.4523V10.84H88.6923V13.68H86.4523V18.16C86.4523 18.4933 86.5323 18.7333 86.6923 18.88C86.8523 19.0267 87.119 19.1 87.4923 19.1H88.7123Z"
                  fill="#BE0B0B"
                />
              </svg>
            </span>
          </div>
          <div className="footer__socials_icon">
            <span>
              <svg
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_763_343)">
                  <path
                    d="M10.8411 0C7.89906 0 7.52911 0.01125 6.37319 0.054C5.21726 0.099 4.42993 0.24975 3.74016 0.4725C3.01665 0.698421 2.36131 1.0528 1.81994 1.51088C1.26851 1.96053 0.841682 2.50452 0.569155 3.105C0.300839 3.6765 0.117896 4.33125 0.0650463 5.2875C0.0135513 6.24937 0 6.55538 0 9.00113C0 11.4446 0.0135513 11.7506 0.0650463 12.7103C0.119252 13.6688 0.300839 14.3224 0.569155 14.895C0.846957 15.4867 1.21691 15.9885 1.81994 16.4891C2.42162 16.9897 3.02601 17.298 3.73881 17.5275C4.42993 17.7502 5.2159 17.9021 6.37048 17.946C7.52776 17.9888 7.89635 18 10.8411 18C13.7858 18 14.153 17.9888 15.3103 17.946C16.4635 17.901 17.2535 17.7502 17.9433 17.5275C18.6663 17.3015 19.3212 16.9471 19.8622 16.4891C20.4652 15.9885 20.8352 15.4867 21.113 14.895C21.3799 14.3224 21.5629 13.6688 21.6171 12.7103C21.6686 11.7506 21.6821 11.4446 21.6821 9C21.6821 6.55538 21.6686 6.24938 21.6171 5.28863C21.5629 4.33125 21.3799 3.6765 21.113 3.105C20.8405 2.5045 20.4136 1.96051 19.8622 1.51088C19.321 1.05264 18.6656 0.698226 17.9419 0.4725C17.2508 0.24975 16.4621 0.097875 15.3089 0.054C14.1516 0.01125 13.7844 0 10.8383 0H10.8424H10.8411ZM9.86943 1.62225H10.8424C13.737 1.62225 14.0798 1.63013 15.2222 1.674C16.2792 1.71338 16.8538 1.86075 17.2359 1.98338C17.7414 2.1465 18.1032 2.34225 18.4826 2.65725C18.8621 2.97225 19.0965 3.2715 19.293 3.69225C19.4421 4.00838 19.6182 4.48538 19.6657 5.36287C19.7185 6.31125 19.7294 6.59588 19.7294 8.99775C19.7294 11.3996 19.7185 11.6854 19.6657 12.6337C19.6182 13.5112 19.4407 13.9871 19.293 14.3044C19.1192 14.6952 18.8418 15.0485 18.4813 15.3383C18.1019 15.6532 17.7414 15.8479 17.2346 16.011C16.8551 16.1348 16.2806 16.281 15.2222 16.3215C14.0798 16.3643 13.737 16.3744 10.8424 16.3744C7.94785 16.3744 7.60364 16.3643 6.46127 16.3215C5.40427 16.281 4.83105 16.1348 4.4489 16.011C3.97799 15.8669 3.55197 15.637 3.20218 15.3383C2.84137 15.048 2.56353 14.6944 2.3891 14.3032C2.24139 13.9871 2.06387 13.5101 2.01644 12.6326C1.96494 11.6842 1.9541 11.3996 1.9541 8.9955C1.9541 6.5925 1.96494 6.309 2.01644 5.36062C2.06522 4.48312 2.24139 4.00612 2.39045 3.68887C2.58695 3.26925 2.82274 2.96887 3.20218 2.65387C3.58161 2.33888 3.94208 2.14425 4.4489 1.98112C4.83105 1.85738 5.40427 1.71113 6.46127 1.67062C7.46136 1.63238 7.84892 1.62113 9.86943 1.62V1.62225ZM16.6288 3.11625C16.458 3.11625 16.2888 3.14419 16.131 3.19846C15.9731 3.25274 15.8297 3.33229 15.7089 3.43257C15.5881 3.53286 15.4923 3.65192 15.4269 3.78295C15.3615 3.91398 15.3279 4.05442 15.3279 4.19625C15.3279 4.33808 15.3615 4.47852 15.4269 4.60955C15.4923 4.74058 15.5881 4.85964 15.7089 4.95993C15.8297 5.06021 15.9731 5.13976 16.131 5.19404C16.2888 5.24831 16.458 5.27625 16.6288 5.27625C16.9739 5.27625 17.3047 5.16246 17.5487 4.95993C17.7927 4.75739 17.9298 4.48268 17.9298 4.19625C17.9298 3.90982 17.7927 3.63511 17.5487 3.43257C17.3047 3.23004 16.9739 3.11625 16.6288 3.11625ZM10.8424 4.3785C10.104 4.36894 9.37059 4.48142 8.68501 4.70941C7.99943 4.9374 7.37533 5.27633 6.84904 5.70648C6.32276 6.13662 5.9048 6.64939 5.61952 7.21492C5.33423 7.78045 5.18731 8.38744 5.18731 9.00056C5.18731 9.61368 5.33423 10.2207 5.61952 10.7862C5.9048 11.3517 6.32276 11.8645 6.84904 12.2946C7.37533 12.7248 7.99943 13.0637 8.68501 13.2917C9.37059 13.5197 10.104 13.6322 10.8424 13.6226C12.304 13.6037 13.698 13.1084 14.7235 12.2437C15.749 11.3789 16.3238 10.2141 16.3238 9.00056C16.3238 7.78706 15.749 6.62221 14.7235 5.75747C13.698 4.89272 12.304 4.39743 10.8424 4.3785ZM10.8424 5.99963C11.8009 5.99963 12.7202 6.31573 13.398 6.87841C14.0758 7.44109 14.4565 8.20425 14.4565 9C14.4565 9.79575 14.0758 10.5589 13.398 11.1216C12.7202 11.6843 11.8009 12.0004 10.8424 12.0004C9.88388 12.0004 8.96461 11.6843 8.28683 11.1216C7.60905 10.5589 7.22827 9.79575 7.22827 9C7.22827 8.20425 7.60905 7.44109 8.28683 6.87841C8.96461 6.31573 9.88388 5.99963 10.8424 5.99963Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_763_343">
                    <rect width="21.6821" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span>
              <svg
                width="24"
                height="19"
                viewBox="0 0 24 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6105 1.58496C6.26856 1.58496 1.9375 5.12925 1.9375 9.50084C1.9375 13.4513 5.47432 16.7256 10.0995 17.3217V11.7895H7.64227V9.50084H10.0995V7.75679C10.0995 5.77129 11.5438 4.67642 13.7524 4.67642C14.8107 4.67642 15.9194 4.83079 15.9194 4.83079V6.7775H14.6966C13.497 6.7775 13.1216 7.38867 13.1216 8.01488V9.49925H15.8023L15.3737 11.788H13.1216V17.3201C17.7468 16.7272 21.2836 13.452 21.2836 9.50084C21.2836 5.12925 16.9525 1.58496 11.6105 1.58496Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>
              <svg
                width="25"
                height="19"
                viewBox="0 0 25 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.07378 5.69773C6.30432 5.69773 7.30186 4.92221 7.30186 3.96557C7.30186 3.00892 6.30432 2.2334 5.07378 2.2334C3.84325 2.2334 2.8457 3.00892 2.8457 3.96557C2.8457 4.92221 3.84325 5.69773 5.07378 5.69773Z"
                  fill="white"
                />
                <path
                  d="M9.40685 7.0102V16.6202H13.2449V11.8679C13.2449 10.6139 13.5483 9.39945 15.5483 9.39945C17.5208 9.39945 17.5452 10.8332 17.5452 11.947V16.621H21.3853V11.3509C21.3853 8.76216 20.6684 6.77271 16.7764 6.77271C14.9078 6.77271 13.6553 7.56991 13.1431 8.32437H13.0911V7.0102H9.40685ZM3.15234 7.0102H6.99649V16.6202H3.15234V7.0102Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>
              <svg
                width="25"
                height="16"
                viewBox="0 0 25 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.6821 14H19.273V5.25L12.0456 9L4.81825 5.25V14H2.40912V2H3.8546L12.0456 6.25L20.2366 2H21.6821V14ZM21.6821 0H2.40912C1.07206 0 0 0.89 0 2V14C0 14.5304 0.253817 15.0391 0.705616 15.4142C1.15741 15.7893 1.77018 16 2.40912 16H21.6821C22.321 16 22.9338 15.7893 23.3856 15.4142C23.8374 15.0391 24.0912 14.5304 24.0912 14V2C24.0912 1.46957 23.8374 0.960859 23.3856 0.585786C22.9338 0.210714 22.321 0 21.6821 0Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="closing-line"></div>
        <div className="copyright">
          <p>© 2022 Lampnets. All Right Reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;

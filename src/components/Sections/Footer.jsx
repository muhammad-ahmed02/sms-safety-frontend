import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper
            className="flexSpaceCenter"
            style={{ padding: "30px 0" }}
          >
            <Link
              className="flexCenter animate pointer"
              to="home"
              smooth={true}
              offset={-80}
            >
              <LogoImg width="auto" height="20px" />
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} -{" "}
              <span className="purpleColor font13">SMS SAFETY</span> All Right
              Reserved
            </StyleP>

            <Link
              className="whiteColor animate pointer font13"
              to="home"
              smooth={true}
              offset={-80}
            >
              Back to top
            </Link>
          </InnerWrapper>
          <InnerWrapper
            className="flexCenter flexColumn"
            style={{ padding: "30px 0" }}
          >
            <StyleP className="whiteColor font18">
              Sheikh Muhammad Saeed & Sons
            </StyleP>
            <StyleP className="whiteColor font18">
              Korangi Industrial Area Plot # 402 Sector 7/A Line # 5th Karachi
              Pakistan
            </StyleP>
            <StyleP className="whiteColor font18">
              <a className="whiteColor" href="mailto:smsleather@gmail.com">smsleather@gmail.com</a>
            </StyleP>
            <StyleP className="whiteColor font18">
              +92-333-2119419 Call/WhatsApp
            </StyleP>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;

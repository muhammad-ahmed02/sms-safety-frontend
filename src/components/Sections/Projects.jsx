import React from "react";
import styled from "styled-components";
// import { Link } from "react-scroll";
// Components
import ProjectBox from "../Elements/ProjectBox";
// import FullButton from "../Buttons/FullButton";
import { products } from "../../Datalist";
import AddImage2 from "../../assets/img/add/add2.png";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="yellowBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Why choose us?</h1>
            <p className="font16">
              We are manufacturer of leather and we are manufacturing leather
              gloves in our own tannery and factories in Karachi and Sialkot.
              <br />
              We are also importing from Europe the raw materials that are being
              used in manufacturing of gloves.
            </p>
          </HeaderInfo>
          {products.map((product, i) => (
            <div key={i} className="row textCenter">
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <ProjectBox
                  img={product.link1}
                  title={product.name1}
                  text={product.details1}
                />
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <ProjectBox
                  img={product.link2}
                  title={product.name2}
                  text={product.details2}
                />
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <ProjectBox
                  img={product.link3}
                  title={product.name3}
                  text={product.details3}
                />
              </div>
            </div>
          ))}

          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}></div>
          </div>
        </div>
      </div>
      <div className="yellowBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img
                    className="radius8"
                    src={AddImage2}
                    alt="add"
                    height="607px"
                  />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">A few words about company</h4>
              <h2 className="font40 extraBold">Try before you buy</h2>
              <p className="font15">
                We are regularly visiting Dubai and Germany dussaldof exhibition
                to meet our customers and friends. Our team is frequently
                visiting Europe. If you want to meet us than contact us so that
                we can schedule our meetup in our next visit.
              </p>
              <ButtonsRow
                className="flexNullCenter"
                style={{ margin: "30px 0" }}
              >
                {/* <div style={{ width: "190px" }}>
                  <FullButton title="Get Started" />
                </div> */}
                {/* <div style={{ width: "200px" }}>
                  <Link
                    activeClass="active"
                    style={{ padding: "10px 0px" }}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    <FullButton title="Contact Us" border />
                  </Link>
                </div> */}
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -150px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;

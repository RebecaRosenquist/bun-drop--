import React from "react";
import Header from "../UIComponents/Header";

//Css import
import "./home.css";

//image import
import logo from "../logo black.png";

function Home() {
  return (
    <div
      style={{
        display: "flex",

        flexDirection: "column",
      }}
    >
      <div className="MainHomeContainer">
        <div className="testHome">
          <h1 style={{ backgroundColor: "#292929" }}>
            Welcome to Bun Drop 🤟{" "}
          </h1>
          <div className="TextContainer">
            <hr className="hrr" />
            <div className="OneItemm">
              <div style={{ backgroundColor: "#D9D9D9" }}>
                <h2>Drop It like it's hot💥</h2>
                <h4 style={{ backgroundColor: "#D9D9D9" }}>
                  This is definently the coolest way of getting super-nice food
                  transfered byair to your doorstep. Our drowners take the
                  maximum of 20 minuts to deliver. If your wan a speciall order
                  to your balcony so just give us a call.
                </h4>
                <div
                  className="ContactInformationDivs"
                  style={{ backgroundColor: "#D9D9D9" }}
                >
                  <div
                    className="ImgDiv"
                    style={{ backgroundColor: "#D9D9D9" }}
                  >
                    <img className="Logo" src={logo} alt="logo" />
                  </div>
                  <div style={{ backgroundColor: "#D9D9D9" }}>
                    <h5
                      style={{
                        backgroundColor: "#D9D9D9",
                        fontWeight: "bolder",
                      }}
                    >
                      Contact information:
                    </h5>
                    <h5 style={{ backgroundColor: "#D9D9D9" }}>
                      ✆ Phone: 0706-342325
                    </h5>
                    <h5 style={{ backgroundColor: "#D9D9D9" }}>
                      ✉ Email: bun-drop@info.com
                    </h5>
                    <h5 style={{ backgroundColor: "#D9D9D9" }}>
                      Adress: Västra stallmästaregatan 7, Malmö
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <hr className="hrr" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

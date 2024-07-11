import { useState } from 'react';
import { useStore, StoreProvider } from "../Store/Store"

import Product from "./Navi+Hero(product)";
import Company from "./Navi+Hero(Company)";
import Customers from "./Navi+Hero(Customers)";
import Pricing from "./Pricing";
import Support from "./Support";
import Cookie from "./Navi+Hero cookie";

export default function Counter({
	children
}) {
    const [state, dispatch] = useStore();
    console.log(state)

	return (
    <>
      <div>
        {
          state && state.state == 'Products' ? <Product /> 
          : state && state.state == 'Company' || state && state.state == 'Company, Contactus' ? <Company /> 
          : state && state.state== 'Customers' ? <Customers /> 
          : state && state.state == 'Pricing' ? <Pricing /> 
          :  state && state.state == 'Support' ? <Support /> 
          : null
        }
        {/* {state && state.state == 'Products' ? <Product /> : null} */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column",
            position: "relative",
            height: "100%",
            width: "100%",
          }}
        >
          <div
            style={{
              position: "relative",
              textAlign: "center",
              top: "-40.562rem",
              width: "100%",
              height: "130.431rem",
              fontSize: "4rem",
              color: "#989898",
              fontFamily: "ABeeZee",
            }}
          >
            <img
              style={{
                position: "absolute",
                padding: "5%",
                top: "17.456rem",
                left: "4rem",
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              alt=""
              src="/shapes@2x.png"
            />
            <img
              style={{
                position: "absolute",
                top: "0rem",
                left: "0rem",
                width: "100%",
                height: "100%",
                opacity: "0.7",
              }}
              alt=""
              src="/glassmorphism.svg"
            />
            <div
              style={{
                position: "absolute",
                top: "62%",
                left: "80%",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "0.625rem",
              }}
            >
              <div
                style={{
                  width: "5.856rem",
                  boxShadow: "0px 0px 40.14px rgba(6, 28, 61, 0.1)",
                  borderRadius: "217.41px",
                  backgroundColor: "#fff",
                  height: "5.856rem",
                  zIndex: "0",
                }}
              />
              <img
                style={{
                  width: "5rem",
                  position: "absolute",
                  margin: "0",
                  top: "calc(50% - 39.4px)",
                  left: "calc(50% - 40.2px)",
                  borderRadius: "30px",
                  height: "4.919rem",
                  overflow: "hidden",
                  flexShrink: "0",
                  zIndex: "1",
                }}
                alt=""
                src="/-ol--1-1.svg"
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "63.25rem",
                left: "77%",
                boxShadow: "0px 0px 40.14px rgba(6, 28, 61, 0.1)",
                borderRadius: "217.41px",
                backgroundColor: "#fff",
                width: "3.763rem",
                height: "3.763rem",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.043rem",
                boxSizing: "border-box",
              }}
            >
              <img
                style={{
                  width: "3.125rem",
                  position: "relative",
                  height: "3.125rem",
                }}
                alt=""
                src="/group-42.svg"
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "53%",
                left: "86%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "5.856rem",
                  boxShadow: "0px 0px 40.14px rgba(6, 28, 61, 0.1)",
                  borderRadius: "217.41px",
                  backgroundColor: "#fff",
                  height: "5.856rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.937rem",
                  boxSizing: "border-box",
                }}
              >
                <img
                  style={{
                    width: "5.625rem",
                    position: "relative",
                    borderRadius: "30px",
                    height: "5.625rem",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                  alt=""
                  src="/-ol02-1.svg"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "63%",
                left: "93%",
                boxShadow: "0px 0px 40.14px rgba(6, 28, 61, 0.1)",
                borderRadius: "217.41px",
                backgroundColor: "#fff",
                width: "3.763rem",
                height: "3.763rem",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  width: "3.438rem",
                  position: "relative",
                  height: "3.363rem",
                }}
                alt=""
                src="/group-38.svg"
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "70%",
                left: "84%",
                boxShadow: "0px 0px 40.14px rgba(6, 28, 61, 0.1)",
                borderRadius: "217.41px",
                backgroundColor: "#fff",
                width: "5.019rem",
                height: "5.019rem",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.256rem",
                boxSizing: "border-box",
              }}
            >
              <img
                style={{
                  width: "4.375rem",
                  position: "relative",
                  height: "4.375rem",
                }}
                alt=""
                src="/group-34.svg"
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "70%",
                left: "23%",
                width: "8.125rem",
                height: "8.125rem",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "5.856rem",
                  boxShadow: "0px 0px 40.14px rgba(6, 28, 61, 0.1)",
                  borderRadius: "217.41px",
                  backgroundColor: "#fff",
                  height: "5.856rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.937rem",
                  boxSizing: "border-box",
                }}
              >
                <img
                  style={{
                    width: "5rem",
                    position: "relative",
                    height: "4.919rem",
                  }}
                  alt=""
                  src="/group-37.svg"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "66.125rem",
                left: "23%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "5.856rem",
                  boxShadow: "0px 0px 40.14px rgba(6, 28, 61, 0.1)",
                  borderRadius: "217.41px",
                  backgroundColor: "#fff",
                  height: "5.856rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.937rem",
                  boxSizing: "border-box",
                }}
              >
                <img
                  style={{
                    width: "5rem",
                    position: "relative",
                    height: "5rem",
                  }}
                  alt=""
                  src="/group-36.svg"
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "61%",
                left: "16%",
                boxShadow: "0px 0px 40.14px rgba(6, 28, 61, 0.1)",
                borderRadius: "217.41px",
                backgroundColor: "#fff",
                width: "5.019rem",
                height: "5.019rem",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.256rem",
                boxSizing: "border-box",
              }}
            >
              <img
                style={{
                  width: "4.688rem",
                  position: "relative",
                  height: "4.688rem",
                }}
                alt=""
                src="/group-43.svg"
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "72%",
                left: "12%",
                boxShadow: "0px 0px 40.14px rgba(6, 28, 61, 0.1)",
                borderRadius: "217.41px",
                backgroundColor: "#fff",
                width: "5.019rem",
                height: "5.019rem",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.256rem",
                boxSizing: "border-box",
              }}
            >
              <img
                style={{
                  width: "4.063rem",
                  position: "relative",
                  borderRadius: "25px",
                  height: "4.063rem",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
                alt=""
                src="/-ol09-1.svg"
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "60.188rem",
                left: "12%",
                boxShadow: "0px 0px 40.14px rgba(6, 28, 61, 0.1)",
                borderRadius: "217.41px",
                backgroundColor: "#fff",
                width: "5rem",
                height: "5rem",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.043rem",
                boxSizing: "border-box",
              }}
            >
              <img
                style={{
                  width: "4.688rem",
                  position: "relative",
                  borderRadius: "30px",
                  height: "4.688rem",
                }}
                alt=""
                src="/group-39.svg"
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "60rem",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.25rem",
              }}
            >
              <div
                style={{
                  width: "50rem",
                  position: "relative",
                  height: "6.875rem",
                  fontSize: "7.5rem",
                  fontFamily: "Dongle",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0.563rem",
                    left: "0rem",
                    letterSpacing: "0.02em",
                    background:
                      "linear-gradient(95.67deg, #63b8ac 38.03%, #1d3765 73.11%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50rem",
                    height: "6.313rem",
                  }}
                >
                  Dental VLM.
                </div>
                <img
                  style={{
                    position: "absolute",
                    top: "-1.5rem",
                    left: "16rem",
                    width: "44rem",
                    height: "11rem",
                  }}
                  alt=""
                  src="/group-48.svg"
                />
              </div>
              <div
                style={{
                  width: "50rem",
                  position: "relative",
                  letterSpacing: "0.02em",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ width: "100%" }}>
                  <span>{`Radiography `}</span>
                  <span style={{ color: "#323030" }}>Diagnose</span>
                  <span>{` `}</span>
                </span>
              </div>
              <div
                style={{
                  width: "61.75rem",
                  position: "relative",
                  letterSpacing: "0.02em",
                  color: "#2b2a2a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Sensitive, Quickly and Reliably
              </div>
              <div
                style={{
                  width: "50rem",
                  position: "relative",
                  fontSize: "1.25rem",
                  letterSpacing: "0.72px",
                  lineHeight: "2.063rem",
                  color: "#878484",
                  display: "inline-block",
                }}
              >
                <p style={{ margin: "0" }}>
                  Automatically diagnose 18 pathological findings
                </p>
                <p style={{ margin: "0" }}>
                  Especially on periodontal 4 stage efficiently dentist
                </p>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "90.625rem",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.625rem",
                fontSize: "1.25rem",
                color: "#fff",
                fontFamily: "Inter",
              }}
            >
              <div
                style={{
                  width: "10.5rem",
                  position: "relative",
                  height: "3.5rem",
                }}
              >
                <b
                  style={{
                    position: "absolute",
                    top: "0rem",
                    left: "0.179rem",
                    lineHeight: "1rem",
                    display: "flex",
                    background:
                      "linear-gradient(95.67deg, #63b8ac 38.03%, #1d3765 73.11%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "10.175rem",
                    height: "3.5rem",
                  }}
                >
                  Learn More
                </b>
                <div
                  style={{
                    position: "absolute",
                    top: "0rem",
                    left: "0rem",
                    borderRadius: "10px",
                    border: "2px solid #63b8ac",
                    boxSizing: "border-box",
                    width: "10.5rem",
                    height: "3.5rem",
                  }}
                />
              </div>
              <div
                style={{
                  width: "11.306rem",
                  position: "relative",
                  height: "3.5rem",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0rem",
                    left: "0rem",
                    borderRadius: "10px",
                    background:
                      "linear-gradient(91.85deg, #217ca8 26.89%, #63b8ac 66.9%)",
                    width: "11.306rem",
                    height: "3.5rem",
                  }}
                />
                <b
                  style={{
                    position: "absolute",
                    top: "0rem",
                    left: "0.134rem",
                    lineHeight: "1rem",
                    display: "flex",
                    whiteSpace: "pre-wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "11.175rem",
                    height: "3.5rem",
                  }}
                >{`Try For Free  ->`}</b>
              </div>
            </div>
          </div>
          <footer
            style={{
              position: "absolute",
              bottom: "61rem",
              width: "100%",
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "0rem 1.25rem",
              boxSizing: "border-box",
              maxWidth: "100%",
              textAlign: "center",
              fontSize: "1rem",
              color: "#9ba4b1",
              fontFamily: "Inter",
            }}
          >
            <div
              style={{
                width: "82.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "1.875rem 0rem 3.125rem",
                boxSizing: "border-box",
                gap: "0.75rem",
                minHeight: "8.75rem",
                maxWidth: "100%",
                zIndex: "2",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "1.5rem",
                  fontWeight: "500",
                }}
              >
                Scroll down
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  padding: "0rem 1.25rem",
                }}
              >
                <img
                  style={{
                    height: "1.5rem",
                    width: "1.5rem",
                    position: "relative",
                  }}
                  loading="lazy"
                  alt=""
                  src="/solid32arrowdown.svg"
                />
              </div>
            </div>
          </footer>
          <div
            style={{
              position: "absolute",
              top: "calc(50% + -2rem)",
              left: "calc(50% - 536.5px)",
              fontSize: "11.875rem",
              letterSpacing: "-0.04em",
              lineHeight: "100%",
              fontFamily: "Alata",
              color: "transparent",
              opacity: "0.1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64rem",
              height: "6.375rem",
              WebkitTextStroke: "1px #fff",
              WebkitTextStrokeColor: "#000",

              // display: "flex",
              // width: "1024px",
              // height: "102px",
              // flexdirection: "column",
              // justifycontent: "center",
              // flexshrink: "0",
              // textalign: "center",
              // webkittextstrokewidth: "1",
              // webkittextstrokecolor: "#000",
              // fontfamily: "Alata",
              // fontsize: "190px",
              // fontstyle: "normal",
              // fontweight: "400",
              // lineheight: "100%", /* 190px */
              // letterspacing: "-6.65px",
            }}
          >
            OrininTechX
          </div>
        </div>
        
        {/*----- cook ------ */}
        <div
          style={{
            position: "absolute",
            top: "99.563rem",
            backgroundColor: "#2a3342",
            width: "100%",
            height: "8.5rem",
            textAlign: "left",
            fontSize: "1rem",
            color: "#8896ab",
            fontFamily: "Poppins",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0rem",
              left: "0rem",
              width: "100%",
              height: "8.5rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0rem",
                left: "0rem",
                boxShadow: "0px 1px 2px rgba(85, 105, 135, 0.1)",
                backgroundColor: "#2a3342",
                border: "1px solid #eef0f3",
                boxSizing: "border-box",
                width: "100%",
                height: "8.5rem",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "2.5rem",
                left: "9.438rem",
                width: "34.25rem",
                height: "3.5rem",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0rem",
                  left: "0rem",
                  lineHeight: "1.5rem",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "34.25rem",
                }}
              >
                We use third-party cookies in order to personalise your
                experience.
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "2rem",
                  left: "0rem",
                  lineHeight: "1.5rem",
                  fontWeight: "500",
                  color: "#22c55e",
                  display: "inline-block",
                  width: "11.438rem",
                }}
              >
                Read our cookie policy
              </div>
              <img
                style={{
                  position: "absolute",
                  top: "2rem",
                  left: "11.938rem",
                  width: "1.5rem",
                  height: "1.5rem",
                  overflow: "hidden",
                  objectFit: "contain",
                }}
                alt=""
                src="/down-arrow--24--outline@2x.png"
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "2.813rem",
                left: "104.813rem",
                width: "11.938rem",
                height: "2.875rem",
                color: "#f0fdf4",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0rem",
                  left: "7rem",
                  boxShadow: "0px 1px 2px rgba(105, 81, 255, 0.05)",
                  borderRadius: "6px",
                  backgroundColor: "#22c55e",
                  height: "2.875rem",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.75rem 1.125rem",
                  boxSizing: "border-box",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    lineHeight: "1.5rem",
                    fontWeight: "500",
                  }}
                >
                  Allow
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "0rem",
                  left: "0rem",
                  boxShadow: "0px 1px 2px rgba(105, 81, 255, 0.05)",
                  borderRadius: "6px",
                  backgroundColor: "#4d5f7a",
                  border: "1px solid #333f51",
                  boxSizing: "border-box",
                  height: "2.875rem",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.75rem 1.125rem",
                  gap: "0.5rem",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    lineHeight: "1.5rem",
                    fontWeight: "500",
                  }}
                >
                  Decline
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
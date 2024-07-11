import Contactus from "./Contact us - country select";
import Aboutus from "./About us - Main";
import { useStore } from "../Store/Store"

const NaviHeroCompany = () => {
    const [state, dispatch] = useStore();
    return (
      <div
        style={{
          width: "100%",
          position: "absolute",
          backgroundColor: "#fff",
          height: "67.5rem",
          overflow: "hidden",
          textAlign: "center",
          fontSize: "1.375rem",
          color: "#000",
          fontFamily: "Inter",
        }}
      >
        {
          state && state.state == 'Company, Contactus' ? <Contactus /> : state && state.state == 'Company, Aboutus' ? <Aboutus /> : null
        }
        <div
          style={{
            zIndex: "2",
            position: "absolute",
            display: "inline-block",
            left: "0rem",
            width: "100%",
            height: "47.125rem",
            textAlign: "left",
            color: "rgba(0, 0, 0, 0.7)",
            fontFamily: "Poppins",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0rem",
              left: "0rem",
              width: "100%",
              height: "56rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "56rem",
                left: "0rem",
                boxShadow: "0px 8px 35px rgba(0, 0, 0, 0.3)",
                borderRadius: "0px 0px 20px 20px",
                backgroundColor: "#fff",
                width: "100%",
                height: "2.313rem",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "0rem",
                left: "0rem",
                backgroundColor: "#fff",
                borderTop: "1px solid rgba(0, 0, 0, 0.25)",
                boxSizing: "border-box",
                width: "100%",
                height: "56rem",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "3.438rem",
              left: "18.75rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                width: "37.063rem",
                position: "relative",
                fontSize: "1.5rem",
                letterSpacing: "0.02em",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
              }}
            >
              Company
            </div>
            <div
              style={{
                width: "37.063rem",
                position: "relative",
                height: "5.813rem",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1.875rem",
                  left: "0rem",
                  width: "37.063rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "1.562rem",
                }}
              >
                <img
                  style={{
                    width: "2rem",
                    position: "relative",
                    height: "2rem",
                    objectFit: "cover",
                  }}
                  alt=""
                  src="/employee-1@2x.png"
                />
                <a style={{ position: "relative", letterSpacing: "0.02em" }} href="/aboutus">
                  About Us
                </a>
                <img
                  style={{
                    width: "1.25rem",
                    position: "relative",
                    height: "1.25rem",
                    objectFit: "cover",
                  }}
                  alt=""
                  src="/uparrow-1@2x.png"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "3.938rem",
                  left: "0rem",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                  boxSizing: "border-box",
                  width: "37.063rem",
                  height: "1.875rem",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "0rem",
                  left: "0rem",
                  width: "37.063rem",
                  height: "1.875rem",
                }}
              />
            </div>
            <div
              style={{
                width: "37.063rem",
                position: "relative",
                height: "5.813rem",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1.875rem",
                  left: "0rem",
                  width: "37.063rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1.562rem",
                  }}
                >
                  <img
                    style={{
                      width: "2rem",
                      position: "relative",
                      height: "2rem",
                    }}
                    alt=""
                    src="/box-open-light.svg"
                  />
                  <div style={{ position: "relative", letterSpacing: "0.02em" }}>
                    Careers
                  </div>
                  <div
                    style={{
                      width: "1.25rem",
                      position: "relative",
                      height: "1.25rem",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "3.938rem",
                  left: "0rem",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                  boxSizing: "border-box",
                  width: "37.063rem",
                  height: "1.875rem",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "0rem",
                  left: "0rem",
                  width: "37.063rem",
                  height: "1.875rem",
                }}
              />
            </div>
            <div
              style={{
                width: "37.063rem",
                position: "relative",
                height: "5.813rem",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1.875rem",
                  left: "0rem",
                  width: "37.063rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "1.562rem",
                }}
              >
                <img
                  style={{ width: "2rem", position: "relative", height: "2rem" }}
                  alt=""
                  src="/flag-finish-light.svg"
                />
                <div
                  style={{
                    width: "23.75rem",
                    position: "relative",
                    letterSpacing: "0.02em",
                    display: "flex",
                    alignItems: "center",
                    flexShrink: "0",
                  }}
                >
                  Press
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "3.938rem",
                  left: "0rem",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                  boxSizing: "border-box",
                  width: "37.063rem",
                  height: "1.875rem",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "0rem",
                  left: "0rem",
                  width: "37.063rem",
                  height: "1.875rem",
                }}
              />
            </div>
            <div
              style={{
                width: "37.063rem",
                position: "relative",
                height: "5.813rem",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1.875rem",
                  left: "0rem",
                  width: "37.063rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1.562rem",
                  }}
                >
                  <img
                    style={{
                      width: "2rem",
                      position: "relative",
                      height: "2rem",
                      objectFit: "cover",
                    }}
                    alt=""
                    src="/handshake-1@2x.png"
                  />
                  <div style={{ position: "relative", letterSpacing: "0.02em" }}>
                    Become a partner
                  </div>
                  <div
                    style={{
                      width: "1.25rem",
                      position: "relative",
                      height: "1.25rem",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "3.938rem",
                  left: "0rem",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                  boxSizing: "border-box",
                  width: "37.063rem",
                  height: "1.875rem",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "0rem",
                  left: "0rem",
                  width: "37.063rem",
                  height: "1.875rem",
                }}
              />
            </div>
            <div
              style={{
                width: "37.063rem",
                position: "relative",
                height: "5.813rem",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1.875rem",
                  left: "0rem",
                  width: "37.063rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "1.562rem",
                }}
              >
                <img
                  style={{ width: "2rem", position: "relative", height: "2rem" }}
                  alt=""
                  src="/file-dock-search.svg"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1.562rem",
                  }}
                >
                  <div style={{ position: "relative", letterSpacing: "0.02em" }}>
                    Documents
                  </div>
                  <div
                    style={{
                      width: "1.25rem",
                      position: "relative",
                      height: "1.25rem",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "3.938rem",
                  left: "0rem",
                  width: "37.063rem",
                  height: "1.875rem",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "0rem",
                  left: "0rem",
                  width: "37.063rem",
                  height: "1.875rem",
                }}
              />
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "3.438rem",
              left: "60.938rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                width: "37.063rem",
                position: "relative",
                fontSize: "1.5rem",
                letterSpacing: "0.02em",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
              }}
            >
              Contact
            </div>
            <div
              style={{
                width: "37.063rem",
                position: "relative",
                height: "5.813rem",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1.875rem",
                  left: "0rem",
                  width: "37.063rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "1.562rem",
                }}
              >
                <img
                  style={{
                    width: "2rem",
                    position: "relative",
                    height: "2rem",
                    objectFit: "cover",
                  }}
                  alt=""
                  src="/employee-1@2x.png"
                />
                <a style={{ position: "relative", letterSpacing: "0.02em" }} onClick={() => dispatch({ type: 'set_menu', payload: 'Company, Contactus'})}>
                  Contact Us
                </a>
                <img
                  style={{
                    width: "1.25rem",
                    position: "relative",
                    height: "1.25rem",
                    objectFit: "cover",
                  }}
                  alt=""
                  src="/uparrow-1@2x.png"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "3.938rem",
                  left: "0rem",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                  boxSizing: "border-box",
                  width: "37.063rem",
                  height: "1.875rem",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "0rem",
                  left: "0rem",
                  width: "37.063rem",
                  height: "1.875rem",
                }}
              />
            </div>
            <div
              style={{
                width: "37.063rem",
                position: "relative",
                height: "5.813rem",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1.875rem",
                  left: "0rem",
                  width: "37.063rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1.562rem",
                  }}
                >
                  <img
                    style={{
                      width: "2rem",
                      position: "relative",
                      height: "2rem",
                      objectFit: "cover",
                    }}
                    alt=""
                    src="/support-1@2x.png"
                  />
                  <a style={{ position: "relative", letterSpacing: "0.02em" }} href="/support">
                    Support
                  </a>
                  <div
                    style={{
                      width: "1.25rem",
                      position: "relative",
                      height: "1.25rem",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "3.938rem",
                  left: "0rem",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                  boxSizing: "border-box",
                  width: "37.063rem",
                  height: "1.875rem",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "0rem",
                  left: "0rem",
                  width: "37.063rem",
                  height: "1.875rem",
                }}
              />
            </div>
            <div
              style={{
                width: "37.063rem",
                position: "relative",
                height: "5.813rem",
                display: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1.875rem",
                  left: "0rem",
                  width: "37.063rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "23.75rem",
                    position: "relative",
                    letterSpacing: "0.02em",
                    display: "flex",
                    alignItems: "center",
                    flexShrink: "0",
                  }}
                >
                  Press
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "3.938rem",
                  left: "0rem",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                  boxSizing: "border-box",
                  width: "37.063rem",
                  height: "1.875rem",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "0rem",
                  left: "0rem",
                  width: "37.063rem",
                  height: "1.875rem",
                }}
              />
            </div>
            <div
              style={{
                width: "37.063rem",
                position: "relative",
                height: "5.813rem",
                display: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1.875rem",
                  left: "0rem",
                  width: "37.063rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "23.75rem",
                    position: "relative",
                    letterSpacing: "0.02em",
                    display: "flex",
                    alignItems: "center",
                    flexShrink: "0",
                  }}
                >
                  Become a partner
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "3.938rem",
                  left: "0rem",
                  width: "37.063rem",
                  height: "1.875rem",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "0rem",
                  left: "0rem",
                  width: "37.063rem",
                  height: "1.875rem",
                }}
              />
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "calc(50% + 27.6rem)",
              left: "calc(50% - 443px)",
              fontSize: "9.375rem",
              lineHeight: "100%",
              fontFamily: "Alata",
              color: "transparent",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "55.313rem",
              height: "6.438rem",
              WebkitTextStroke: "1px #f0eded",
            }}
          >
            OrininTechX
          </div>
        </div>
      </div>
    );
  };
  
  export default NaviHeroCompany;
  
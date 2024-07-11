import { useCallback } from "react";

const NaviHeroproduct = () => {
  const onDMedChatTextClick = useCallback(() => {
    // Please sync "Sub Menu(DMed Chat)" to the project
  }, []);

  const onDMedConverseTextClick = useCallback(() => {
    // Please sync "Sub Menu(DMed Converse)" to the project
  }, []);

  const onRadiographyDiagnoseTextClick = useCallback(() => {
    // Please sync "Sub Menu(radiography)" to the project
  }, []);

  return (
    <div
      style={{
        zIndex: "2",
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
      <div
        style={{
          position: "absolute",
          left: "0rem",
          width: "100%",
          height: "53.813rem",
          textAlign: "left",
          fontSize: "1.5rem",
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
            height: "53.813rem",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "48.813rem",
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
              height: "49.813rem",
            }}
          />
        </div>
        <conten style={{
              position: "absolute",
              top: "3.125rem",
              width: "66%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}>
          <div
            style={{
              position: "absolute",
              top: "3.125rem",
              left: "60rem",
              width: "27.688rem",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                width: "27.688rem",
                position: "relative",
                letterSpacing: "0.02em",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                flexShrink: "0",
              }}
            >
              OriginTechX AI Native Hub
            </div>
            <div
              style={{
                width: "27.688rem",
                position: "relative",
                height: "7rem",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1.875rem",
                  left: "0rem",
                  width: "27.688rem",
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
                  src="/awareness-1@2x.png"
                />
                <a
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    cursor: "pointer",
                  }}
                  // onClick={onDMedChatTextClick}
                  href="/dmedchat"
                >
                  DMed Chat
                </a>
                <div
                  style={{
                    width: "1.25rem",
                    position: "relative",
                    height: "1.25rem",
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "3.875rem",
                  left: "0rem",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                  boxSizing: "border-box",
                  width: "27.688rem",
                  height: "3.125rem",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "0rem 0rem 0rem 3.562rem",
                  textAlign: "center",
                  fontSize: "1rem",
                  color: "rgba(0, 0, 0, 0.4)",
                }}
              >
                <div style={{ position: "relative", letterSpacing: "0.02em" }}>
                  Chat with Dental Vertical Large Model(VLM)
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "0rem",
                  left: "0rem",
                  width: "27.688rem",
                  height: "1.875rem",
                }}
              />
            </div>
            <div
              style={{
                width: "27.688rem",
                position: "relative",
                height: "7rem",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1.875rem",
                  left: "0rem",
                  width: "27.688rem",
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
                  src="/target-1@2x.png"
                />
                <div style={{ position: "relative", letterSpacing: "0.02em" }}>
                  DMed Focus
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "3.875rem",
                  left: "0rem",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                  boxSizing: "border-box",
                  width: "27.688rem",
                  height: "3.125rem",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "0rem 0rem 0rem 3.562rem",
                  textAlign: "center",
                  fontSize: "1rem",
                  color: "rgba(0, 0, 0, 0.4)",
                }}
              >
                <div style={{ position: "relative", letterSpacing: "0.02em" }}>
                  Smart foces on your attention
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "0rem",
                  left: "0rem",
                  width: "27.688rem",
                  height: "1.875rem",
                }}
              />
            </div>
            <div
              style={{
                width: "27.688rem",
                position: "relative",
                height: "7.313rem",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1.875rem",
                  left: "0rem",
                  width: "27.688rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
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
                  src="/book-1@2x.png"
                />
                <a
                  style={{
                    width: "23.75rem",
                    position: "relative",
                    letterSpacing: "0.02em",
                    display: "flex",
                    alignItems: "center",
                    flexShrink: "0",
                    cursor: "pointer",
                  }}
                  href="/dmedconverse"
                  // onClick={onDMedConverseTextClick}
                >
                  DMed Converse
                </a>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "4.188rem",
                  left: "0rem",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                  boxSizing: "border-box",
                  width: "27.688rem",
                  height: "3.125rem",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "0rem 0rem 0rem 3.562rem",
                  textAlign: "center",
                  fontSize: "1rem",
                  color: "rgba(0, 0, 0, 0.4)",
                }}
              >
                <div style={{ position: "relative", letterSpacing: "0.02em" }}>
                  Automate Unstructured to conserve with AI
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "0rem",
                  left: "0rem",
                  width: "27.688rem",
                  height: "1.875rem",
                }}
              />
            </div>
            <div
              style={{
                width: "27.688rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <div style={{ width: "32rem", height: "1.875rem" }} />
              <div
                style={{
                  width: "32rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
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
                  src="/download-1@2x.png"
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
                  <span style={{ width: "100%" }}>
                    <span>Apps</span>
                    <span style={{ fontSize: "1.75rem" }}>{` `}</span>
                  </span>
                </div>
              </div>
              <div
                style={{
                  width: "32rem",
                  height: "3.125rem",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "0rem 0rem 0rem 3.562rem",
                  boxSizing: "border-box",
                  textAlign: "center",
                  fontSize: "1rem",
                  color: "rgba(0, 0, 0, 0.4)",
                }}
              >
                <div style={{ position: "relative", letterSpacing: "0.02em" }}>
                  Try our apps today
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "3.125rem",
              left: "18.875rem",
              width: "31.563rem",
              height: "11.313rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0rem",
                left: "0rem",
                letterSpacing: "0.02em",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                width: "31.563rem",
              }}
            >
              Machine learning on Dental
            </div>
            <div
              style={{
                position: "absolute",
                top: "2.188rem",
                left: "0rem",
                width: "31.563rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <div style={{ width: "31.563rem", height: "1.875rem" }} />
              <div
                style={{
                  width: "31.563rem",
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
                  src="/dental-1@2x.png"
                />
                <a
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    cursor: "pointer",
                  }}
                  // onClick={onRadiographyDiagnoseTextClick}
                  href="/radiography"
                >{`Radiography Diagnose `}</a>
                <img
                  style={{
                    width: "2rem",
                    position: "relative",
                    height: "2rem",
                    objectFit: "cover",
                    transform: "rotate(-90deg)",
                  }}
                  alt=""
                  src="/solid32arrowdown.svg"
                />
              </div>
              <div
                style={{
                  width: "31.563rem",
                  height: "3.125rem",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "0rem 0rem 0rem 3.5rem",
                  boxSizing: "border-box",
                  textAlign: "center",
                  fontSize: "1rem",
                  color: "rgba(0, 0, 0, 0.4)",
                }}
              >
                <div style={{ position: "relative", letterSpacing: "0.02em" }}>
                  Dental radiography diagnose
                </div>
              </div>
              <div
                style={{
                  width: "31.563rem",
                  borderTop: "1px solid rgba(0, 0, 0, 0.2)",
                  boxSizing: "border-box",
                  height: "1.875rem",
                }}
              />
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "14.438rem",
              left: "18.875rem",
              width: "31.563rem",
              height: "9.188rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0rem",
                left: "0rem",
                letterSpacing: "0.02em",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                width: "31.563rem",
              }}
            >
              Fine-tune Model on Dental
            </div>
            <div
              style={{
                position: "absolute",
                top: "2.188rem",
                left: "0rem",
                width: "31.563rem",
                height: "7rem",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1.875rem",
                  left: "0rem",
                  width: "31.563rem",
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
                  src="/handpiece-1@2x.png"
                />
                <div style={{ position: "relative", letterSpacing: "0.02em" }}>
                  DEM Model
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "3.875rem",
                  left: "0rem",
                  width: "31.563rem",
                  height: "3.125rem",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "0rem 0rem 0rem 3.5rem",
                  boxSizing: "border-box",
                  textAlign: "center",
                  fontSize: "1rem",
                  color: "rgba(0, 0, 0, 0.4)",
                }}
              >
                <div style={{ position: "relative", letterSpacing: "0.02em" }}>
                  Fine-tune Dental Equipment Material Model
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "0rem",
                  left: "0rem",
                  width: "31.563rem",
                  height: "1.875rem",
                }}
              />
            </div>
          </div>
        </conten>
        <div
          style={{
            position: "absolute",
            top: "calc(50% + 264px)",
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

export default NaviHeroproduct;

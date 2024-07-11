import { useStore } from "../Store/Store";

const NavBar = (props) => {
  const [state, dispatch] = useStore();
  console.log(state)
  
  const normenucss = {
    textDecoration: "none",
    position: "relative",
    letterSpacing: "0.05em",
    color: "inherit",
    display: "inline-block",
    minWidth: "6.875rem",
    zIndex: "2",
  }
  const actmenucss = {
    textDecoration: "none",
    position: "relative",
    letterSpacing: "0.05em",
    fontweight: "600",
    color: "inherit",
    display: "inline-block",
    textshadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    minWidth: "6.813rem",
  }
  
  return (
    <header
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        boxSizing: "border-box",
        maxWidth: "100%",
        textAlign: "center",
        fontSize: "1.375rem",
        color: "#000",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "2.187rem",
          maxWidth: "100%",
          height: "6rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "1.25rem",
          }}
        >
          <img
            style={{
              height: "3.125rem",
              width: "3.125rem",
              position: "relative",
              objectFit: "cover",
              minHeight: "3.125rem",
              zIndex: "2",
            }}
            loading="lazy"
            alt=""
            src="/200x200-1@2x.png"
          />
          <div
            style={{
              position: "relative",
              top: "5px",
              filter: state && state.state == 'Products' ? "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" : "none",
              borderBottom: state && state.state == 'Products' ? "4px solid #000" : "none",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0.5rem 0.937rem 0.312rem",
              gap: "0.562rem",
              zIndex: "2",
            }}
            // onMouseLeave={(event ) => (dispatch({ type: 'set_menu', payload: null}), event.currentTarget.style = {filter: "0"})}
          >
            <a
              // style={{
              //   textDecoration: "none",
              //   position: "relative",
              //   letterSpacing: "0.05em",
              //   fontWeight: "600",
              //   color: "inherit",
              //   display: "inline-block",
              //   textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              //   minWidth: "6.813rem",
              // }}
              // href="/product"
              // onClick={() => localStorage.setItem("username", "john_doe")}
              onClick={() => state && state.state == 'Products' ? dispatch({ type: 'set_menu', payload: null}) : dispatch({ type: 'set_menu', payload: 'Products'})}
              style={state && state.state == 'Products' ? actmenucss : normenucss}
            //   onClick={() => dispatch({payload: 'Products'})}
            >
              Products
            </a>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0.468rem 0rem 0rem",
              }}
            >
              <img
                style={{
                  width: "1.125rem",
                  height: "1.125rem",
                  position: "relative",
                  objectFit: "contain",
                  transform: state && state.state == 'Products' ? "rotateX(180deg)" : "rotateX(0deg)",
                  transitionDelay: "0.2s"
                }}
                alt=""
                src="/downarrow-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            zIndex: "3",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0.5rem 0.937rem 0rem 0rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "0.562rem",
              filter: state && state.state == 'Customers' ? "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" : "none",
              borderBottom: state && state.state == 'Customers' ? "4px solid #000" : "none",
            }}
          >
            <a
              // style={{
              //   textDecoration: "none",
              //   position: "relative",
              //   letterSpacing: "0.05em",
              //   color: "inherit",
              //   display: "inline-block",
              //   minWidth: "6.875rem",
              //   zIndex: "2",
              // }}
              // href="/Customers"
              onClick={() => state && state.state == 'Customers' ? dispatch({ type: 'set_menu', payload: null}) : dispatch({ type: 'set_menu', payload: 'Customers'})}
              style={state && state.state == 'Customers' ? actmenucss : normenucss}
              // onClick={() => dispatch({payload: 'Customers'})}
            >
              Solutions
            </a>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0.468rem 0rem 0rem",
              }}
            >
              <img
                style={{
                  width: "1.125rem",
                  height: "1.125rem",
                  position: "relative",
                  objectFit: "cover",
                  zIndex: "2",
                  transform: state && state.state == 'Customers' ? "rotateX(180deg)" : "rotateX(0deg)",
                }}
                alt=""
                src="/downarrow-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            zIndex: "2",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0.5rem 0.937rem 0rem 0rem",
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
          // onMouseLeave={() => dispatch({ type: 'set_menu', payload: null})}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "3.062rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "0.562rem",
                filter: state && state.state == 'Company' ? "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" : "none",
                borderBottom: state && state.state == 'Company' ? "4px solid #000" : "none",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  position: "relative",
                  letterSpacing: "0.05em",
                  color: "inherit",
                  display: "inline-block",
                  minWidth: "7.75rem",
                  zIndex: "3",
                }}
                // href="/Company"
                onClick={() => state && state.state == 'Company' ? dispatch({ type: 'set_menu', payload: null}) : dispatch({ type: 'set_menu', payload: 'Company'})}
                // onClick={() => dispatch({payload: 'Customers'})}
              >
                Resources
              </a>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0.468rem 0rem 0rem",
                }}
              >
                <img
                  style={{
                    width: "1.125rem",
                    height: "1.125rem",
                    position: "relative",
                    objectFit: "cover",
                    zIndex: "2",
                    transform: state && state.state == 'Company' ? "rotateX(180deg)" : "rotateX(0deg)",
                  }}
                  alt=""
                  src="/downarrow-1@2x.png"
                />
              </div>
            </div>
            <a
              style={{
                textDecoration: "none",
                position: "relative",
                letterSpacing: "0.05em",
                color: "inherit",
                zIndex: "2",
              }}
            >
              Community
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0.5rem 0.812rem 0rem 0rem",
          }}
        >
          <a
            style={{
              textDecoration: "none",
              position: "relative",
              letterSpacing: "0.05em",
              color: "inherit",
              display: "inline-block",
              minWidth: "5.125rem",
              zIndex: "2",
            }}
            href="/pricing"
            // onClick={() => dispatch({payload: 'Pricing'})}
          >
            Pricing
          </a>
        </div>
        <div
          style={{
            width: "15rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "1.687rem",
            maxWidth: "100%",
            marginLeft: "6rem",
            padding: "0.5rem 0.812rem 0rem 0rem",
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "0.5rem",
            }}
          >
            <a
              style={{
                textDecoration: "none",
                height: "3.125rem",
                flex: "1",
                position: "relative",
                fontFamily: "Inter",
                color: "inherit",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                minWidth: "4rem",
                whiteSpace: "nowrap",
                zIndex: "2",
              }}
            >
              Log in
            </a>
          </div>
          <button
            style={{
              cursor: "pointer",
              border: "2px solid #63b8ac",
              padding: "0.75rem 1.875rem",
              backgroundColor: "transparent",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              zIndex: "1",
            }}
          >
            <a
              style={{
                textDecoration: "none",
                position: "relative",
                fontSize: "1.375rem",
                lineHeight: "1.5rem",
                fontWeight: "700",
                fontFamily: "Inter",
                background:
                  "linear-gradient(95.67deg, #63b8ac 38.03%, #1d3765 73.11%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textAlign: "center",
                display: "inline-block",
                minWidth: "5.25rem",
                whiteSpace: "nowrap",
              }}
            >
              Sign Up
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

import { useCallback } from "react";

const FAQSectionDropdown = () => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "FAQ section" to the project
  }, []);

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "64rem",
        textAlign: "center",
        fontSize: "1.25rem",
        color: "#1c232d",
        fontFamily: "Poppins",
      }}
    >
      <b
        style={{
          position: "absolute",
          top: "4.938rem",
          left: "0rem",
          fontSize: "3rem",
          letterSpacing: "-0.02em",
          lineHeight: "3.75rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "90rem",
        }}
      >
        🙋 Frequently Asked Questions
      </b>
      <div
        style={{
          position: "absolute",
          top: "10.375rem",
          left: "0rem",
          lineHeight: "1.875rem",
          fontWeight: "500",
          color: "#556987",
          display: "inline-block",
          width: "90rem",
        }}
      >
        <p
          style={{
            marginBlockStart: "0",
            marginBlockEnd: "5px",
            whiteSpace: "pre-wrap",
          }}
        >{`  Our LLMs and AI native appication platform that lets you run your business `}</p>
        <p style={{ margin: "0" }}>
          on one platform, seamlessly across all digital channels.
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          top: "16.875rem",
          left: "21.563rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "0.125rem",
          textAlign: "left",
          color: "#2a3342",
        }}
      >
        <div
          style={{
            width: "46.875rem",
            position: "relative",
            height: "5rem",
            cursor: "pointer",
          }}
          onClick={onFrameContainerClick}
        >
          <div
            style={{
              position: "absolute",
              top: "0rem",
              left: "0rem",
              backgroundColor: "#fff",
              width: "46.875rem",
              height: "5.125rem",
            }}
          />
          <b
            style={{
              position: "absolute",
              top: "1.625rem",
              left: "2.5rem",
              lineHeight: "1.875rem",
              display: "inline-block",
              width: "37.875rem",
            }}
          >
            Which industry is suitable for use?
          </b>
          <img
            style={{
              position: "absolute",
              height: "40%",
              width: "4.27%",
              top: "31.25%",
              right: "5.2%",
              bottom: "28.75%",
              left: "90.53%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
              objectFit: "cover",
            }}
            alt=""
            src="/minus-1@2x.png"
          />
        </div>
        <div
          style={{
            width: "46.875rem",
            position: "relative",
            height: "5rem",
            color: "rgba(42, 51, 66, 0.5)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0rem",
              left: "0rem",
              backgroundColor: "#fff",
              borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
              boxSizing: "border-box",
              width: "46.875rem",
              height: "5.125rem",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "1.625rem",
              left: "2.5rem",
              lineHeight: "1.875rem",
              display: "inline-block",
              width: "37.875rem",
            }}
          >
            We specialize in dental industry for practitioners
          </div>
        </div>
        <div
          style={{ width: "46.875rem", position: "relative", height: "5rem" }}
        >
          <div
            style={{
              position: "absolute",
              top: "0rem",
              left: "0rem",
              backgroundColor: "#fff",
              width: "46.875rem",
              height: "5.125rem",
            }}
          />
          <b
            style={{
              position: "absolute",
              top: "1.625rem",
              left: "2.5rem",
              lineHeight: "1.875rem",
              display: "inline-block",
              width: "37.875rem",
            }}
          >
            It’s all free for use our VLM(Vertical Large Model)?
          </b>
          <img
            style={{
              position: "absolute",
              height: "40%",
              width: "4.27%",
              top: "31.25%",
              right: "5.2%",
              bottom: "28.75%",
              left: "90.53%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
              objectFit: "cover",
            }}
            alt=""
            src="/minus-1@2x.png"
          />
        </div>
        <div
          style={{
            width: "46.875rem",
            position: "relative",
            height: "5rem",
            color: "rgba(42, 51, 66, 0.5)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0rem",
              left: "0rem",
              backgroundColor: "#fff",
              borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
              boxSizing: "border-box",
              width: "46.875rem",
              height: "5.125rem",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "1.625rem",
              left: "2.5rem",
              lineHeight: "1.875rem",
              display: "inline-block",
              width: "37.875rem",
            }}
          >
            Yes, It’s all free for use when you sign into account
          </div>
        </div>
        <div
          style={{ width: "46.875rem", position: "relative", height: "5rem" }}
        >
          <div
            style={{
              position: "absolute",
              top: "0rem",
              left: "0rem",
              backgroundColor: "#fff",
              width: "46.875rem",
              height: "5.125rem",
            }}
          />
          <b
            style={{
              position: "absolute",
              top: "1.625rem",
              left: "2.5rem",
              lineHeight: "1.875rem",
              display: "inline-block",
              width: "37.875rem",
            }}
          >
            If i’m not dental industry, May i use this product?
          </b>
          <img
            style={{
              position: "absolute",
              height: "40%",
              width: "4.27%",
              top: "31.25%",
              right: "5.2%",
              bottom: "28.75%",
              left: "90.53%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
              objectFit: "cover",
            }}
            alt=""
            src="/minus-1@2x.png"
          />
        </div>
        <div
          style={{
            width: "46.875rem",
            position: "relative",
            height: "5rem",
            color: "rgba(42, 51, 66, 0.5)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0rem",
              left: "0rem",
              backgroundColor: "#fff",
              borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
              boxSizing: "border-box",
              width: "46.875rem",
              height: "5.125rem",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "1.625rem",
              left: "2.5rem",
              lineHeight: "1.875rem",
              display: "inline-block",
              width: "37.875rem",
            }}
          >
            Sure, our AI native also customize on you
          </div>
        </div>
        <div
          style={{ width: "46.875rem", position: "relative", height: "5rem" }}
        >
          <div
            style={{
              position: "absolute",
              top: "0rem",
              left: "0rem",
              backgroundColor: "#fff",
              width: "46.875rem",
              height: "5.125rem",
            }}
          />
          <b
            style={{
              position: "absolute",
              top: "1.625rem",
              left: "2.5rem",
              lineHeight: "1.875rem",
              display: "inline-block",
              width: "37.875rem",
            }}
          >
            We are dental chain organization, i want deploy on private
          </b>
          <img
            style={{
              position: "absolute",
              height: "40%",
              width: "4.27%",
              top: "31.25%",
              right: "5.2%",
              bottom: "28.75%",
              left: "90.53%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
              objectFit: "cover",
            }}
            alt=""
            src="/minus-1@2x.png"
          />
        </div>
        <div
          style={{
            width: "46.875rem",
            position: "relative",
            height: "5rem",
            color: "rgba(42, 51, 66, 0.5)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0rem",
              left: "0rem",
              backgroundColor: "#fff",
              borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
              boxSizing: "border-box",
              width: "46.875rem",
              height: "5.125rem",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "1.625rem",
              left: "2.5rem",
              lineHeight: "1.875rem",
              display: "inline-block",
              width: "37.875rem",
            }}
          >
            Absolutely, We support deploy your own business data
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "calc(50% + 512px)",
          left: "calc(50% + 591px)",
          fontSize: "11.875rem",
          letterSpacing: "-0.04em",
          lineHeight: "100%",
          fontFamily: "Alata",
          color: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "64rem",
          height: "6.375rem",
          WebkitTextStroke: "1px #e9e9e9",
          transform: " rotate(-90deg)",
          transformOrigin: "0 0",
        }}
      >
        OrininTechX
      </div>
      <div
        style={{
          position: "absolute",
          top: "60.188rem",
          left: "0rem",
          fontFamily: "Roboto",
          display: "inline-block",
          width: "90rem",
          color: "#606f7b",
        }}
      >
        <span>{`More questions？ `}</span>
        <span style={{ color: "#2abd81" }}>Contact us</span>
      </div>
    </div>
  );
};

export default FAQSectionDropdown;

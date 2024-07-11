import { useCallback } from "react";

const FurtherVLMSection = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Sub Menu(radiography)" to the project
  }, []);

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#f4f4f4",
        border: "1px solid #000",
        boxSizing: "border-box",
        height: "67.5rem",
        textAlign: "left",
        fontSize: "4.313rem",
        color: "#1c1c28",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0rem",
          left: "0rem",
          backgroundColor: "#7b7777",
          width: "48.75rem",
          height: "67.5rem",
          display: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "27.313rem",
          left: "0rem",
          backgroundColor: "#d9d9d9",
          width: "48.75rem",
          height: "40.181rem",
          display: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "11.813rem",
          left: "6.25rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "7.375rem",
        }}
      >
        <b
          style={{
            width: "44.625rem",
            position: "relative",
            lineHeight: "4.656rem",
            display: "inline-block",
            height: "9.875rem",
            flexShrink: "0",
          }}
        >
          <p style={{ margin: "0" }}>
            Fine-tune Vertical Model for Dental Industry
          </p>
        </b>
        <div
          style={{
            width: "35.563rem",
            position: "relative",
            fontSize: "1rem",
            lineHeight: "1.5rem",
            color: "#555770",
            display: "inline-block",
            height: "3.25rem",
            flexShrink: "0",
          }}
        >
          <span>
            We Collect, Analyze, All Dental Unstructured data, Like Material,
            Equipment, Manufacturer, Covers the whole dental industry
          </span>
        </div>
        <div
          style={{
            width: "9.75rem",
            position: "relative",
            height: "3.5rem",
            cursor: "pointer",
            textAlign: "center",
            fontSize: "1.25rem",
            color: "#222",
            fontFamily: "Poppins",
          }}
          onClick={onGroupContainerClick}
        >
          <div
            style={{
              position: "absolute",
              top: "calc(50% - 28px)",
              left: "calc(50% - 78px)",
              borderRadius: "5px",
              backgroundColor: "#efa91d",
              width: "9.75rem",
              height: "3.5rem",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "calc(50% - 17.16px)",
              left: "calc(50% - 78px)",
              lineHeight: "1.25rem",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "9.75rem",
              height: "2.256rem",
            }}
          >
            Learn more
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "11.813rem",
          left: "51.625rem",
          width: "32.131rem",
          height: "47.675rem",
          textAlign: "center",
          fontSize: "1.198rem",
          color: "#555770",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0rem",
            left: "3.375rem",
            borderRadius: "11.88px",
            border: "1.8px solid #000",
            boxSizing: "border-box",
            width: "25.125rem",
            height: "3.625rem",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "1.142rem",
            left: "11.329rem",
            color: "#000",
          }}
        >
          Training Data
        </div>
        <img
          style={{
            position: "absolute",
            height: "47.55%",
            width: "81.83%",
            top: "3.02%",
            right: "9.41%",
            bottom: "49.44%",
            left: "8.75%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
          }}
          alt=""
          src="/arrows.svg"
        />
        <div
          style={{
            position: "absolute",
            width: "100%",
            top: "calc(50% - 241.4px)",
            right: "0%",
            left: "0%",
            height: "11.438rem",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "calc(50% + 68.5px)",
              left: "5.06%",
            }}
          >
            Martial
          </div>
          <div
            style={{
              position: "absolute",
              top: "calc(50% + 68.17px)",
              left: "40.45%",
            }}
          >
            Equipment
          </div>
          <div
            style={{
              position: "absolute",
              top: "calc(50% + 68.5px)",
              left: "82.47%",
            }}
          >
            Implant
          </div>
          <img
            style={{
              position: "absolute",
              height: "79.4%",
              width: "21.75%",
              top: "0%",
              right: "78.25%",
              bottom: "20.6%",
              left: "0%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
            }}
            alt=""
            src="/yellow.svg"
          />
          <img
            style={{
              position: "absolute",
              height: "79.4%",
              width: "21.75%",
              top: "0%",
              right: "-0.01%",
              bottom: "20.6%",
              left: "78.27%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
            }}
            alt=""
            src="/purple.svg"
          />
        </div>
        <img
          style={{
            position: "absolute",
            height: "19.05%",
            width: "21.75%",
            top: "18.35%",
            right: "39.16%",
            bottom: "62.6%",
            left: "39.1%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
          }}
          alt=""
          src="/teal.svg"
        />
        <div
          style={{
            position: "absolute",
            width: "48.05%",
            top: "calc(50% + 33.6px)",
            right: "26.28%",
            left: "25.68%",
            height: "21.738rem",
            textAlign: "left",
            fontSize: "2.281rem",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "calc(50% + 129.92px)",
              left: "0%",
            }}
          >
            Trained Model
          </div>
          <img
            style={{
              position: "absolute",
              height: "87.35%",
              width: "94.62%",
              top: "0%",
              right: "2.95%",
              bottom: "12.65%",
              left: "2.44%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
            }}
            alt=""
            src="/dark.svg"
          />
        </div>
        <img
          style={{
            position: "absolute",
            top: "9.625rem",
            left: "0.5rem",
            width: "6.25rem",
            height: "6.25rem",
          }}
          alt=""
          src="/group-40.svg"
        />
        <img
          style={{
            position: "absolute",
            top: "9.625rem",
            left: "12.938rem",
            width: "6.25rem",
            height: "6.25rem",
          }}
          alt=""
          src="/group-34.svg"
        />
        <img
          style={{
            position: "absolute",
            top: "9.625rem",
            left: "25.438rem",
            width: "6.25rem",
            height: "6.25rem",
          }}
          alt=""
          src="/group-37.svg"
        />
      </div>
      <img
        style={{
          position: "absolute",
          top: "27.188rem",
          left: "0rem",
          width: "118.5rem",
          height: "40.288rem",
        }}
        alt=""
        src="/looper-bg.svg"
      />
    </div>
  );
};

export default FurtherVLMSection;

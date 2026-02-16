import * as React from "react";

type Props = {
  title: string;
  avatarSrc: string;
  img: {
    src: string;
    width: number;
    height: number;
  };
};

export default function OgImageTemplate({ title, avatarSrc, img }: Props) {
  return (
    <div
      style={{
        display: "flex",
        padding: 48,
        height: "100%",
        backgroundColor: "#2e3440",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          color: "#cbd5e0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 24,
            flexGrow: 1,
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 16,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 52,
                width: 400,
                fontWeight: 600,
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 36,
                fontWeight: 400,
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={avatarSrc}
                alt="TkDodo"
                width={120}
                height={120}
                style={{ borderRadius: "50%", marginRight: 16 }}
              />
              by TkDodo
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              {...img}
              style={{
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

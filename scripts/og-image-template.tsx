interface Props {
  title: string;
  avatarSrc: string;
  orientation: "landscape" | "portrait";
  tagsLine: string;
  dateLabel: string;
  img: {
    src: string;
    width: number;
    height: number;
  };
}

export default function OgImageTemplate({
  title,
  avatarSrc,
  orientation,
  tagsLine,
  dateLabel,
  img,
}: Props) {
  const isPortrait = orientation === "portrait";
  const titleWidth = isPortrait ? "62%" : "53%";
  const imageWidth = isPortrait ? "38%" : "47%";
  const imageFrameHeight = isPortrait ? 320 : 300;
  const imageBoxWidth = isPortrait ? 270 : 520;
  const imageBoxHeight = isPortrait ? 300 : 290;

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        padding: "44px 48px",
        background:
          "linear-gradient(160deg, #1a202c 0%, #212938 55%, #283244 100%)",
        color: "#cbd5e0",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -90,
          right: -80,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "rgba(118, 194, 175, 0.11)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -120,
          left: -120,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "rgba(118, 194, 175, 0.08)",
        }}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "9px 16px",
              borderRadius: 999,
              fontSize: 24,
              letterSpacing: "0.04em",
              color: "#a0aec0",
              border: "1px solid rgba(160, 174, 192, 0.35)",
              background: "rgba(26, 32, 44, 0.45)",
            }}
          >
            tkdodo.eu/blog
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#76c2af",
              letterSpacing: "0.04em",
              fontWeight: 600,
            }}
          >
            {dateLabel}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: 32,
            height: 350,
            marginTop: 18,
            marginBottom: 14,
          }}
        >
          <div
            style={{
              display: "flex",
              width: titleWidth,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: isPortrait ? 62 : 66,
                lineHeight: 1.12,
                fontWeight: 700,
                color: "#e6edf6",
                letterSpacing: "-0.02em",
                maxWidth: 560,
              }}
            >
              {title}
            </div>
            <div
              style={{
                display: "flex",
                width: 180,
                height: 8,
                borderRadius: 999,
                background: "#76c2af",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              width: imageWidth,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 22,
              padding: 10,
              height: imageFrameHeight,
              background: "transparent",
              border: "none",
            }}
          >
            <img
              {...img}
              style={{
                width: imageBoxWidth,
                height: imageBoxHeight,
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: 14,
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.36)",
                backgroundColor: "transparent",
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              color: "#76c2af",
            }}
          >
            <img
              src={avatarSrc}
              alt="TkDodo"
              width={84}
              height={84}
              style={{
                borderRadius: "50%",
                marginRight: 16,
                border: "2px solid rgba(118, 194, 175, 0.45)",
              }}
            />
            by
            <span
              style={{
                color: "#76c2af",
                fontWeight: 600,
                marginLeft: 8,
              }}
            >
              TkDodo
            </span>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#7f8ea3",
              letterSpacing: "0.04em",
            }}
          >
            {tagsLine}
          </div>
        </div>
      </div>
    </div>
  );
}

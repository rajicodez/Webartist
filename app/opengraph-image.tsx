import { ImageResponse } from "next/og";

export const alt = "Kindforth — AI Development and Automation Company in Sri Lanka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 75% 20%, #4f46e5 0%, #111827 32%, #030712 70%)",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 980 }}>
          <div style={{ color: "#60a5fa", fontSize: 34, fontWeight: 700 }}>
            Kindforth.
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 1.05,
              marginTop: 40,
            }}
          >
            AI Development &amp; Automation
          </div>
          <div style={{ color: "#c4b5fd", fontSize: 48, marginTop: 22 }}>
            Built in Sri Lanka. Engineered for the world.
          </div>
        </div>
      </div>
    ),
    size,
  );
}

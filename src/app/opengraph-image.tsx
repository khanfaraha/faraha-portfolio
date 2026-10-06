import { ImageResponse } from "next/og";

export const alt = "Faraha Ulfath Khan, Product Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "linear-gradient(135deg, #04060B 0%, #0A1428 60%, #0E2A4A 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, color: "#5CC8FF" }}>Product Designer</div>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 700, marginTop: 16 }}>
          Faraha Ulfath Khan
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#9AA8C1", marginTop: 28 }}>
          Deputy Project Lead at Staff Asia, with a software engineering background
        </div>
      </div>
    ),
    { ...size },
  );
}

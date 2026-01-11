"use client";
import Spline from "@splinetool/react-spline";

export default function SplineScene() {
    return (
        <div className="w-full h-full">
            {/* 
        NOTE: Switched to "Mini Room" (Computer/Desk) scene for better visibility.
        This provides a tangible "Web Design" feel.
      */}
            <Spline scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
        </div>
    );
}

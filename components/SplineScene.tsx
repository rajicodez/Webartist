"use client";
import { useCallback, useEffect, useRef } from "react";
import type { ComponentProps } from "react";
import Spline from "@splinetool/react-spline";

type SplineApplication = Parameters<
    NonNullable<ComponentProps<typeof Spline>["onLoad"]>
>[0];

export default function SplineScene() {
    const containerRef = useRef<HTMLDivElement>(null);
    const splineRef = useRef<SplineApplication | null>(null);
    const isVisibleRef = useRef(true);

    const syncPlayback = useCallback(() => {
        const spline = splineRef.current;
        if (!spline) return;

        if (isVisibleRef.current && document.visibilityState === "visible") {
            spline.play();
        } else {
            spline.stop();
        }
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisibleRef.current = entry.isIntersecting;
                syncPlayback();
            },
            { threshold: 0.01 },
        );

        const handleVisibilityChange = () => syncPlayback();

        observer.observe(container);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            observer.disconnect();
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            splineRef.current?.stop();
        };
    }, [syncPlayback]);

    const handleLoad = useCallback((spline: SplineApplication) => {
        splineRef.current = spline;
        syncPlayback();
    }, [syncPlayback]);

    return (
        <div ref={containerRef} className="h-full w-full">
            {/* 
        NOTE: Switched to "Mini Room" (Computer/Desk) scene for better visibility.
        This provides a tangible "Web Design" feel.
      */}
            <Spline
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                onLoad={handleLoad}
            />
        </div>
    );
}

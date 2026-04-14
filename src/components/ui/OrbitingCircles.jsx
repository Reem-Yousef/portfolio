// OrbitingCircles.jsx
// تحويل كامل من TypeScript لـ React JS عادي
// بيستخدم نفس الـ CSS animation orbit من globals.css

import React from "react";

/**
 * OrbitingCircles
 * ---------------
 * @param {object}  props
 * @param {React.ReactNode} props.children   - الأيقونات اللي هتتدور
 * @param {boolean} [props.reverse=false]    - عكس اتجاه الدوران
 * @param {number}  [props.duration=20]      - مدة دورة كاملة بالثواني
 * @param {number}  [props.radius=160]       - نصف قطر المدار بالـ px
 * @param {boolean} [props.path=true]        - عرض خط المدار
 * @param {number}  [props.iconSize=30]      - حجم الأيقونة بالـ px
 * @param {number}  [props.speed=1]          - مضاعف السرعة
 * @param {string}  [props.className]
 */
export function OrbitingCircles({
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  className = "",
}) {
  const calculatedDuration = duration / speed;
  const childArray = React.Children.toArray(children);
  const count = childArray.length;

  return (
    <>
      {/* خط المدار الدائري */}
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
        </svg>
      )}

      {/* الأيقونات الدوارة */}
      {childArray.map((child, index) => {
        const angle = (360 / count) * index;

        return (
          <div
            key={index}
            style={{
              // CSS custom properties — بتتقرأ من animation orbit في index.css
              "--duration": calculatedDuration,
              "--radius": radius,
              "--angle": angle,
              "--icon-size": `${iconSize}px`,

              position: "absolute",
              width: "var(--icon-size)",
              height: "var(--icon-size)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",

              // animation orbit
              animation: `orbit calc(var(--duration) * 1s) linear infinite`,
              animationDirection: reverse ? "reverse" : "normal",
            }}
            className={className}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}

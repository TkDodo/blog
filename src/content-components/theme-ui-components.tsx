import type { CSSProperties, ReactNode } from "react";

type CommonProps = {
  children?: ReactNode;
  sx?: Record<string, unknown>;
  style?: CSSProperties;
};

export function Alert({ children, style }: CommonProps) {
  return (
    <div
      style={{
        border: "1px solid var(--color-border)",
        borderRadius: "0.5rem",
        padding: "0.75rem 1rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function Box({ children, style }: CommonProps) {
  return <div style={style}>{children}</div>;
}

export function Flex({ children, style }: CommonProps) {
  return (
    <div style={{ display: "flex", gap: "0.5rem", ...style }}>{children}</div>
  );
}

export function Grid({ children, style }: CommonProps) {
  return (
    <div style={{ display: "grid", gap: "0.5rem", ...style }}>{children}</div>
  );
}

export function Text({ children, style }: CommonProps) {
  return <span style={style}>{children}</span>;
}

export function Link({
  children,
  ...props
}: {
  children?: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}) {
  return <a {...props}>{children}</a>;
}

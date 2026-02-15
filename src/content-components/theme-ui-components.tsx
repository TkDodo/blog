import type { ReactNode } from "react";

type CommonProps = {
  children?: ReactNode;
  sx?: Record<string, unknown>;
  className?: string;
};

function sxToClassName(sx?: Record<string, unknown>): string {
  if (!sx) return "";

  const classes: string[] = [];
  const fontFamily = sx.fontFamily;
  const fontSize = sx.fontSize;

  if (
    typeof fontFamily === "string" &&
    (fontFamily.includes("ml") || fontFamily.includes("monospace"))
  ) {
    classes.push("font-mono");
  }

  if (Array.isArray(fontSize) && fontSize.length >= 2) {
    classes.push("text-sm", "md:text-base");
  } else if (fontSize === 0) {
    classes.push("text-sm");
  } else if (fontSize === 1) {
    classes.push("text-base");
  }

  return classes.join(" ");
}

export function Alert({ children, sx, className }: CommonProps) {
  const sxClasses = sxToClassName(sx);

  return (
    <div className={`border border-border rounded-lg py-3 px-4 ${sxClasses} ${className ?? ""}`.trim()}>
      {children}
    </div>
  );
}

export function Box({ children, sx, className }: CommonProps) {
  const sxClasses = sxToClassName(sx);
  return <div className={`${sxClasses} ${className ?? ""}`.trim()}>{children}</div>;
}

export function Flex({ children, sx, className }: CommonProps) {
  const sxClasses = sxToClassName(sx);
  return <div className={`flex gap-2 ${sxClasses} ${className ?? ""}`.trim()}>{children}</div>;
}

export function Grid({ children, sx, className }: CommonProps) {
  const sxClasses = sxToClassName(sx);
  return <div className={`grid gap-2 ${sxClasses} ${className ?? ""}`.trim()}>{children}</div>;
}

export function Text({ children, sx, className }: CommonProps) {
  const sxClasses = sxToClassName(sx);
  return <span className={`${sxClasses} ${className ?? ""}`.trim()}>{children}</span>;
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

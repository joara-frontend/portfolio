import { createElement, type ReactNode } from "react";

type Falsy = false | null | undefined | 0 | "";

export function cn(...classes: (string | Falsy)[]): string {
  return classes.filter(Boolean).join(" ");
}

// "**강조**" 구간만 <strong>으로 변환. 나머지는 그대로 출력.
export function renderBoldText(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((chunk, i) =>
    chunk.startsWith("**") && chunk.endsWith("**")
      ? createElement("strong", { key: i }, chunk.slice(2, -2))
      : chunk,
  );
}

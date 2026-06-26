/**
 * Declaraciones ambientales — devkit/TS
 * repo: Jeff-Aporta/mimicus-react · src/global.d.ts
 * Registra el web component <iconify-icon> en JSX para tipado correcto en .tsx.
 */
import type * as React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        icon?: string;
        width?: string | number;
        height?: string | number;
        rotate?: string | number;
        flip?: string;
        inline?: boolean;
      };
    }
  }
}

'use client';

type variantType = 'default' | 'secondary';

interface ButtonProps {
  text?: string;
  mt?: string;
  variant?: variantType;
  width?: string;
  color?: boolean;
  bgColor?: string;
  style?: React.CSSProperties;
}

export default function Button({
  text = 'button',
  mt,
  width = '100%',
  style,
  variant = 'default',
}: ButtonProps) {

  const variantCss: Record<variantType, string> = {
    default: 'bg-primary text-textDark',
    secondary: 'text-textLess border border-textMuted',
  };
  return (
    <button
      className={`w-full items-center justify-center rounded-xl py-3 first-line:flex ${variantCss[variant]} text-sm font-semibold`}
        style={{ marginTop: mt, width: width, ...style }}
      >
        {text}
      </button>
  );
}

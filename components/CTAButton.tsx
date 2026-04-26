import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type CTAButtonVariant = "primary" | "secondary" | "tertiary";

type BaseProps = {
  children: ReactNode;
  variant?: CTAButtonVariant;
  className?: string;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type LinkProps = BaseProps & {
  href: string;
  prefetch?: boolean;
};

type CTAButtonProps = ButtonProps | LinkProps;

export default function CTAButton(props: CTAButtonProps) {
  const variant = props.variant ?? "primary";
  const className = props.className ?? "";

  const variantClass =
    variant === "secondary"
      ? "btn-secondary transition-colors duration-200 hover:brightness-95 active:brightness-90"
      : variant === "tertiary"
        ? "btn-tertiary transition-colors duration-200 hover:text-[#00345a] active:text-[#002846]"
        : "bg-white text-primary transition-colors duration-200 hover:bg-[#eaf2ff] active:bg-[#d9e8ff]";

  const mergedClassName = `btn inline-flex items-center justify-center ${variantClass} ${className}`.trim();

  if ("href" in props && props.href) {
    const { children, href, prefetch } = props;

    return (
      <Link href={href} prefetch={prefetch} className={mergedClassName}>
        {children}
      </Link>
    );
  }

  const { children, type = "button", ...buttonProps } = props;

  return (
    <button type={type} className={mergedClassName} {...buttonProps}>
      {children}
    </button>
  );
}


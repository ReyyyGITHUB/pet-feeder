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
      ? "btn-secondary"
      : variant === "tertiary"
        ? "btn-tertiary"
        : "bg-white text-primary";

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

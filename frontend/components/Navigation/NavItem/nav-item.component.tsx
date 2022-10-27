import React, { ReactNode } from "react";

interface IProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  isLogoText?: boolean;
}

export default React.memo(function NavItem(props: IProps) {
  const { children, isLogoText, ...elementProps } = props;
  return isLogoText ? (
    <span className="text-lg font-bold" {...elementProps}>
      {children}
    </span>
  ) : (
    <button className="btn btn-ghost btn-sm rounded-btn" {...elementProps}>
      {children}
    </button>
  );
});

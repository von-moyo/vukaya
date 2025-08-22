export const IconBattery = ({ size = 20, color = "currentColor", opacity = 1, className, ...props }: any) => {
  return (
    <svg
      width={size}
      height={(size * 13) / 27}
      viewBox="0 0 27 13"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.35"
        d="M2.66699 0.5H22.333C23.5296 0.5 24.5 1.47038 24.5 2.66699V10.333C24.5 11.5296 23.5296 12.5 22.333 12.5H2.66699C1.47038 12.5 0.5 11.5296 0.5 10.333V2.66699L0.510742 2.44531C0.621597 1.35265 1.54509 0.5 2.66699 0.5Z"
        stroke={color}
        strokeOpacity={opacity}
      />
      <path
        opacity="0.4"
        d="M25.6504 5V9C26.4551 8.66122 26.9784 7.87313 26.9784 7C26.9784 6.12687 26.4551 5.33878 25.6504 5Z"
        fill={color}
        fillOpacity={opacity}
      />
      <path
        d="M2.30078 3.66659C2.30078 2.93021 2.89773 2.33325 3.63411 2.33325H21.1674C21.9038 2.33325 22.5007 2.93021 22.5007 3.66659V9.32992C22.5007 10.0663 21.9038 10.6633 21.1674 10.6633H3.63411C2.89774 10.6633 2.30078 10.0663 2.30078 9.32992V3.66659Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

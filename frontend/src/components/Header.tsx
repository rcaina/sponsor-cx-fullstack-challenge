import { FC } from "react";

interface HeaderProps {
  netValue: number;
  probabilityValue: number;
}

const Header: FC<HeaderProps> = ({ netValue, probabilityValue }) => {
  return (
    <div className="header">
      <h2>Deals</h2>
      <p>Net Value: ${(netValue || 0).toFixed(2)}</p>
      <p>Probability Value: ${(probabilityValue || 0).toFixed(2)}</p>
    </div>
  );
};

export default Header;

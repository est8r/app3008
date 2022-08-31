import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import S from './Header.module.css';

const Header = () => {
  return (
    <div className={S.header}>
      <FiLogOut className={S.icon} />
    </div>
  );
};

export default Header;

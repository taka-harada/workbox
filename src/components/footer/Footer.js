import React from 'react'
import styles from './footer.scss'
const FootLogo = 'https://bst-cdn-image.s3-ap-northeast-1.amazonaws.com/test/logo.png'

const Footer = () => (
  <footer>
    <img src={FootLogo} width={"200px"} />
    <ul>
      <li><a href="#">Foot MENU 1</a></li>
      <li><a href="#">Foot MENU 2</a></li>
      <li><a href="#">Foot MENU 3</a></li>
    </ul>
    <address>© Hivelocity inc.</address>
  </footer>
);

export default Footer;

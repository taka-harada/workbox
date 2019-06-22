import React from 'react'
import styles from './content.scss'
const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || '';
const Eyecatch = `${process.env.PUBLIC_URL}/images/eyecatch.png`;
const JpegImage = `${process.env.PUBLIC_URL}/images/post_w600.jpg`;

const Content = () => (
  <section>
    <h1>Hello Workbox!!</h1>
    <img src={Eyecatch} width={"400px"} />
    <img src={JpegImage} width={"400px"} />
    <p> this is a Contents Area.</p>
  </section>
);

export default Content;

import React from 'react';
import Link from 'next/link';

const Info = () => {
  return (
    <div id='info-page'>
      <h1> Info page </h1>
      <h2>I am born in India</h2>
      <h2>and I like to play Cricket </h2>
    <Link href="/blog">
      <button id='info-to-blog'> Go to Blog</button></Link>
    <Link href="/info"
      <button id='info-to-home'> Go to Home</button></link>
    </div>
  );
};
export default Info;

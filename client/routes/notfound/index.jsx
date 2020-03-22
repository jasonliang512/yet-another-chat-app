import React from 'react';
import FancyLink from '#/components/fancy-link';
import DottedBackground from '#/components/dotted-background';
import image404 from '#/assets/images/undraw_page_not_found.svg';

function NotFound() {
  return (
    <DottedBackground className="overflow-x-hidden">
      <div className="container flex flex-col items-center justify-center mx-auto h-screen">
        <img
          className="mb-12"
          alt="404"
          src={image404}
          style={{ width: 500 }}
        />
        <FancyLink className="font-bold text-xl" to="/">
          Go to homepage
        </FancyLink>
      </div>
    </DottedBackground>
  );
}

export default NotFound;

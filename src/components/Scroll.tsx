import smoothscroll from 'smoothscroll-polyfill';
import React, { useEffect, ReactNode, cloneElement } from 'react';

type ScrollProps = {
  type: string;
  element: string;
  offset: number;
  timeout: number;
  children: ReactNode;
}

const Element = props => props.children


export const Scroll = ({ type, element, offset, timeout, children }: ScrollProps) => {

  useEffect(() => {
    smoothscroll.po
  }, [])

  const handleClick = (e) => {
    e.preventDefault()

    let elem = 0;
    let scroll = true;

    if (type && element) {
      switch (type) {
        case 'class':
          elem = document.getElementsByClassName(element)[0];
          scroll = elem ? true : false;
          break;
        case 'id':
          elem = document.getElementById(element);
          scroll = elem ? true : false;
          break;
        default:
      }
    }
    scroll
      ? scrollTo(elem, offset, timeout)
      : console.log(`Element not found: ${element}`); // eslint-disable-line
  }

  const scrollTo = (element, offSet = 0, timeout = null) => {
    const elemPos = element
      ? element.getBoundingClientRect().top + window.pageYOffset
      : 0;
    if (timeout) {
      setTimeout(() => {
        window.scroll({ top: elemPos + offSet, left: 0, behavior: 'smooth' });
      }, timeout);
    } else {
      window.scroll({ top: elemPos + offSet, left: 0, behavior: 'smooth' });
    }
  }

  return (
    <Element>
      {typeof children === 'object' ? (
        cloneElement(children, { onClick: handleClick, onkeydown: handleClick })
      ) : (
        <span onClick={handleClick}>{children}</span>
      )}
    </Element>
  )
}
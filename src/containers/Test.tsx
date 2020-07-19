import React, { useReducer, useEffect, useRef } from 'react';
import cx from 'classnames';
import * as smoothscroll from 'smoothscroll-polyfill';
import {
  PROFILE_IMG_LINK,
  PDF_LINK,
  WORK_FROM_YEAR_TIME_STAMP,
} from 'constants/config';
import Block from 'components/Block/Block';
import Button from 'components/Button/Button';
import Avatar from 'components/Avatar/Avatar';
import LazyImage from 'components/LazyImage/LazyImage';
import { calcCareerTimestampToYear } from 'utils/time';
import throttle from 'utils/throttle';
import defaultConsole from 'utils/defaultConsole';
import { Link } from 'react-router-dom';

import './App.scss';

smoothscroll.polyfill();

// @ts-ignore
window.__forceSmoothScrollPolyfill__ = true;

const goSourceCode = () => {
  location.href = 'https://github.com/JimLin94/resume';
};

const downloadPDF = () => {
  const link = document.createElement('a');

  link.href = PDF_LINK;
  link.download = 'jim-resume-v2.pdf';
  link.dispatchEvent(new MouseEvent('click'));
};

const careerTime = calcCareerTimestampToYear(WORK_FROM_YEAR_TIME_STAMP);
const SCROLL_MARGIN_TOP = 50;

let nav: JSX.Element[] = [];
let content: JSX.Element[] = [];

const contentNavMap = [
  {
    menu: <Link to="/first">App</Link>,
    content: null,
  },
  {
    menu: <span>Home</span>,
    content: (
      <Block>
        <div className="tall center-content">
          <h2 className="super-lg">Hi, This is Jim Lin.</h2>
          <p>
            You're very welcome to download the source code to build your own
            resume page.
          </p>
          <hr />
          <Button onClick={goSourceCode}>
            <span>Download the source code</span>
          </Button>
        </div>
      </Block>
    ),
  },
  {
    menu: <span>About Me</span>,
    content: (
      <Block theme="white">
        <h2 className="margin-bottom-lg">About Me</h2>
        <Avatar link={PROFILE_IMG_LINK} size="lg" />
        <p>
          I am Jim, web developer from Taipei, Taiwan. I have {careerTime} years
          experience of web development so far. Specialize in Front-end
          development.
        </p>
        <p className="margin-s">
          <label>Name:</label> <span>Jim Lin</span>
        </p>
        <p className="margin-s">
          <label>Birthday:</label> <span>4 September, 1987</span>
        </p>
        <p className="margin-s">
          <label>location:</label> <span>Taipei, Taiwan</span>
        </p>
        <p className="margin-s">
          <label>Email:</label> <span>jimlin7694@gmail.com</span>
        </p>
        <hr />
        <Button onClick={downloadPDF}>
          <span>Download CV</span>
        </Button>
      </Block>
    ),
  },
  {
    menu: <span>My Skills</span>,
    content: (
      <Block theme="white">
        <h2 className="margin-bottom-lg">My Skills</h2>
        <div className="icons">
          <LazyImage url="/public/Javascript.svg" />
          <LazyImage url="/public/nodejs.svg" />
          <LazyImage url="/public/Typescript.svg" />
          <LazyImage url="/public/React.svg" />
          <LazyImage url="/public/sass.svg" />
          <LazyImage url="/public/Vue.svg" />
        </div>
        <div className="desc">
          <div>
            <p>Frequently used libs/frameworks/tools:</p>
            <ul>
              <li>React.js</li> <li>Redux.js</li> <li>Webpack.js</li>
              <li>Express.js</li> <li>Next.js</li>
              <li>TradingView.js</li> <li>Jest Unit Test</li>
              <li>Enzyme.js</li> <li>Typescript</li>
            </ul>
          </div>
          <div>
            <p>Occasionally used libs/frameworks:</p>
            <ul>
              <li>Vue.js</li>
              <li>React Native</li>
              <li>Storybook.js</li>
              <li>Web3.js</li>
            </ul>
          </div>
        </div>
      </Block>
    ),
  },
  {
    menu: <span>Experience</span>,
    content: (
      <Block theme="white">
        <h2 className="margin-bottom-lg">Experience</h2>
        <div className="timeline">
          <div className="spot">
            <div className="title">
              <p>2018 - Present</p>
            </div>
            <div className="content">
              <h3>Anue.com Inc.</h3>
              <p>Job title: Senior Front-End Developer.</p>

              <p>
                DAU (Daily Active Users): ~450k (All web products) + ~50k (All
                app products).
              </p>

              <h4>Main Products: </h4>

              <ul>
                <li>
                  <a
                    href="https://www.cnyes.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.cnyes.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://invest.cnyes.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://invest.cnyes.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://fund.cnyes.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://fund.cnyes.com{' '}
                  </a>
                </li>
                <li>
                  <a
                    href="https://stock.cnyes.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://stock.cnyes.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://news.cnyes.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://news.cnyes.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.cnyes.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.cnyes.com/video
                  </a>
                </li>
              </ul>

              <h4>Services: </h4>
              <ul>
                <li>Financial news web applications and apps.</li>
                <li>Fund investment social web applications.</li>
                <li>Forex exchange information web application.</li>
                <li>Stock real-time information web application.</li>
              </ul>

              <h4>Responsibility: </h4>
              <ul>
                <li>
                  Develop new web applications and maintain current web
                  applications.
                </li>
                <li>Maintain a React-Native App (1 year).</li>
                <li>Maintain the products using React.js and Redux.</li>
                <li>Update the products by adopting React.js v16 Hooks.</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="spot">
            <div className="title">
              <p>2013 - 2018</p>
            </div>
            <div className="content">
              <h3>Wallace Academic Editing </h3>
              <p>Job title: Web Developer.</p>

              <p>DAU (Daily Active Users): ~5k</p>

              <h4>Main Products: </h4>

              <ul>
                <li>
                  <a
                    href="https://www.editing.tw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.editing.tw
                  </a>
                </li>
              </ul>

              <h4>Services: </h4>
              <ul>
                <li>Thesis Editing</li>
                <li>Thesis Translation</li>
                <li>Publication.</li>
              </ul>

              <h4>Responsibility: </h4>
              <ul>
                <li>Server maintenance.</li>
                <li>Web development and maintenance.</li>
                <li>Util development and maintenance.</li>
              </ul>
            </div>
          </div>
        </div>
      </Block>
    ),
  },
];

contentNavMap.forEach((n, idx) => {
  nav.push(n.menu);
  content.push(<div key={idx} id={`${idx}`}>{n.content}</div>);
})

enum ActionTypes {
  toggleMobileSidebar,
  ScrollToBlockId,
}

interface State {
  shouldShowSidebar: boolean;
  activeBlock: number;
}

const initialState: State = {
  shouldShowSidebar: false,
  activeBlock: 0,
};

type Action = {
  type: ActionTypes;
  payload?: any;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.toggleMobileSidebar:
      return {
        ...state,
        shouldShowSidebar: !state.shouldShowSidebar,
      };
    case ActionTypes.ScrollToBlockId:
      return {
        ...state,
        activeBlock: action.payload,
      };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const blockOffset = useRef<{ offsetTop: number; divHeight: number }[]>([]);

  const handleClickNav = (navIdx: number) => (e: React.MouseEvent) => {
    e.preventDefault();

    const targetBlock = document.getElementById('' + navIdx);

    if (targetBlock) {
      window.scrollTo({
        top: targetBlock.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  const renderNav = nav.map((n, idx) => (
    <span
      key={idx}
      className={cx({ active: state.activeBlock === idx })}
      onClick={handleClickNav(idx)}
    >
      {n}
    </span>
  ));

  const handleToggleSidebar = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({
      type: ActionTypes.toggleMobileSidebar,
    });
  };

  const handleScroll = throttle(function() {
    for (const idx in blockOffset.current) {
      if (
        window.scrollY >
          blockOffset.current[idx].offsetTop - SCROLL_MARGIN_TOP &&
        blockOffset.current[idx].offsetTop +
          blockOffset.current[idx].divHeight >
          window.scrollY
      ) {
        dispatch({
          type: ActionTypes.ScrollToBlockId,
          payload: +idx,
        });
      }
    }
  }, 1000);

  useEffect(() => {
    const blockOffsetY = [];

    for (const idx in content) {
      const block = document.getElementById('' + idx);

      if (block) {
        blockOffsetY.push({
          offsetTop: block.offsetTop,
          divHeight: block.clientHeight,
        });
      }
    }

    blockOffset.current = blockOffsetY;
    defaultConsole();
  }, []);

  useEffect(() => {
    if (blockOffset.current.length > 1) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [blockOffset.current]);

  return (
    <>
      <div className={cx('main', { 'offset-right': state.shouldShowSidebar })}>
        <div className="m-header" onClick={handleToggleSidebar}>
          <button>
            <span />
            <span />
            <span />
          </button>
          <div className="profile">
            <Avatar link={PROFILE_IMG_LINK} />
            <h2>Jim Lin</h2>
          </div>
        </div>
        {content}
      </div>
      <div
        className={cx('header-wrapper', { mDisplay: state.shouldShowSidebar })}
      >
        <div className="header">
          <div className="close" onClick={handleToggleSidebar} />
          <Avatar link={PROFILE_IMG_LINK} size="m" />
          <h1>Jim Lin - Test</h1>
          <p className="uppercase">Front-end Developer</p>
          <nav>{renderNav}</nav>
        </div>
      </div>
      <div
        className={cx('content-cover', { mDisplay: state.shouldShowSidebar })}
        onClick={handleToggleSidebar}
      />
    </>
  );
}

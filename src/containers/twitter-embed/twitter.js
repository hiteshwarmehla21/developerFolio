import React, { useState, useEffect, useContext } from 'react';
import './twitter.scss';
import Loading from '../loading/Loading';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { twitterDetails } from '../../portfolio';
import StyleContext from '../../contexts/StyleContext';

const renderLoader = () => <Loading />;
const cantDisplayError =
    "<div className='centerContent'><h2>Can't load? Check privacy protection settings</h2></div>";

function timeOut() {
  setTimeout(function () {
    if (!document.getElementById('twitter').innerHTML.includes('iframe')) {
      document.getElementById('twitter').innerHTML = cantDisplayError;
    }
  }, 10000);
}

export default function Twitter() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { isDark } = useContext(StyleContext);

  useEffect(() => {
    // Update screenWidth state when window is resized
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const width = screenWidth > 768 ? screenWidth / 2.4 : '100%';

  if (!twitterDetails.display) {
    return null;
  }
  if (!twitterDetails.userName) {
    console.error('Twitter username for twitter section is missing');
    return null;
  }

  return (
      <div className="tw-main-div" id="twitter">
        <div className="centerContent">
          <TwitterTimelineEmbed
              sourceType="profile"
              screenName={twitterDetails.userName}
              options={{
                height: 400,
                width, // set the width based on screen width
                borderColor: '#fff',
                theme: isDark ? 'dark' : 'light',
                noFooter: true,
                placeholder: renderLoader(),
                key: isDark ? '1' : '2',
                autoHeight: false,
              }}
              onLoad={timeOut()}
          />
        </div>
      </div>
  );
}

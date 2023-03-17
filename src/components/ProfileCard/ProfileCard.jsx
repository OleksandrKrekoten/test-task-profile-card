import React, { useState } from 'react';
import {
  Card,
  Logo,
  BackgroundIcon,
  Avatar,
  TextContainer,
} from './ProfileCard';
import { ReactComponent as RectangleIcon } from '../../img/Rectangle.svg';
import { FollowButton } from '../FollowButton/FollowButton.jsx';

export const ProfileCard = () => {
  const [subscribers, setSubscribers] = useState(
    parseInt(localStorage.getItem('subscribers')) || 150000
  );
  const [isSubscribed, setIsSubscribed] = useState(
    localStorage.getItem('isSubscribed') === 'true' || false
  );

  const handleSubscribe = () => {
    if (!isSubscribed) {
      setSubscribers(prevSubscribers => prevSubscribers + 1);
      setIsSubscribed(true);
      localStorage.setItem('subscribers', subscribers + 1);
      localStorage.setItem('isSubscribed', true);
    } else {
      setSubscribers(prevSubscribers => prevSubscribers - 1);
      setIsSubscribed(false);
      localStorage.setItem('subscribers', subscribers - 1);
      localStorage.setItem('isSubscribed', false);
    }
  };
  const formattedSubscribers = new Intl.NumberFormat('en-US').format(
    subscribers
  );
  return (
    <Card>
      <Logo />
      <BackgroundIcon />
      <RectangleIcon />
      <Avatar />
      <TextContainer>
        <p> 777 tweets</p>
        <p>{formattedSubscribers} Followers</p>
      </TextContainer>
      <FollowButton
        handleSubscribe={handleSubscribe}
        isSubscribed={isSubscribed}
      />
    </Card>
  );
};

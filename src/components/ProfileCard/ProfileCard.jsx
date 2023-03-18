import React, { useState } from 'react';
import {
  Card,
  Logo,
  BackgroundIcon,
  ImageContainer,
  Avatar,
  EllipseAvatar,
  TextContainer,
} from './ProfileCard';
import { ReactComponent as RectangleIcon } from '../../img/Rectangle.svg';
import { FollowButton } from '../FollowButton/FollowButton.jsx';

export const ProfileCard = ({ user }) => {
  const [subscribers, setSubscribers] = useState(
    parseInt(localStorage.getItem(user.id + 'subscribers')) || user.followers
  );
  const [isSubscribed, setIsSubscribed] = useState(
    localStorage.getItem(user.id + 'isSubscribed') === 'true' || false
  );

  const handleSubscribe = () => {
    if (!isSubscribed) {
      setSubscribers(prevSubscribers => prevSubscribers + 1);
      setIsSubscribed(true);
      localStorage.setItem(user.id + 'subscribers', subscribers + 1);
      localStorage.setItem(user.id + 'isSubscribed', true);
    } else {
      setSubscribers(prevSubscribers => prevSubscribers - 1);
      setIsSubscribed(false);
      localStorage.setItem(user.id + 'subscribers', subscribers - 1);
      localStorage.setItem(user.id + 'isSubscribed', false);
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
      <ImageContainer>
        <Avatar src={user.avatar} alt="Avatar" />
      </ImageContainer>
      <EllipseAvatar />
      <TextContainer>
        <p> {user.tweets} tweets</p>
        <p>{formattedSubscribers} Followers</p>
      </TextContainer>
      <FollowButton
        handleSubscribe={handleSubscribe}
        isSubscribed={isSubscribed}
      />
    </Card>
  );
};

import { Button } from './FollowButton';

export const FollowButton = ({ isSubscribed, handleSubscribe }) => {
  return (
    <Button type="button" onClick={handleSubscribe} isSubscribed={isSubscribed}>
      {isSubscribed ? 'Following' : 'Follow'}
    </Button>
  );
};

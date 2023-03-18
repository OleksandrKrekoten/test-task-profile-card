import styled from '@emotion/styled';
import '@fontsource/montserrat';
import { ReactComponent as Icon } from '../../img/Logo.svg';
import { ReactComponent as Picture } from '../../img/picture.svg';
import { ReactComponent as Ellipse } from '../../img/Ellipse.svg';
export const Card = styled.li`
  position: relative;
  margin: 20px auto;
  width: 380px;
  padding-bottom: 36px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 39%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;
export const Logo = styled(Icon)`
  margin-top: 20px;
  margin-left: 20px;
  width: 76px;
  height: 22px;
`;
export const BackgroundIcon = styled(Picture)`
  margin: 8px 36px 18px 36px;
  width: 308px;
  height: 168px;
`;
export const ImageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -46%);
  width: 62px;
  height: 62px;
  border-radius: 50%;
  overflow: hidden;
`;
export const Avatar = styled.img`
  width: 62px;
  height: 62px;
`;
export const EllipseAvatar = styled(Ellipse)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -46%);
  width: 80px;
  height: 80px;
`;
export const TextContainer = styled.div`
  text-align: center;
  margin-top: 62px;
  margin-bottom: 26px;
  p {
    margin: 0;
  }
  p:first-of-type {
    margin-bottom: 20px;
  }
`;

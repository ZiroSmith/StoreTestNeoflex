import {
  LinkContainer,
  LinkImg, Test,
} from './styled';
import IBannerProps from './types';

function LinkWithImg({
  children, image, alt,
}: IBannerProps) {
  return (
    <LinkContainer>
      <LinkImg src={image} alt={alt} />
      <Test>{children}</Test>
    </LinkContainer>
  );
}

export default LinkWithImg;

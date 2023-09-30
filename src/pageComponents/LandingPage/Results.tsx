import { Image } from 'components/Image';
import { Image as ImageModel } from 'models/image.model';
import { FC } from 'react';
import Carousel from 'react-material-ui-carousel';
import { StyledSection } from './LandingPage.styled';

export const Results:FC = () => {
  const items:ImageModel[] = [
    {
      src: '/images/dieta.png',
      title: 'dieta',
      description: 'dieta',
    },
    {
      src: '/images/fisio.png',
      title: 'Fisio',
      description: 'Fisio',
    },
  ];

  return (
    <StyledSection>
      <Carousel>
        {
                items.map((item, i) => <Image key={item.title} {...item} />)
            }
      </Carousel>
    </StyledSection>

  );
};

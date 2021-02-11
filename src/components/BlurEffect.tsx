import { El } from './nature-jsx-elements';

export const BlurEffect = ({ css, ...rest }) => {
  return (
    <El.div
      css={{
        ...css,
        width: '349px',
        height: '350px',
        filter: 'blur(150px)',
      }}
      {...rest}
    />
  );
};

export const BlurRight = ({ ...rest }) => {
  return (
    <BlurEffect
      css={{
        background:
          'linear-gradient(147.72deg, #1BFFD6 18.83%, #E35A0C 103.61%)',
        transform: 'rotate(-90deg)',
      }}
      {...rest}
    />
  );
};

export const BlurLeft = ({ ...rest }) => {
  return (
    <BlurEffect
      css={{
        background:
          'linear-gradient(147.72deg, #E35A0C 18.83%, #1487F1 74.78%, #1BEAEA 106.89%)',
      }}
      {...rest}
    />
  );
};

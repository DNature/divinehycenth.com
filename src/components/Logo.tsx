import Link from 'next/link';
import React from 'react';

export const SvgLogo = () => {
  return (
    <svg
      width='55'
      height='55'
      viewBox='0 0 55 55'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='mask0'
        mask-type='alpha'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='55'
        height='55'
      >
        <rect width='55' height='55' fill='#C4C4C4' />
      </mask>
      <g mask='url(#mask0)'>
        <g filter='url(#filter0_ii)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M18.4024 43.7296L21.6971 36.6831L24.9695 43.682C25.9257 45.7272 27.5446 47.2529 29.4512 48.1229C29.4678 48.1307 29.4844 48.1385 29.5011 48.1463C34.0691 50.2707 39.5021 48.2933 41.6359 43.7296L53.1933 19.0111C55.3271 14.4474 53.3537 9.02565 48.7857 6.90125C44.2176 4.77684 38.7847 6.75425 36.6509 11.3179L33.3138 18.4552L29.9544 11.2703C27.8206 6.70662 22.3877 4.72921 17.8197 6.85361C15.5397 7.91393 13.9061 9.79569 13.1069 11.9822L1.86005 36.0365C-0.273746 40.6001 1.69961 46.0219 6.26765 48.1463C10.8357 50.2707 16.2686 48.2933 18.4024 43.7296ZM21.6562 36.7709L18.4026 43.7297C16.2688 48.2934 10.8359 50.2708 6.26784 48.1464C5.99739 48.0206 5.73603 47.8833 5.48408 47.7352C3.49406 45.9058 2.24745 43.2841 2.24745 40.372C2.24745 34.8425 6.74201 30.36 12.2863 30.36C16.5578 30.36 20.2062 33.0207 21.6562 36.7709ZM17.7092 40.3243C17.7092 43.4409 15.1759 45.9674 12.0509 45.9674C8.92593 45.9674 6.39264 43.4409 6.39264 40.3243C6.39264 37.2077 8.92593 34.6812 12.0509 34.6812C15.1759 34.6812 17.7092 37.2077 17.7092 40.3243ZM49.5695 7.31243C51.5594 9.1419 52.8059 11.7635 52.8059 14.6755C52.8059 20.2049 48.3114 24.6874 42.7671 24.6874C38.4956 24.6874 34.8473 22.0268 33.3972 18.2767L36.6509 11.3179C38.7847 6.75422 44.2176 4.77681 48.7856 6.90121C49.0561 7.02701 49.3175 7.16437 49.5695 7.31243Z'
            fill='url(#paint0_linear)'
          />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_ii'
          x='-2.64071'
          y='2.35929'
          width='60.3347'
          height='50.2814'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='3.64071' dy='3.64071' />
          <feGaussianBlur stdDeviation='3.64071' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.616667 0 0 0 0 0.407 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend mode='normal' in2='shape' result='effect1_innerShadow' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='-3.64071' dy='-3.64071' />
          <feGaussianBlur stdDeviation='3.64071' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 1 0 0 0 0 0.104167 0 0 0 0 0.104167 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='effect1_innerShadow'
            result='effect2_innerShadow'
          />
        </filter>
        <linearGradient
          id='paint0_linear'
          x1='-2.07556'
          y1='4.08281'
          x2='54.5245'
          y2='51.034'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFCD1B' />
          <stop offset='1' stopColor='#E35A0C' />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const Logo = (props) => {
  return (
    <Link href='/'>
      <a {...props}>
        <SvgLogo />
      </a>
    </Link>
  );
};

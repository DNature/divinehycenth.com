import React from 'react';

import {
  Box,
  Badge,
  Stack,
  clsx,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  LazyImage,
  useDisclosure,
} from '@nature-ui/core';

import { Styled } from 'components/nature-jsx-elements';
import { getNChars } from 'utils/getNChars';
import { Button } from 'components/custom/Button';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RightVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    // display: 'block',
    transition: { duration: 1 },
  },
  hidden: {
    opacity: 0,
    scale: 0.6,
    // x: 500,
    // display: 'none',
  },
};

const BottomVariants = {
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0.6, y: 50 },
};

export const HomeWorksCard = ({ work, className = '', ...rest }) => {
  const { title, tags, description, githubUrl, websiteUrl, imageUrl } = work;

  let fallbackSrc: any = imageUrl.split('.');

  if (fallbackSrc[fallbackSrc.length - 1] === 'gif') {
    fallbackSrc = fallbackSrc.join('.').replace(/\/c_scale.*?\//gis, '/w_50/');
  } else {
    fallbackSrc = imageUrl.replace(/\/c_scale.*?\//gis, '/c_scale,w_0.01/');
  }

  const [ref, inView] = useInView();
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else controls.start('hidden');
  }, [controls, inView]);

  return (
    <>
      <motion.div
        ref={ref}
        animate={controls}
        initial='hidden'
        variants={BottomVariants}
        className={clsx(className, 'p-6 rounded-2xl bg-glass-card')}
        {...rest}
      >
        <Box className='md:grid grid-cols-2 gap-4 items-center'>
          <Box className='grid'>
            <LazyImage
              loading='lazy'
              src={imageUrl}
              fallbackSrc={fallbackSrc}
              alt={title}
              className='rounded-2xl h-full w-full object-cover'
            />
          </Box>
          <Box>
            <Styled.h3 className='font-semibold mb-2'>{title}</Styled.h3>
            {tags && (
              <Stack row spacing='2'>
                {tags.map((tag, i) => (
                  <Badge color='primary-600' variant='solid' key={tag + i}>
                    {tag}
                  </Badge>
                ))}
              </Stack>
            )}
            <Styled.p className='my-4'>{getNChars(description, 300)}</Styled.p>
            <Stack row>
              <Button size='sm' color='gradient' to={websiteUrl}>
                Visit site
              </Button>
              <Button size='sm' color='gray-300' to={githubUrl}>
                View source
              </Button>
            </Stack>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export const WorksCard = ({
  imageUrl,
  title,
  description,
  websiteUrl,
  githubUrl,
  tags = [],
  className = '',
  ...rest
}) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else controls.start('hidden');
  }, [controls, inView]);

  let fallbackSrc: any = imageUrl.split('.');

  if (fallbackSrc[fallbackSrc.length - 1] === 'gif') {
    fallbackSrc = fallbackSrc.join('.').replace(/\/c_scale.*?\//gis, '/w_50/');
  } else {
    fallbackSrc = imageUrl.replace(/\/c_scale.*?\//gis, '/c_scale,w_0.01/');
  }

  return (
    <Box
      className={clsx(className, 'relative h-full')}
      css={{ height: '60vh' }}
      {...rest}
    >
      <Box className='grid'>
        <LazyImage
          loading='lazy'
          fallbackSrc={fallbackSrc}
          src={imageUrl}
          alt={title}
          className='rounded-2xl h-full w-4/6 object-cover object-left'
        />
      </Box>

      <Box className='absolute top-0 right-0 w-2/5 py-12'>
        <motion.div
          ref={ref}
          animate={controls}
          initial='hidden'
          variants={RightVariants}
          className='bg-white w-full h-full shadow-2xl rounded-2xl px-8 py-20 flex items-center'
        >
          <div>
            <Styled.h2>{title}</Styled.h2>
            {tags && (
              <Stack row spacing='2' className='my-2'>
                {tags.map((tag, i) => (
                  <Badge color='primary-600' variant='solid' key={tag + i}>
                    {tag}
                  </Badge>
                ))}
              </Stack>
            )}
            <Styled.p className='text-xl mb-6'>{description}</Styled.p>
            <Stack row>
              <Button
                target='_blank'
                size='sm'
                color='gradient'
                to={websiteUrl}
              >
                Visit site
              </Button>
              <Button target='_blank' size='sm' color='gray-300' to={githubUrl}>
                View source
              </Button>
            </Stack>
          </div>
        </motion.div>
      </Box>
    </Box>
  );
};

export const MobileCard = ({
  imageUrl,
  title,
  description,
  websiteUrl,
  githubUrl,
  className = '',
  tags = [],
  ...rest
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let fallbackSrc: any = imageUrl.split('.');

  if (fallbackSrc[fallbackSrc.length - 1] === 'gif') {
    fallbackSrc = fallbackSrc.join('.').replace(/\/c_scale.*?\//gis, '/w_50/');
  } else {
    fallbackSrc = imageUrl.replace(/\/c_scale.*?\//gis, '/c_scale,w_0.01/');
  }

  const [ref, inView] = useInView();
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        ref={ref}
        animate={controls}
        initial='hidden'
        variants={BottomVariants}
        className={clsx(className, 'relative rounded-xl overflow-hidden')}
        style={{
          height: '350px',
        }}
        onClick={onOpen}
        {...rest}
      >
        <Box className='grid'>
          <LazyImage
            loading='lazy'
            src={imageUrl}
            fallbackSrc={fallbackSrc}
            alt={title}
            className='absolute top-0 w-full h-full object-cover object-left'
          />
        </Box>
        <div className='absolute top-0 w-full h-full bg-gradient-to-t from-gray-900' />

        <h2 className='text-3xl font-semibold absolute bottom-4 left-4 text-gray-100'>
          {title}
        </h2>
      </motion.div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay className='z-50'>
          <ModalContent>
            <ModalCloseButton />
            <Box className='grid'>
              <LazyImage
                loading='lazy'
                src={imageUrl}
                fallbackSrc={fallbackSrc}
                alt={title}
                className='w-full h-72 object-cover object-left'
              />
            </Box>
            <ModalBody>
              <Styled.h2>{title}</Styled.h2>
              {tags && (
                <Stack row spacing='2' className='my-2'>
                  {tags.map((tag, i) => (
                    <Badge color='primary-600' variant='solid' key={tag + i}>
                      {tag}
                    </Badge>
                  ))}
                </Stack>
              )}
              <Styled.p>{description}</Styled.p>
              <Stack row className='my-4'>
                <Button
                  target='_blank'
                  size='sm'
                  color='gradient'
                  to={websiteUrl}
                >
                  Visit site
                </Button>
                <Button
                  target='_blank'
                  size='sm'
                  color='gray-300'
                  to={githubUrl}
                >
                  View source
                </Button>
              </Stack>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

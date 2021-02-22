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
  Image,
  useDisclosure,
} from '@nature-ui/core';

import { Styled } from 'components/nature-jsx-elements';
import { getNChars } from 'utils/getNChars';
import { Button } from 'components/custom/Button';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LeftVariants = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0.6, x: -300 },
};

const RightVariants = {
  visible: { opacity: 1, scale: 1, x: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0.6, x: 1000 },
};

const BottomVariants = {
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0.6, y: 50 },
};

export const HomeWorksCard = ({ work, className = '', ...rest }) => {
  const { title, tags, description, githubUrl, websiteUrl, imageUrl } = work;

  return (
    <>
      <Box
        {...rest}
        className={clsx(className, 'p-6 rounded-2xl bg-glass-card')}
      >
        <Box className='md:grid grid-cols-2 gap-4 items-center'>
          <Box className='h-full'>
            <Image
              loading='lazy'
              src={imageUrl}
              alt={title}
              className='rounded-2xl'
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
      </Box>
    </>
  );
};

export const WorksCard = ({
  imageUrl,
  title,
  description,
  websiteUrl,
  githubUrl,
  className = '',
  tags = [],
  ...rest
}) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else controls.start('hidden');
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      variants={LeftVariants}
      className={clsx(className, '')}
      {...rest}
    >
      <Box className='relative' css={{ height: '70vh' }}>
        <Image
          src={imageUrl}
          alt={title}
          className='rounded-2xl h-full w-4/6 object-cover object-left'
        />

        <Box className='absolute top-0 right-0 w-2/5 h-full py-12'>
          <motion.div
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={RightVariants}
            className='bg-white w-full h-full shadow-2xl rounded-2xl p-8 flex items-center'
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
                <Button
                  target='_blank'
                  size='sm'
                  color='gray-300'
                  to={githubUrl}
                >
                  View source
                </Button>
              </Stack>
            </div>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
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
        <Image
          src={imageUrl}
          alt={title}
          className='absolute top-0 w-full h-full object-cover object-left'
        />
        <div className='absolute top-0 w-full h-full bg-gradient-to-t from-gray-900' />

        <h2 className='text-3xl font-semibold absolute bottom-4 left-4 text-gray-100'>
          {title}
        </h2>
      </motion.div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay className='z-50'>
          <ModalContent>
            <ModalCloseButton />
            <Image
              src={imageUrl}
              alt={title}
              className='w-full h-72 object-cover object-left'
            />
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

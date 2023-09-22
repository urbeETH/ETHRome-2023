import { FC } from 'react';
import { PropsWithClassName } from '../types';

export default function ImageLink(props: { imagePath: string; url: string; alt: string }) {
  const { imagePath, url, alt } = props
  return (
    <a href={url} target='_blank' rel='noreferrer' className='justify-self-center'>
      <img src={imagePath} className='opacity-60' alt={alt} />
    </a>
  )
}

export interface ImageProps extends PropsWithClassName {
  imagePath: string
  url: string
  alt: string
}

export const Image: FC<ImageProps> = ({ imagePath, url, alt, className }) => (
  <a href={url} target='_blank' rel='noreferrer' className='justify-self-center'>
    <img src={imagePath} className={className} alt={alt} />
  </a>
)

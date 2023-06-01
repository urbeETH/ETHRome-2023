export default function ImageLink(props: { imagePath: string; url: string; alt: string }) {
  const { imagePath, url, alt } = props
  return (
    <a href={url} target='_blank' rel='noreferrer'>
      <img src={imagePath} className='h-20 md:h-24' alt={alt} />
    </a>
  )
}

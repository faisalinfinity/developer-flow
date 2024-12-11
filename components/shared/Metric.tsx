import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface MetricProps {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
}

/** ***********  ✨ Codeium Command ⭐  *************/
/**
 * A small metric component to display a value and a short description.
 *
 * @param {string} imgUrl - The image URL for the metric icon.
 * @param {string} alt - The alt text for the metric icon.
 * @param {string|number} value - The value to display for the metric.
 * @param {string} title - A short description of the metric.
 * @param {string} [href] - An optional href link to wrap the metric content in a Link component.
 * @param {string} [textStyles] - Optional tailwindcss styles for the text.
 * @param {boolean} [isAuthor] - If true, hide the title on small screens.
 *
 * @returns {ReactElement} A small metric component.
 */
/** ****  9cf90ed6-2ff6-4a1c-aac2-955bdcd8ec1c  *******/const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  href,
  textStyles,
  isAuthor,
}: MetricProps) => {
  const metricContent = (
    <>
      <Image 
        src={imgUrl}
        width={16}
        height={16}
        alt={alt}
        className={`object-contain ${href ? 'rounded-full' : ''}`}
      />

      <p className={`${textStyles} flex items-center gap-1`}>
        {value}

        <span className={`small-regular line-clamp-1 ${isAuthor ?'max-sm:hidden' : ''}`}>
          {title}
        </span>
      </p>
    </>
  )

  if(href) {
    return (
      <Link href={href} className="flex-center  gap-1">
        {metricContent}
      </Link>
    )
  }

  return (
    <div className="flex-center flex-wrap gap-1">
      {metricContent}
    </div>
  )
}

export default Metric
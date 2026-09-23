import Image from 'next/image'
import { Check } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type FeatureRowProps = {
  icon?: LucideIcon
  eyebrowImage?: string
  eyebrow: string
  title: string
  description: string
  checklist?: string[]
  note?: string[]
  image: string
  imageSide: 'left' | 'right'
  muted?: boolean
}

export const FeatureRow: React.FC<FeatureRowProps> = ({
  icon: Icon,
  eyebrowImage,
  eyebrow,
  title,
  description,
  checklist,
  note,
  image,
  imageSide,
  muted,
}) => {
  const classes = ['evx-sl-feature-row', 'evx-sl-reveal']
  if (imageSide === 'right') classes.push('evx-sl-feature-row-flip')
  if (muted) classes.push('evx-sl-feature-row-muted')

  return (
    <div className={classes.join(' ')}>
      <div className="evx-sl-feature-img">
        <Image src={image} alt={title} width={774} height={424} />
      </div>
      <div className="evx-sl-feature-copy">
        <div className="evx-sl-feature-tag">
          {eyebrowImage ? (
            <Image className="evx-sl-feature-tag-icon-img" src={eyebrowImage} alt="" width={40} height={40} />
          ) : (
            <span className="evx-sl-feature-tag-icon">
              {Icon && <Icon size={20} strokeWidth={1.75} />}
            </span>
          )}
          <h3>{eyebrow}</h3>
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        {checklist && checklist.length > 0 && (
          <ul className="evx-sl-checklist">
            {checklist.map((item) => (
              <li key={item}>
                <Check size={14} strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>
        )}
        {note && note.length > 0 && (
          <div className="evx-sl-note-box">
            {note.map((line) => (
              <p key={line}>
                <Check size={14} strokeWidth={3} />
                {line}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

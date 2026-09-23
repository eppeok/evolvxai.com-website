import Image from 'next/image'
import type { LucideIcon } from 'lucide-react'

export type FeatureRowProps = {
  icon: LucideIcon
  eyebrow: string
  title: string
  description: string
  checklist?: string[]
  note?: string[]
  image: string
  imageSide: 'left' | 'right'
}

export const FeatureRow: React.FC<FeatureRowProps> = ({
  icon: Icon,
  eyebrow,
  title,
  description,
  checklist,
  note,
  image,
  imageSide,
}) => {
  return (
    <div className={`evx-fn-feature-row${imageSide === 'right' ? ' evx-fn-flip' : ''}`}>
      <div className="evx-fn-feature-img">
        <Image src={image} alt={title} width={560} height={420} />
      </div>
      <div className="evx-fn-feature-copy">
        <div className="evx-fn-feature-tag">
          <span className="evx-fn-feature-tag-icon">
            <Icon size={20} strokeWidth={1.75} />
          </span>
          <h3>{eyebrow}</h3>
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        {checklist && checklist.length > 0 && (
          <ul className="evx-fn-checklist">
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {note && note.length > 0 && (
          <div className="evx-fn-note-box">
            {note.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

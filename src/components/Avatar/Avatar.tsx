import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

type AvatarProps = {
    src: string,
    alt: string,
    title?: string
    size: 'default' | 'sm' | 'lg'
}

const avatarVariants = cva(
    'rounded-full',
    {
        variants: {
            size: {
                default: "h-9 w-9",
                sm: "h-5 w-5",
                lg: "h-12 w-12",
            }
        },
        defaultVariants: {
            size: 'default'
        }
    }
)

const Avatar: React.FC<AvatarProps> = ({ src, alt, title, size='default' }) => {
    return (
        <div className={cn(avatarVariants({ size }))}>
            <img
                src={src} 
                alt={alt} 
                title={title ?? alt}
            />
        </div>
    )
}

export default Avatar
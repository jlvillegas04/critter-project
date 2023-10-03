import useUser from "@/hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";

interface AvatarProps {
    userId: string;
    isLarge?: boolean;
    hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
    userId,
    isLarge,
    hasBorder
}) => {
    const router = useRouter();
    const { data: fetchedUser } = useUser(userId);

    const onClick = useCallback((event: any) => {
        event.stopPropagation();

        const url = `/users/${userId}`;

        router.push(url);
    }, [router, userId]);

    const avatarSize = isLarge ? 120 : 50;

    return(
        <div
            className={`
                ${hasBorder ? 'border-4 border-black' : ''}
                h-${avatarSize}
                w-${avatarSize}
                rounded-full
                hover:opacity-90
                transition
                cursor-pointer
                relative
            `}
        >
            <div
                style={{
                width: `${avatarSize}px`,
                height: `${avatarSize}px`,
                }}
                className="relative"
            >
                <Image 
                    fill
                    style={{
                        objectFit: 'cover',
                        borderRadius: '100%',
                    }}
                    alt="Avatar"
                    onClick={onClick}
                    src={fetchedUser?.profileImage || '/images/placeholder.png'}
                />
            </div>
        </div>
    );
}

export default Avatar;
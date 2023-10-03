import Header from "@/components/Header";
import useUser from "@/hooks/useUser";
import UserHero from "@/components/users/UserHero";
import UserBio from "@/components/users/UserBio";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";
import PostFeed from "@/components/posts/PostFeed";

const UserView = () => {
    const router = useRouter();
    const { userId } = router.query;

    const { data: fetchedUsed, isLoading } = useUser(userId as string);
    
    if (isLoading || !fetchedUsed) {
        return (
            <div className="
                flex
                justify-center
                items-center
                h-full
            ">
                <ClipLoader color="green" size={80} />
            </div>
        )
    }

    return (
        <>
            <Header showBackArrow label={fetchedUsed?.name} />
            <UserHero userId={userId as string} />
            <UserBio userId={userId as string} />
            <PostFeed userId={userId as string} />
        </>
    );
}

export default UserView;
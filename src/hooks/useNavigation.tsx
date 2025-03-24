import { useRouter } from "next/navigation";
import { ROUTER } from '@/constants';

const useNavigation = () => {
    const router = useRouter();

    const handleGotoLogin = () => {
        router.push(ROUTER.LOGIN);
    }

    const handleGotoHome = () => {
        router.push(ROUTER.HOME);
    }

    const handleGotoPosts = () => {
        router.push(ROUTER.POSTS);
    }

    const handleGotoPost = (id: string) => {
        router.push(`${ROUTER.POSTS}/${id}`);
    }

    const handleGoBack = () => {
        router.back();
    }
    
  return {
    handleGotoLogin,
    handleGotoHome,
    handleGoBack,
    handleGotoPosts,
    handleGotoPost
  }
}

export default useNavigation
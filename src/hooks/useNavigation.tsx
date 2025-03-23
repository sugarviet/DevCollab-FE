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

    const handleGoBack = () => {
        router.back();
    }
    
  return {
    handleGotoLogin,
    handleGotoHome,
    handleGoBack,
    handleGotoPosts
  }
}

export default useNavigation
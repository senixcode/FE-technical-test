import { useRouter } from "vue-router"
import LocalStorageUser from "../http/auth/localStorageUser"
import { RoutesNames } from "../router/enum"

export const useAuth = () => {
    const router = useRouter()
    function signOut() {
        new LocalStorageUser().deleted()
        router.push({ name: RoutesNames.SignIn })
    }
    return {signOut}
}
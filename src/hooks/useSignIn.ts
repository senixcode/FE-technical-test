import { useRouter } from "vue-router"
import Auth from "../http/auth"
import { SigInResponse, User } from "../http/auth/type"
import { ref } from "vue"
import { useForm } from "vee-validate"
import { RoutesNames } from "../router/enum"
import * as yup from 'yup'

export const useSignIn = () => {
    const router = useRouter()
    const errorSubmit = ref("")

    const schema = yup.object({
        email: yup.string().required("Es requerido*").email("Escriba un correo correcto"),
        password: yup.string().required("Es requerido*"),
    });

    const { errors, defineInputBinds } = useForm({
        validationSchema: schema,
    })

    const email = defineInputBinds('email')
    const password = defineInputBinds('password')
    async function submitSigIn() {
        errorSubmit.value = ""
        const body: User = {
            correo: email.value.value,
            password: password.value.value
        }
        if (body.correo && body.password) {
            const response: SigInResponse = await new Auth().sigIn(body)
            if (response.status === "success") router.push({
                name: RoutesNames.Dashboard
            })
        } else {
            errorSubmit.value = 'Correo o contraseña incorrectos'
        }
    }
    return { submitSigIn, errorSubmit, email, password, errors }
}
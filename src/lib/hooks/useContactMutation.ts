// lib/hooks/useContactMutation.ts
import {useMutation} from '@tanstack/react-query'
import service from '@/service/contact.service'
import {ContactFormValues} from '@/lib/validations/contact.schema'

export const useContactMutation = () => {
    return useMutation({
        mutationFn: (data: ContactFormValues) =>
            service.sendContactMessage(data),
    })
}

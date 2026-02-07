// lib/hooks/useContactMutation.ts
import {useMutation} from '@tanstack/react-query'
import contactService from '@/service/contact.service'
import {ContactFormValues} from '@/lib/validations/contact.schema'

export const useContactMutation = () => {
    return useMutation({
        mutationFn: (data: ContactFormValues) =>
            contactService.sendContactMessage(data),
    })
}

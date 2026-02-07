import HttpService from "@/service/http.service";
import {ContactFormValues} from "@/lib/validations/contact.schema";

class ContactService extends HttpService {

    async sendContactMessage(data: ContactFormValues) {
        try {
            return await this.postRequest({
                url: '/contact',
                data
            })
        } catch (error: any) {
            throw error
        }

    }

}

const contactService = new ContactService()
export default contactService


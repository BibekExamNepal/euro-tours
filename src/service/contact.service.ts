import HttpService from "@/service/http.service";
import { ContactFormValues } from "@/lib/validations/contact.schema";

class Service extends HttpService {

    async sendContactMessage(data: ContactFormValues) {
        try {
            return await this.postRequest({
                url: "/contact",
                data,
            });
        } catch (error: any) {
            throw error;
        }
    }

    async subscribeUser(email: string) {
        try {
            return await this.postRequest({
                url: "/subscriber",
                data: { email },
            });
        } catch (error: any) {
            throw error;
        }
    }
}

const service = new Service();
export default service;

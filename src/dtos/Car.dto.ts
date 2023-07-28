import { ValidationError, number, object, string } from "yup";

export default class CreateCarDTO {
    static async validate(data: any): Promise<CreateCarDTO | string[]> {
        let schema = object({
            title: string().required(),
            brand: string().required(),
            price: string().required(),
            age: number().required().positive().integer()
        });

        try {
            return await schema.validate(data);
        } catch (e) {
            if (e instanceof ValidationError) {
                return e.errors;
            }

            return ['Unknown error on user validation'];
        }
    }

    title!: string;
    brand!: string;
    price!: string;
    age!: number;
}

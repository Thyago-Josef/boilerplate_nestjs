// src/common/pipes/validation.pipe.ts
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { validate, ValidationError } from 'class-validator'; // Import ValidationError
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    async transform(value: any, { metatype }: ArgumentMetadata) {
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }

        const object = plainToClass(metatype, value);
        const errors = await validate(object);

        if (errors.length > 0) {
            // Map the ValidationError objects to a more readable format for the client.
            // A common approach is to extract all constraint messages into a flat array of strings.
            const errorMessages = errors.flatMap((error: ValidationError) =>
                Object.values(error.constraints || {})
            );

            // Throw BadRequestException with the array of messages as the response body.
            // NestJS will then format this into a standard error response.
            throw new BadRequestException(errorMessages);
        }
        return value;
    }

    private toValidate(metatype: Function): boolean {
        const types: Function[] = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
}
// // src/common/pipes/validation.pipe.ts
// import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
// import { validate } from 'class-validator';
// import { plainToClass } from 'class-transformer';

// @Injectable()
// export class ValidationPipe implements PipeTransform<any> {
//     async transform(value: any, { metatype }: ArgumentMetadata) {
//         if (!metatype || !this.toValidate(metatype)) {
//             return value;
//         }
//         const object = plainToClass(metatype, value);
//         const errors = await validate(object);
//         if (errors.length > 0) {
//             throw new BadRequestException('Validation failed', errors.map(err => err.constraints));
//         }
//         return value;
//     }

//     private toValidate(metatype: Function): boolean {
//         const types: Function[] = [String, Boolean, Number, Array, Object];
//         return !types.includes(metatype);
//     }
// }
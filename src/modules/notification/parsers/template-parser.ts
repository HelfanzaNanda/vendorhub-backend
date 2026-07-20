import { Injectable } from '@nestjs/common';

@Injectable()
export class TemplateParser {

    parse( template: string, data: Record<string, any> = {}, ): string {
        if (!template) {
            return '';
        }

        return template.replace(/\{\{\s*(.*?)\s*\}\}/g, (_, expression) => {
            const value = this.resolveValue(data, expression);

            return value === undefined || value === null ? '' : String(value);
        });
    }

    private resolveValue( data: Record<string, any>, expression: string, ): any {
        const normalizedPath = expression
            .split('.')
            .map(this.normalize)
            .join('.');

        return this.findValue(data, normalizedPath);
    }

    private findValue( obj: any, normalizedPath: string, ): any {
        const segments = normalizedPath.split('.');
        let current = obj;
        for (const segment of segments) {
            if ( current === null || current === undefined || typeof current !== 'object' ) {
                return undefined;
            }

            const key = Object.keys(current).find( k => this.normalize(k) === segment, );
            if (!key) {
                return undefined;
            }
            current = current[key];
        }
        return current;
    }

    private normalize(value: string): string {
        return value
            .replace(/[_\-\s]/g, '')
            .toLowerCase();
    }

    parseObject<T>(obj: T, data?: Record<string, any>): T {
        if (!data) {
            data = {};
        }

        if (obj === null || obj === undefined) {
            return obj;
        }

        if (typeof obj === 'string') {
            return this.parse(obj, data) as T;
        }

        if (Array.isArray(obj)) {
            return obj.map(item => this.parseObject(item, data)) as T;
        }

        if (typeof obj === 'object') {

            const result: Record<string, any> = {};

            for (const [key, value] of Object.entries(obj)) {
                result[key] = this.parseObject(value, data);
            }

            return result as T;
        }

        return obj;
    }

}
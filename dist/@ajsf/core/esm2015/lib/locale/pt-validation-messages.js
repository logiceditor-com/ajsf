const ɵ0 = function (error) {
    switch (error.requiredFormat) {
        case 'date':
            return 'Tem que ser uma data, por exemplo "2000-12-31"';
        case 'time':
            return 'Tem que ser horário, por exemplo "16:20" ou "03:14:15.9265"';
        case 'date-time':
            return 'Tem que ser data e hora, por exemplo "2000-03-14T01:59" ou "2000-03-14T01:59:26.535Z"';
        case 'email':
            return 'Tem que ser um email, por exemplo "fulano@exemplo.com.br"';
        case 'hostname':
            return 'Tem que ser uma nome de domínio, por exemplo "exemplo.com.br"';
        case 'ipv4':
            return 'Tem que ser um endereço IPv4, por exemplo "127.0.0.1"';
        case 'ipv6':
            return 'Tem que ser um endereço IPv6, por exemplo "1234:5678:9ABC:DEF0:1234:5678:9ABC:DEF0"';
        // TODO: add examples for 'uri', 'uri-reference', and 'uri-template'
        // case 'uri': case 'uri-reference': case 'uri-template':
        case 'url':
            return 'Tem que ser uma URL, por exemplo "http://www.exemplo.com.br/pagina.html"';
        case 'uuid':
            return 'Tem que ser um uuid, por exemplo "12345678-9ABC-DEF0-1234-56789ABCDEF0"';
        case 'color':
            return 'Tem que ser uma cor, por exemplo "#FFFFFF" ou "rgb(255, 255, 255)"';
        case 'json-pointer':
            return 'Tem que ser um JSON Pointer, por exemplo "/referencia/para/algo"';
        case 'relative-json-pointer':
            return 'Tem que ser um JSON Pointer relativo, por exemplo "2/referencia/para/algo"';
        case 'regex':
            return 'Tem que ser uma expressão regular, por exemplo "(1-)?\\d{3}-\\d{3}-\\d{4}"';
        default:
            return 'Tem que ser no formato: ' + error.requiredFormat;
    }
}, ɵ1 = function (error) {
    if ((1 / error.multipleOfValue) % 10 === 0) {
        const decimals = Math.log10(1 / error.multipleOfValue);
        return `Tem que ter ${decimals} ou menos casas decimais.`;
    }
    else {
        return `Tem que ser um múltiplo de ${error.multipleOfValue}.`;
    }
};
export const ptValidationMessages = {
    required: 'Este campo é obrigatório.',
    minLength: 'É preciso no mínimo {{minimumLength}} caracteres ou mais (tamanho atual: {{currentLength}})',
    maxLength: 'É preciso no máximo  {{maximumLength}} caracteres ou menos (tamanho atual: {{currentLength}})',
    pattern: 'Tem que ajustar ao formato: {{requiredPattern}}',
    format: ɵ0,
    minimum: 'Tem que ser {{minimumValue}} ou mais',
    exclusiveMinimum: 'Tem que ser mais que {{exclusiveMinimumValue}}',
    maximum: 'Tem que ser {{maximumValue}} ou menos',
    exclusiveMaximum: 'Tem que ser menor que {{exclusiveMaximumValue}}',
    multipleOf: ɵ1,
    minProperties: 'Deve ter {{minimumProperties}} ou mais itens (itens até o momento: {{currentProperties}})',
    maxProperties: 'Deve ter {{maximumProperties}} ou menos intens (itens até o momento: {{currentProperties}})',
    minItems: 'Deve ter {{minimumItems}} ou mais itens (itens até o momento: {{currentItems}})',
    maxItems: 'Deve ter {{maximumItems}} ou menos itens (itens até o momento: {{currentItems}})',
    uniqueItems: 'Todos os itens devem ser únicos',
};
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtdmFsaWRhdGlvbi1tZXNzYWdlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fqc2YtY29yZS9zcmMvbGliL2xvY2FsZS9wdC12YWxpZGF0aW9uLW1lc3NhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJXQUtVLFVBQVUsS0FBSztJQUNyQixRQUFRLEtBQUssQ0FBQyxjQUFjLEVBQUU7UUFDNUIsS0FBSyxNQUFNO1lBQ1QsT0FBTyxnREFBZ0QsQ0FBQztRQUMxRCxLQUFLLE1BQU07WUFDVCxPQUFPLDZEQUE2RCxDQUFDO1FBQ3ZFLEtBQUssV0FBVztZQUNkLE9BQU8sdUZBQXVGLENBQUM7UUFDakcsS0FBSyxPQUFPO1lBQ1YsT0FBTywyREFBMkQsQ0FBQztRQUNyRSxLQUFLLFVBQVU7WUFDYixPQUFPLCtEQUErRCxDQUFDO1FBQ3pFLEtBQUssTUFBTTtZQUNULE9BQU8sdURBQXVELENBQUM7UUFDakUsS0FBSyxNQUFNO1lBQ1QsT0FBTyxxRkFBcUYsQ0FBQztRQUMvRixvRUFBb0U7UUFDcEUseURBQXlEO1FBQ3pELEtBQUssS0FBSztZQUNSLE9BQU8sMEVBQTBFLENBQUM7UUFDcEYsS0FBSyxNQUFNO1lBQ1QsT0FBTyx5RUFBeUUsQ0FBQztRQUNuRixLQUFLLE9BQU87WUFDVixPQUFPLG9FQUFvRSxDQUFDO1FBQzlFLEtBQUssY0FBYztZQUNqQixPQUFPLGtFQUFrRSxDQUFDO1FBQzVFLEtBQUssdUJBQXVCO1lBQzFCLE9BQU8sNEVBQTRFLENBQUM7UUFDdEYsS0FBSyxPQUFPO1lBQ1YsT0FBTyw0RUFBNEUsQ0FBQztRQUN0RjtZQUNFLE9BQU8sMEJBQTBCLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztLQUM1RDtBQUNILENBQUMsT0FLVyxVQUFVLEtBQUs7SUFDekIsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRTtRQUMxQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdkQsT0FBTyxlQUFlLFFBQVEsMkJBQTJCLENBQUM7S0FDM0Q7U0FBTTtRQUNMLE9BQU8sOEJBQThCLEtBQUssQ0FBQyxlQUFlLEdBQUcsQ0FBQztLQUMvRDtBQUNILENBQUM7QUFsREgsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQVE7SUFDdkMsUUFBUSxFQUFFLDJCQUEyQjtJQUNyQyxTQUFTLEVBQUUsNkZBQTZGO0lBQ3hHLFNBQVMsRUFBRSwrRkFBK0Y7SUFDMUcsT0FBTyxFQUFFLGlEQUFpRDtJQUMxRCxNQUFNLElBaUNMO0lBQ0QsT0FBTyxFQUFFLHNDQUFzQztJQUMvQyxnQkFBZ0IsRUFBRSxnREFBZ0Q7SUFDbEUsT0FBTyxFQUFFLHVDQUF1QztJQUNoRCxnQkFBZ0IsRUFBRSxpREFBaUQ7SUFDbkUsVUFBVSxJQU9UO0lBQ0QsYUFBYSxFQUFFLDJGQUEyRjtJQUMxRyxhQUFhLEVBQUUsNkZBQTZGO0lBQzVHLFFBQVEsRUFBRSxpRkFBaUY7SUFDM0YsUUFBUSxFQUFFLGtGQUFrRjtJQUM1RixXQUFXLEVBQUUsaUNBQWlDO0NBRS9DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHRWYWxpZGF0aW9uTWVzc2FnZXM6IGFueSA9IHsgLy8gQnJhemlsaWFuIFBvcnR1Z3Vlc2UgZXJyb3IgbWVzc2FnZXNcbiAgcmVxdWlyZWQ6ICdFc3RlIGNhbXBvIMOpIG9icmlnYXTDs3Jpby4nLFxuICBtaW5MZW5ndGg6ICfDiSBwcmVjaXNvIG5vIG3DrW5pbW8ge3ttaW5pbXVtTGVuZ3RofX0gY2FyYWN0ZXJlcyBvdSBtYWlzICh0YW1hbmhvIGF0dWFsOiB7e2N1cnJlbnRMZW5ndGh9fSknLFxuICBtYXhMZW5ndGg6ICfDiSBwcmVjaXNvIG5vIG3DoXhpbW8gIHt7bWF4aW11bUxlbmd0aH19IGNhcmFjdGVyZXMgb3UgbWVub3MgKHRhbWFuaG8gYXR1YWw6IHt7Y3VycmVudExlbmd0aH19KScsXG4gIHBhdHRlcm46ICdUZW0gcXVlIGFqdXN0YXIgYW8gZm9ybWF0bzoge3tyZXF1aXJlZFBhdHRlcm59fScsXG4gIGZvcm1hdDogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgc3dpdGNoIChlcnJvci5yZXF1aXJlZEZvcm1hdCkge1xuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgIHJldHVybiAnVGVtIHF1ZSBzZXIgdW1hIGRhdGEsIHBvciBleGVtcGxvIFwiMjAwMC0xMi0zMVwiJztcbiAgICAgIGNhc2UgJ3RpbWUnOlxuICAgICAgICByZXR1cm4gJ1RlbSBxdWUgc2VyIGhvcsOhcmlvLCBwb3IgZXhlbXBsbyBcIjE2OjIwXCIgb3UgXCIwMzoxNDoxNS45MjY1XCInO1xuICAgICAgY2FzZSAnZGF0ZS10aW1lJzpcbiAgICAgICAgcmV0dXJuICdUZW0gcXVlIHNlciBkYXRhIGUgaG9yYSwgcG9yIGV4ZW1wbG8gXCIyMDAwLTAzLTE0VDAxOjU5XCIgb3UgXCIyMDAwLTAzLTE0VDAxOjU5OjI2LjUzNVpcIic7XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgIHJldHVybiAnVGVtIHF1ZSBzZXIgdW0gZW1haWwsIHBvciBleGVtcGxvIFwiZnVsYW5vQGV4ZW1wbG8uY29tLmJyXCInO1xuICAgICAgY2FzZSAnaG9zdG5hbWUnOlxuICAgICAgICByZXR1cm4gJ1RlbSBxdWUgc2VyIHVtYSBub21lIGRlIGRvbcOtbmlvLCBwb3IgZXhlbXBsbyBcImV4ZW1wbG8uY29tLmJyXCInO1xuICAgICAgY2FzZSAnaXB2NCc6XG4gICAgICAgIHJldHVybiAnVGVtIHF1ZSBzZXIgdW0gZW5kZXJlw6dvIElQdjQsIHBvciBleGVtcGxvIFwiMTI3LjAuMC4xXCInO1xuICAgICAgY2FzZSAnaXB2Nic6XG4gICAgICAgIHJldHVybiAnVGVtIHF1ZSBzZXIgdW0gZW5kZXJlw6dvIElQdjYsIHBvciBleGVtcGxvIFwiMTIzNDo1Njc4OjlBQkM6REVGMDoxMjM0OjU2Nzg6OUFCQzpERUYwXCInO1xuICAgICAgLy8gVE9ETzogYWRkIGV4YW1wbGVzIGZvciAndXJpJywgJ3VyaS1yZWZlcmVuY2UnLCBhbmQgJ3VyaS10ZW1wbGF0ZSdcbiAgICAgIC8vIGNhc2UgJ3VyaSc6IGNhc2UgJ3VyaS1yZWZlcmVuY2UnOiBjYXNlICd1cmktdGVtcGxhdGUnOlxuICAgICAgY2FzZSAndXJsJzpcbiAgICAgICAgcmV0dXJuICdUZW0gcXVlIHNlciB1bWEgVVJMLCBwb3IgZXhlbXBsbyBcImh0dHA6Ly93d3cuZXhlbXBsby5jb20uYnIvcGFnaW5hLmh0bWxcIic7XG4gICAgICBjYXNlICd1dWlkJzpcbiAgICAgICAgcmV0dXJuICdUZW0gcXVlIHNlciB1bSB1dWlkLCBwb3IgZXhlbXBsbyBcIjEyMzQ1Njc4LTlBQkMtREVGMC0xMjM0LTU2Nzg5QUJDREVGMFwiJztcbiAgICAgIGNhc2UgJ2NvbG9yJzpcbiAgICAgICAgcmV0dXJuICdUZW0gcXVlIHNlciB1bWEgY29yLCBwb3IgZXhlbXBsbyBcIiNGRkZGRkZcIiBvdSBcInJnYigyNTUsIDI1NSwgMjU1KVwiJztcbiAgICAgIGNhc2UgJ2pzb24tcG9pbnRlcic6XG4gICAgICAgIHJldHVybiAnVGVtIHF1ZSBzZXIgdW0gSlNPTiBQb2ludGVyLCBwb3IgZXhlbXBsbyBcIi9yZWZlcmVuY2lhL3BhcmEvYWxnb1wiJztcbiAgICAgIGNhc2UgJ3JlbGF0aXZlLWpzb24tcG9pbnRlcic6XG4gICAgICAgIHJldHVybiAnVGVtIHF1ZSBzZXIgdW0gSlNPTiBQb2ludGVyIHJlbGF0aXZvLCBwb3IgZXhlbXBsbyBcIjIvcmVmZXJlbmNpYS9wYXJhL2FsZ29cIic7XG4gICAgICBjYXNlICdyZWdleCc6XG4gICAgICAgIHJldHVybiAnVGVtIHF1ZSBzZXIgdW1hIGV4cHJlc3PDo28gcmVndWxhciwgcG9yIGV4ZW1wbG8gXCIoMS0pP1xcXFxkezN9LVxcXFxkezN9LVxcXFxkezR9XCInO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdUZW0gcXVlIHNlciBubyBmb3JtYXRvOiAnICsgZXJyb3IucmVxdWlyZWRGb3JtYXQ7XG4gICAgfVxuICB9LFxuICBtaW5pbXVtOiAnVGVtIHF1ZSBzZXIge3ttaW5pbXVtVmFsdWV9fSBvdSBtYWlzJyxcbiAgZXhjbHVzaXZlTWluaW11bTogJ1RlbSBxdWUgc2VyIG1haXMgcXVlIHt7ZXhjbHVzaXZlTWluaW11bVZhbHVlfX0nLFxuICBtYXhpbXVtOiAnVGVtIHF1ZSBzZXIge3ttYXhpbXVtVmFsdWV9fSBvdSBtZW5vcycsXG4gIGV4Y2x1c2l2ZU1heGltdW06ICdUZW0gcXVlIHNlciBtZW5vciBxdWUge3tleGNsdXNpdmVNYXhpbXVtVmFsdWV9fScsXG4gIG11bHRpcGxlT2Y6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGlmICgoMSAvIGVycm9yLm11bHRpcGxlT2ZWYWx1ZSkgJSAxMCA9PT0gMCkge1xuICAgICAgY29uc3QgZGVjaW1hbHMgPSBNYXRoLmxvZzEwKDEgLyBlcnJvci5tdWx0aXBsZU9mVmFsdWUpO1xuICAgICAgcmV0dXJuIGBUZW0gcXVlIHRlciAke2RlY2ltYWxzfSBvdSBtZW5vcyBjYXNhcyBkZWNpbWFpcy5gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYFRlbSBxdWUgc2VyIHVtIG3Dumx0aXBsbyBkZSAke2Vycm9yLm11bHRpcGxlT2ZWYWx1ZX0uYDtcbiAgICB9XG4gIH0sXG4gIG1pblByb3BlcnRpZXM6ICdEZXZlIHRlciB7e21pbmltdW1Qcm9wZXJ0aWVzfX0gb3UgbWFpcyBpdGVucyAoaXRlbnMgYXTDqSBvIG1vbWVudG86IHt7Y3VycmVudFByb3BlcnRpZXN9fSknLFxuICBtYXhQcm9wZXJ0aWVzOiAnRGV2ZSB0ZXIge3ttYXhpbXVtUHJvcGVydGllc319IG91IG1lbm9zIGludGVucyAoaXRlbnMgYXTDqSBvIG1vbWVudG86IHt7Y3VycmVudFByb3BlcnRpZXN9fSknLFxuICBtaW5JdGVtczogJ0RldmUgdGVyIHt7bWluaW11bUl0ZW1zfX0gb3UgbWFpcyBpdGVucyAoaXRlbnMgYXTDqSBvIG1vbWVudG86IHt7Y3VycmVudEl0ZW1zfX0pJyxcbiAgbWF4SXRlbXM6ICdEZXZlIHRlciB7e21heGltdW1JdGVtc319IG91IG1lbm9zIGl0ZW5zIChpdGVucyBhdMOpIG8gbW9tZW50bzoge3tjdXJyZW50SXRlbXN9fSknLFxuICB1bmlxdWVJdGVtczogJ1RvZG9zIG9zIGl0ZW5zIGRldmVtIHNlciDDum5pY29zJyxcbiAgLy8gTm90ZTogTm8gZGVmYXVsdCBlcnJvciBtZXNzYWdlcyBmb3IgJ3R5cGUnLCAnY29uc3QnLCAnZW51bScsIG9yICdkZXBlbmRlbmNpZXMnXG59O1xuIl19
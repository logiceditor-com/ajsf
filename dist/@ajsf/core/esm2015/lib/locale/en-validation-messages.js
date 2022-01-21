const ɵ0 = function (error) {
    switch (error.requiredFormat) {
        case 'date':
            return 'Must be a date, like "2000-12-31"';
        case 'time':
            return 'Must be a time, like "16:20" or "03:14:15.9265"';
        case 'date-time':
            return 'Must be a date-time, like "2000-03-14T01:59" or "2000-03-14T01:59:26.535Z"';
        case 'email':
            return 'Must be an email address, like "name@example.com"';
        case 'hostname':
            return 'Must be a hostname, like "example.com"';
        case 'ipv4':
            return 'Must be an IPv4 address, like "127.0.0.1"';
        case 'ipv6':
            return 'Must be an IPv6 address, like "1234:5678:9ABC:DEF0:1234:5678:9ABC:DEF0"';
        // TODO: add examples for 'uri', 'uri-reference', and 'uri-template'
        // case 'uri': case 'uri-reference': case 'uri-template':
        case 'url':
            return 'Must be a url, like "http://www.example.com/page.html"';
        case 'uuid':
            return 'Must be a uuid, like "12345678-9ABC-DEF0-1234-56789ABCDEF0"';
        case 'color':
            return 'Must be a color, like "#FFFFFF" or "rgb(255, 255, 255)"';
        case 'json-pointer':
            return 'Must be a JSON Pointer, like "/pointer/to/something"';
        case 'relative-json-pointer':
            return 'Must be a relative JSON Pointer, like "2/pointer/to/something"';
        case 'regex':
            return 'Must be a regular expression, like "(1-)?\\d{3}-\\d{3}-\\d{4}"';
        default:
            return 'Must be a correctly formatted ' + error.requiredFormat;
    }
}, ɵ1 = function (error) {
    if ((1 / error.multipleOfValue) % 10 === 0) {
        const decimals = Math.log10(1 / error.multipleOfValue);
        return `Must have ${decimals} or fewer decimal places.`;
    }
    else {
        return `Must be a multiple of ${error.multipleOfValue}.`;
    }
};
export const enValidationMessages = {
    required: 'This field is required.',
    minLength: 'Must be {{minimumLength}} characters or longer (current length: {{currentLength}})',
    maxLength: 'Must be {{maximumLength}} characters or shorter (current length: {{currentLength}})',
    pattern: 'Must match pattern: {{requiredPattern}}',
    format: ɵ0,
    minimum: 'Must be {{minimumValue}} or more',
    exclusiveMinimum: 'Must be more than {{exclusiveMinimumValue}}',
    maximum: 'Must be {{maximumValue}} or less',
    exclusiveMaximum: 'Must be less than {{exclusiveMaximumValue}}',
    multipleOf: ɵ1,
    minProperties: 'Must have {{minimumProperties}} or more items (current items: {{currentProperties}})',
    maxProperties: 'Must have {{maximumProperties}} or fewer items (current items: {{currentProperties}})',
    minItems: 'Must have {{minimumItems}} or more items (current items: {{currentItems}})',
    maxItems: 'Must have {{maximumItems}} or fewer items (current items: {{currentItems}})',
    uniqueItems: 'All items must be unique',
};
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW4tdmFsaWRhdGlvbi1tZXNzYWdlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fqc2YtY29yZS9zcmMvbGliL2xvY2FsZS9lbi12YWxpZGF0aW9uLW1lc3NhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJXQUtVLFVBQVUsS0FBSztJQUNyQixRQUFRLEtBQUssQ0FBQyxjQUFjLEVBQUU7UUFDNUIsS0FBSyxNQUFNO1lBQ1QsT0FBTyxtQ0FBbUMsQ0FBQztRQUM3QyxLQUFLLE1BQU07WUFDVCxPQUFPLGlEQUFpRCxDQUFDO1FBQzNELEtBQUssV0FBVztZQUNkLE9BQU8sNEVBQTRFLENBQUM7UUFDdEYsS0FBSyxPQUFPO1lBQ1YsT0FBTyxtREFBbUQsQ0FBQztRQUM3RCxLQUFLLFVBQVU7WUFDYixPQUFPLHdDQUF3QyxDQUFDO1FBQ2xELEtBQUssTUFBTTtZQUNULE9BQU8sMkNBQTJDLENBQUM7UUFDckQsS0FBSyxNQUFNO1lBQ1QsT0FBTyx5RUFBeUUsQ0FBQztRQUNuRixvRUFBb0U7UUFDcEUseURBQXlEO1FBQ3pELEtBQUssS0FBSztZQUNSLE9BQU8sd0RBQXdELENBQUM7UUFDbEUsS0FBSyxNQUFNO1lBQ1QsT0FBTyw2REFBNkQsQ0FBQztRQUN2RSxLQUFLLE9BQU87WUFDVixPQUFPLHlEQUF5RCxDQUFDO1FBQ25FLEtBQUssY0FBYztZQUNqQixPQUFPLHNEQUFzRCxDQUFDO1FBQ2hFLEtBQUssdUJBQXVCO1lBQzFCLE9BQU8sZ0VBQWdFLENBQUM7UUFDMUUsS0FBSyxPQUFPO1lBQ1YsT0FBTyxnRUFBZ0UsQ0FBQztRQUMxRTtZQUNFLE9BQU8sZ0NBQWdDLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztLQUNsRTtBQUNILENBQUMsT0FLVyxVQUFVLEtBQUs7SUFDekIsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRTtRQUMxQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdkQsT0FBTyxhQUFhLFFBQVEsMkJBQTJCLENBQUM7S0FDekQ7U0FBTTtRQUNMLE9BQU8seUJBQXlCLEtBQUssQ0FBQyxlQUFlLEdBQUcsQ0FBQztLQUMxRDtBQUNILENBQUM7QUFsREgsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQVE7SUFDdkMsUUFBUSxFQUFFLHlCQUF5QjtJQUNuQyxTQUFTLEVBQUUsb0ZBQW9GO0lBQy9GLFNBQVMsRUFBRSxxRkFBcUY7SUFDaEcsT0FBTyxFQUFFLHlDQUF5QztJQUNsRCxNQUFNLElBaUNMO0lBQ0QsT0FBTyxFQUFFLGtDQUFrQztJQUMzQyxnQkFBZ0IsRUFBRSw2Q0FBNkM7SUFDL0QsT0FBTyxFQUFFLGtDQUFrQztJQUMzQyxnQkFBZ0IsRUFBRSw2Q0FBNkM7SUFDL0QsVUFBVSxJQU9UO0lBQ0QsYUFBYSxFQUFFLHNGQUFzRjtJQUNyRyxhQUFhLEVBQUUsdUZBQXVGO0lBQ3RHLFFBQVEsRUFBRSw0RUFBNEU7SUFDdEYsUUFBUSxFQUFFLDZFQUE2RTtJQUN2RixXQUFXLEVBQUUsMEJBQTBCO0NBRXhDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZW5WYWxpZGF0aW9uTWVzc2FnZXM6IGFueSA9IHsgLy8gRGVmYXVsdCBFbmdsaXNoIGVycm9yIG1lc3NhZ2VzXG4gIHJlcXVpcmVkOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4nLFxuICBtaW5MZW5ndGg6ICdNdXN0IGJlIHt7bWluaW11bUxlbmd0aH19IGNoYXJhY3RlcnMgb3IgbG9uZ2VyIChjdXJyZW50IGxlbmd0aDoge3tjdXJyZW50TGVuZ3RofX0pJyxcbiAgbWF4TGVuZ3RoOiAnTXVzdCBiZSB7e21heGltdW1MZW5ndGh9fSBjaGFyYWN0ZXJzIG9yIHNob3J0ZXIgKGN1cnJlbnQgbGVuZ3RoOiB7e2N1cnJlbnRMZW5ndGh9fSknLFxuICBwYXR0ZXJuOiAnTXVzdCBtYXRjaCBwYXR0ZXJuOiB7e3JlcXVpcmVkUGF0dGVybn19JyxcbiAgZm9ybWF0OiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICBzd2l0Y2ggKGVycm9yLnJlcXVpcmVkRm9ybWF0KSB7XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgcmV0dXJuICdNdXN0IGJlIGEgZGF0ZSwgbGlrZSBcIjIwMDAtMTItMzFcIic7XG4gICAgICBjYXNlICd0aW1lJzpcbiAgICAgICAgcmV0dXJuICdNdXN0IGJlIGEgdGltZSwgbGlrZSBcIjE2OjIwXCIgb3IgXCIwMzoxNDoxNS45MjY1XCInO1xuICAgICAgY2FzZSAnZGF0ZS10aW1lJzpcbiAgICAgICAgcmV0dXJuICdNdXN0IGJlIGEgZGF0ZS10aW1lLCBsaWtlIFwiMjAwMC0wMy0xNFQwMTo1OVwiIG9yIFwiMjAwMC0wMy0xNFQwMTo1OToyNi41MzVaXCInO1xuICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICByZXR1cm4gJ011c3QgYmUgYW4gZW1haWwgYWRkcmVzcywgbGlrZSBcIm5hbWVAZXhhbXBsZS5jb21cIic7XG4gICAgICBjYXNlICdob3N0bmFtZSc6XG4gICAgICAgIHJldHVybiAnTXVzdCBiZSBhIGhvc3RuYW1lLCBsaWtlIFwiZXhhbXBsZS5jb21cIic7XG4gICAgICBjYXNlICdpcHY0JzpcbiAgICAgICAgcmV0dXJuICdNdXN0IGJlIGFuIElQdjQgYWRkcmVzcywgbGlrZSBcIjEyNy4wLjAuMVwiJztcbiAgICAgIGNhc2UgJ2lwdjYnOlxuICAgICAgICByZXR1cm4gJ011c3QgYmUgYW4gSVB2NiBhZGRyZXNzLCBsaWtlIFwiMTIzNDo1Njc4OjlBQkM6REVGMDoxMjM0OjU2Nzg6OUFCQzpERUYwXCInO1xuICAgICAgLy8gVE9ETzogYWRkIGV4YW1wbGVzIGZvciAndXJpJywgJ3VyaS1yZWZlcmVuY2UnLCBhbmQgJ3VyaS10ZW1wbGF0ZSdcbiAgICAgIC8vIGNhc2UgJ3VyaSc6IGNhc2UgJ3VyaS1yZWZlcmVuY2UnOiBjYXNlICd1cmktdGVtcGxhdGUnOlxuICAgICAgY2FzZSAndXJsJzpcbiAgICAgICAgcmV0dXJuICdNdXN0IGJlIGEgdXJsLCBsaWtlIFwiaHR0cDovL3d3dy5leGFtcGxlLmNvbS9wYWdlLmh0bWxcIic7XG4gICAgICBjYXNlICd1dWlkJzpcbiAgICAgICAgcmV0dXJuICdNdXN0IGJlIGEgdXVpZCwgbGlrZSBcIjEyMzQ1Njc4LTlBQkMtREVGMC0xMjM0LTU2Nzg5QUJDREVGMFwiJztcbiAgICAgIGNhc2UgJ2NvbG9yJzpcbiAgICAgICAgcmV0dXJuICdNdXN0IGJlIGEgY29sb3IsIGxpa2UgXCIjRkZGRkZGXCIgb3IgXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIic7XG4gICAgICBjYXNlICdqc29uLXBvaW50ZXInOlxuICAgICAgICByZXR1cm4gJ011c3QgYmUgYSBKU09OIFBvaW50ZXIsIGxpa2UgXCIvcG9pbnRlci90by9zb21ldGhpbmdcIic7XG4gICAgICBjYXNlICdyZWxhdGl2ZS1qc29uLXBvaW50ZXInOlxuICAgICAgICByZXR1cm4gJ011c3QgYmUgYSByZWxhdGl2ZSBKU09OIFBvaW50ZXIsIGxpa2UgXCIyL3BvaW50ZXIvdG8vc29tZXRoaW5nXCInO1xuICAgICAgY2FzZSAncmVnZXgnOlxuICAgICAgICByZXR1cm4gJ011c3QgYmUgYSByZWd1bGFyIGV4cHJlc3Npb24sIGxpa2UgXCIoMS0pP1xcXFxkezN9LVxcXFxkezN9LVxcXFxkezR9XCInO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdNdXN0IGJlIGEgY29ycmVjdGx5IGZvcm1hdHRlZCAnICsgZXJyb3IucmVxdWlyZWRGb3JtYXQ7XG4gICAgfVxuICB9LFxuICBtaW5pbXVtOiAnTXVzdCBiZSB7e21pbmltdW1WYWx1ZX19IG9yIG1vcmUnLFxuICBleGNsdXNpdmVNaW5pbXVtOiAnTXVzdCBiZSBtb3JlIHRoYW4ge3tleGNsdXNpdmVNaW5pbXVtVmFsdWV9fScsXG4gIG1heGltdW06ICdNdXN0IGJlIHt7bWF4aW11bVZhbHVlfX0gb3IgbGVzcycsXG4gIGV4Y2x1c2l2ZU1heGltdW06ICdNdXN0IGJlIGxlc3MgdGhhbiB7e2V4Y2x1c2l2ZU1heGltdW1WYWx1ZX19JyxcbiAgbXVsdGlwbGVPZjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgaWYgKCgxIC8gZXJyb3IubXVsdGlwbGVPZlZhbHVlKSAlIDEwID09PSAwKSB7XG4gICAgICBjb25zdCBkZWNpbWFscyA9IE1hdGgubG9nMTAoMSAvIGVycm9yLm11bHRpcGxlT2ZWYWx1ZSk7XG4gICAgICByZXR1cm4gYE11c3QgaGF2ZSAke2RlY2ltYWxzfSBvciBmZXdlciBkZWNpbWFsIHBsYWNlcy5gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYE11c3QgYmUgYSBtdWx0aXBsZSBvZiAke2Vycm9yLm11bHRpcGxlT2ZWYWx1ZX0uYDtcbiAgICB9XG4gIH0sXG4gIG1pblByb3BlcnRpZXM6ICdNdXN0IGhhdmUge3ttaW5pbXVtUHJvcGVydGllc319IG9yIG1vcmUgaXRlbXMgKGN1cnJlbnQgaXRlbXM6IHt7Y3VycmVudFByb3BlcnRpZXN9fSknLFxuICBtYXhQcm9wZXJ0aWVzOiAnTXVzdCBoYXZlIHt7bWF4aW11bVByb3BlcnRpZXN9fSBvciBmZXdlciBpdGVtcyAoY3VycmVudCBpdGVtczoge3tjdXJyZW50UHJvcGVydGllc319KScsXG4gIG1pbkl0ZW1zOiAnTXVzdCBoYXZlIHt7bWluaW11bUl0ZW1zfX0gb3IgbW9yZSBpdGVtcyAoY3VycmVudCBpdGVtczoge3tjdXJyZW50SXRlbXN9fSknLFxuICBtYXhJdGVtczogJ011c3QgaGF2ZSB7e21heGltdW1JdGVtc319IG9yIGZld2VyIGl0ZW1zIChjdXJyZW50IGl0ZW1zOiB7e2N1cnJlbnRJdGVtc319KScsXG4gIHVuaXF1ZUl0ZW1zOiAnQWxsIGl0ZW1zIG11c3QgYmUgdW5pcXVlJyxcbiAgLy8gTm90ZTogTm8gZGVmYXVsdCBlcnJvciBtZXNzYWdlcyBmb3IgJ3R5cGUnLCAnY29uc3QnLCAnZW51bScsIG9yICdkZXBlbmRlbmNpZXMnXG59O1xuIl19
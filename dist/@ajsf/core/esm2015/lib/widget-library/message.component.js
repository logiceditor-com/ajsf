import { Component, Input } from '@angular/core';
import { JsonSchemaFormService } from '../json-schema-form.service';
export class MessageComponent {
    constructor(jsf) {
        this.jsf = jsf;
        this.message = null;
    }
    ngOnInit() {
        this.options = this.layoutNode.options || {};
        this.message = this.options.help || this.options.helpvalue ||
            this.options.msg || this.options.message;
    }
}
MessageComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'message-widget',
                template: `
    <span *ngIf="message"
      [class]="options?.labelHtmlClass || ''"
      [innerHTML]="message"></span>`
            },] }
];
MessageComponent.ctorParameters = () => [
    { type: JsonSchemaFormService }
];
MessageComponent.propDecorators = {
    layoutNode: [{ type: Input }],
    layoutIndex: [{ type: Input }],
    dataIndex: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hanNmLWNvcmUvc3JjL2xpYi93aWRnZXQtbGlicmFyeS9tZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQVdwRSxNQUFNLE9BQU8sZ0JBQWdCO0lBTzNCLFlBQ1UsR0FBMEI7UUFBMUIsUUFBRyxHQUFILEdBQUcsQ0FBdUI7UUFOcEMsWUFBTyxHQUFXLElBQUksQ0FBQztJQU9uQixDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTO1lBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQzdDLENBQUM7OztZQXZCRixTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7OztvQ0FHd0I7YUFDbkM7OztZQVZRLHFCQUFxQjs7O3lCQWMzQixLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSnNvblNjaGVtYUZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vanNvbi1zY2hlbWEtZm9ybS5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ21lc3NhZ2Utd2lkZ2V0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiAqbmdJZj1cIm1lc3NhZ2VcIlxuICAgICAgW2NsYXNzXT1cIm9wdGlvbnM/LmxhYmVsSHRtbENsYXNzIHx8ICcnXCJcbiAgICAgIFtpbm5lckhUTUxdPVwibWVzc2FnZVwiPjwvc3Bhbj5gLFxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgb3B0aW9uczogYW55O1xuICBtZXNzYWdlOiBzdHJpbmcgPSBudWxsO1xuICBASW5wdXQoKSBsYXlvdXROb2RlOiBhbnk7XG4gIEBJbnB1dCgpIGxheW91dEluZGV4OiBudW1iZXJbXTtcbiAgQElucHV0KCkgZGF0YUluZGV4OiBudW1iZXJbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGpzZjogSnNvblNjaGVtYUZvcm1TZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5sYXlvdXROb2RlLm9wdGlvbnMgfHwge307XG4gICAgdGhpcy5tZXNzYWdlID0gdGhpcy5vcHRpb25zLmhlbHAgfHwgdGhpcy5vcHRpb25zLmhlbHB2YWx1ZSB8fFxuICAgICAgdGhpcy5vcHRpb25zLm1zZyB8fCB0aGlzLm9wdGlvbnMubWVzc2FnZTtcbiAgfVxufVxuIl19
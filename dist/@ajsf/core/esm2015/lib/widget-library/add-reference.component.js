import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { JsonSchemaFormService } from '../json-schema-form.service';
export class AddReferenceComponent {
    constructor(jsf) {
        this.jsf = jsf;
    }
    ngOnInit() {
        this.options = this.layoutNode.options || {};
    }
    get showAddButton() {
        return !this.layoutNode.arrayItem ||
            this.layoutIndex[this.layoutIndex.length - 1] < this.options.maxItems;
    }
    addItem(event) {
        event.preventDefault();
        this.jsf.addItem(this);
    }
    get buttonText() {
        const parent = {
            dataIndex: this.dataIndex.slice(0, -1),
            layoutIndex: this.layoutIndex.slice(0, -1),
            layoutNode: this.jsf.getParentNode(this)
        };
        return parent.layoutNode.add ||
            this.jsf.setArrayItemTitle(parent, this.layoutNode, this.itemCount);
    }
}
AddReferenceComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'add-reference-widget',
                template: `
    <button *ngIf="showAddButton"
      [class]="options?.fieldHtmlClass || ''"
      [disabled]="options?.readonly"
      (click)="addItem($event)">
      <span *ngIf="options?.icon" [class]="options?.icon"></span>
      <span *ngIf="options?.title" [innerHTML]="buttonText"></span>
    </button>`,
                changeDetection: ChangeDetectionStrategy.Default
            },] }
];
AddReferenceComponent.ctorParameters = () => [
    { type: JsonSchemaFormService }
];
AddReferenceComponent.propDecorators = {
    layoutNode: [{ type: Input }],
    layoutIndex: [{ type: Input }],
    dataIndex: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXJlZmVyZW5jZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hanNmLWNvcmUvc3JjL2xpYi93aWRnZXQtbGlicmFyeS9hZGQtcmVmZXJlbmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBRUosTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFnQnBFLE1BQU0sT0FBTyxxQkFBcUI7SUFTaEMsWUFDVSxHQUEwQjtRQUExQixRQUFHLEdBQUgsR0FBRyxDQUF1QjtJQUNoQyxDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTO1lBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDMUUsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFLO1FBQ1gsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixNQUFNLE1BQU0sR0FBUTtZQUNsQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUMsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztTQUN6QyxDQUFDO1FBQ0YsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUc7WUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7O1lBaERGLFNBQVMsU0FBQztnQkFDVCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7OztjQU9FO2dCQUNWLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxPQUFPO2FBQ25EOzs7WUFmUSxxQkFBcUI7Ozt5QkFxQjNCLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdFxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSnNvblNjaGVtYUZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vanNvbi1zY2hlbWEtZm9ybS5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2FkZC1yZWZlcmVuY2Utd2lkZ2V0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uICpuZ0lmPVwic2hvd0FkZEJ1dHRvblwiXG4gICAgICBbY2xhc3NdPVwib3B0aW9ucz8uZmllbGRIdG1sQ2xhc3MgfHwgJydcIlxuICAgICAgW2Rpc2FibGVkXT1cIm9wdGlvbnM/LnJlYWRvbmx5XCJcbiAgICAgIChjbGljayk9XCJhZGRJdGVtKCRldmVudClcIj5cbiAgICAgIDxzcGFuICpuZ0lmPVwib3B0aW9ucz8uaWNvblwiIFtjbGFzc109XCJvcHRpb25zPy5pY29uXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gKm5nSWY9XCJvcHRpb25zPy50aXRsZVwiIFtpbm5lckhUTUxdPVwiYnV0dG9uVGV4dFwiPjwvc3Bhbj5cbiAgICA8L2J1dHRvbj5gLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCxcbn0pXG5leHBvcnQgY2xhc3MgQWRkUmVmZXJlbmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgb3B0aW9uczogYW55O1xuICBpdGVtQ291bnQ6IG51bWJlcjtcbiAgcHJldmlvdXNMYXlvdXRJbmRleDogbnVtYmVyW107XG4gIHByZXZpb3VzRGF0YUluZGV4OiBudW1iZXJbXTtcbiAgQElucHV0KCkgbGF5b3V0Tm9kZTogYW55O1xuICBASW5wdXQoKSBsYXlvdXRJbmRleDogbnVtYmVyW107XG4gIEBJbnB1dCgpIGRhdGFJbmRleDogbnVtYmVyW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBqc2Y6IEpzb25TY2hlbWFGb3JtU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMubGF5b3V0Tm9kZS5vcHRpb25zIHx8IHt9O1xuICB9XG5cbiAgZ2V0IHNob3dBZGRCdXR0b24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmxheW91dE5vZGUuYXJyYXlJdGVtIHx8XG4gICAgICB0aGlzLmxheW91dEluZGV4W3RoaXMubGF5b3V0SW5kZXgubGVuZ3RoIC0gMV0gPCB0aGlzLm9wdGlvbnMubWF4SXRlbXM7XG4gIH1cblxuICBhZGRJdGVtKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmpzZi5hZGRJdGVtKHRoaXMpO1xuICB9XG5cbiAgZ2V0IGJ1dHRvblRleHQoKTogc3RyaW5nIHtcbiAgICBjb25zdCBwYXJlbnQ6IGFueSA9IHtcbiAgICAgIGRhdGFJbmRleDogdGhpcy5kYXRhSW5kZXguc2xpY2UoMCwgLTEpLFxuICAgICAgbGF5b3V0SW5kZXg6IHRoaXMubGF5b3V0SW5kZXguc2xpY2UoMCwgLTEpLFxuICAgICAgbGF5b3V0Tm9kZTogdGhpcy5qc2YuZ2V0UGFyZW50Tm9kZSh0aGlzKVxuICAgIH07XG4gICAgcmV0dXJuIHBhcmVudC5sYXlvdXROb2RlLmFkZCB8fFxuICAgICAgdGhpcy5qc2Yuc2V0QXJyYXlJdGVtVGl0bGUocGFyZW50LCB0aGlzLmxheW91dE5vZGUsIHRoaXMuaXRlbUNvdW50KTtcbiAgfVxufVxuIl19
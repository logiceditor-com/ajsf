import { Component, Input } from '@angular/core';
export class NoFrameworkComponent {
}
NoFrameworkComponent.decorators = [
    { type: Component, args: [{
                selector: 'no-framework',
                template: "<select-widget-widget [dataIndex]=\"dataIndex\" [layoutIndex]=\"layoutIndex\" [layoutNode]=\"layoutNode\">\n</select-widget-widget>"
            },] }
];
NoFrameworkComponent.propDecorators = {
    layoutNode: [{ type: Input }],
    layoutIndex: [{ type: Input }],
    dataIndex: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8tZnJhbWV3b3JrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fqc2YtY29yZS9zcmMvbGliL2ZyYW1ld29yay1saWJyYXJ5L25vLWZyYW1ld29yay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNakQsTUFBTSxPQUFPLG9CQUFvQjs7O1lBSmhDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsK0lBQTRDO2FBQzdDOzs7eUJBRUUsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vLWZyYW1ld29yaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9uby1mcmFtZXdvcmsuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBOb0ZyYW1ld29ya0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGxheW91dE5vZGU6IGFueTtcbiAgQElucHV0KCkgbGF5b3V0SW5kZXg6IG51bWJlcltdO1xuICBASW5wdXQoKSBkYXRhSW5kZXg6IG51bWJlcltdO1xufVxuIl19
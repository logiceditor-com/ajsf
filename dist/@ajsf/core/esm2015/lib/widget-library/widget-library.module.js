import { BASIC_WIDGETS } from './index';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { OrderableDirective } from './orderable.directive';
export class WidgetLibraryModule {
}
WidgetLibraryModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, ReactiveFormsModule],
                declarations: [...BASIC_WIDGETS, OrderableDirective],
                exports: [...BASIC_WIDGETS, OrderableDirective],
                entryComponents: [...BASIC_WIDGETS]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LWxpYnJhcnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWpzZi1jb3JlL3NyYy9saWIvd2lkZ2V0LWxpYnJhcnkvd2lkZ2V0LWxpYnJhcnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDeEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBUTNELE1BQU0sT0FBTyxtQkFBbUI7OztZQU4vQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQztnQkFDekQsWUFBWSxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsa0JBQWtCLENBQUM7Z0JBQ3BELE9BQU8sRUFBRSxDQUFDLEdBQUcsYUFBYSxFQUFFLGtCQUFrQixDQUFDO2dCQUMvQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQzthQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJBU0lDX1dJREdFVFMgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPcmRlcmFibGVEaXJlY3RpdmUgfSBmcm9tICcuL29yZGVyYWJsZS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkJBU0lDX1dJREdFVFMsIE9yZGVyYWJsZURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFsuLi5CQVNJQ19XSURHRVRTLCBPcmRlcmFibGVEaXJlY3RpdmVdLFxuICBlbnRyeUNvbXBvbmVudHM6IFsuLi5CQVNJQ19XSURHRVRTXVxufSlcbmV4cG9ydCBjbGFzcyBXaWRnZXRMaWJyYXJ5TW9kdWxlIHtcbn1cbiJdfQ==
import { CommonModule } from '@angular/common';
import { Framework } from './framework';
import { NgModule } from '@angular/core';
import { NoFramework } from './no.framework';
import { NoFrameworkComponent } from './no-framework.component';
import { WidgetLibraryModule } from '../widget-library/widget-library.module';
// No framework - plain HTML controls (styles from form layout only)
export class NoFrameworkModule {
}
NoFrameworkModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, WidgetLibraryModule],
                declarations: [NoFrameworkComponent],
                exports: [NoFrameworkComponent],
                providers: [
                    { provide: Framework, useClass: NoFramework, multi: true }
                ],
                entryComponents: [NoFrameworkComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8tZnJhbWV3b3JrLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fqc2YtY29yZS9zcmMvbGliL2ZyYW1ld29yay1saWJyYXJ5L25vLWZyYW1ld29yay5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFOUUsb0VBQW9FO0FBV3BFLE1BQU0sT0FBTyxpQkFBaUI7OztZQVQ3QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLG1CQUFtQixDQUFDO2dCQUM1QyxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQy9CLFNBQVMsRUFBRTtvQkFDVCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2lCQUMzRDtnQkFDRCxlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUN4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGcmFtZXdvcmsgfSBmcm9tICcuL2ZyYW1ld29yayc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm9GcmFtZXdvcmsgfSBmcm9tICcuL25vLmZyYW1ld29yayc7XG5pbXBvcnQgeyBOb0ZyYW1ld29ya0NvbXBvbmVudCB9IGZyb20gJy4vbm8tZnJhbWV3b3JrLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXaWRnZXRMaWJyYXJ5TW9kdWxlIH0gZnJvbSAnLi4vd2lkZ2V0LWxpYnJhcnkvd2lkZ2V0LWxpYnJhcnkubW9kdWxlJztcblxuLy8gTm8gZnJhbWV3b3JrIC0gcGxhaW4gSFRNTCBjb250cm9scyAoc3R5bGVzIGZyb20gZm9ybSBsYXlvdXQgb25seSlcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgV2lkZ2V0TGlicmFyeU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05vRnJhbWV3b3JrQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW05vRnJhbWV3b3JrQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBGcmFtZXdvcmssIHVzZUNsYXNzOiBOb0ZyYW1ld29yaywgbXVsdGk6IHRydWUgfVxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtOb0ZyYW1ld29ya0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTm9GcmFtZXdvcmtNb2R1bGUgeyB9XG4iXX0=
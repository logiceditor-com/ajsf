import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Framework, JsonSchemaFormService, WidgetLibraryService, FrameworkLibraryService, JsonSchemaFormModule, WidgetLibraryModule } from '@ajsf/core';
import { Bootstrap4Framework } from './bootstrap4.framework';
import { Bootstrap4FrameworkComponent } from './bootstrap4-framework.component';
export class Bootstrap4FrameworkModule {
}
Bootstrap4FrameworkModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    JsonSchemaFormModule,
                    CommonModule,
                    WidgetLibraryModule,
                ],
                declarations: [
                    Bootstrap4FrameworkComponent,
                ],
                exports: [
                    JsonSchemaFormModule,
                    Bootstrap4FrameworkComponent,
                ],
                providers: [
                    JsonSchemaFormService,
                    FrameworkLibraryService,
                    WidgetLibraryService,
                    { provide: Framework, useClass: Bootstrap4Framework, multi: true },
                ],
                entryComponents: [
                    Bootstrap4FrameworkComponent,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwNC1mcmFtZXdvcmsubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWpzZi1ib290c3RyYXA0L3NyYy9saWIvYm9vdHN0cmFwNC1mcmFtZXdvcmsubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFDTCxTQUFTLEVBQ1QscUJBQXFCLEVBQ3JCLG9CQUFvQixFQUNwQix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNwQixNQUFNLFlBQVksQ0FBQztBQUNwQixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQXlCOUUsTUFBTSxPQUFPLHlCQUF5Qjs7O1lBdkJyQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLG9CQUFvQjtvQkFDcEIsWUFBWTtvQkFDWixtQkFBbUI7aUJBQ3BCO2dCQUNELFlBQVksRUFBRTtvQkFDWiw0QkFBNEI7aUJBQzdCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxvQkFBb0I7b0JBQ3BCLDRCQUE0QjtpQkFDN0I7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULHFCQUFxQjtvQkFDckIsdUJBQXVCO29CQUN2QixvQkFBb0I7b0JBQ3BCLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQztpQkFDakU7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLDRCQUE0QjtpQkFDN0I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBGcmFtZXdvcmssXG4gIEpzb25TY2hlbWFGb3JtU2VydmljZSxcbiAgV2lkZ2V0TGlicmFyeVNlcnZpY2UsXG4gIEZyYW1ld29ya0xpYnJhcnlTZXJ2aWNlLFxuICBKc29uU2NoZW1hRm9ybU1vZHVsZSxcbiAgV2lkZ2V0TGlicmFyeU1vZHVsZVxufSBmcm9tICdAYWpzZi9jb3JlJztcbmltcG9ydCB7Qm9vdHN0cmFwNEZyYW1ld29ya30gZnJvbSAnLi9ib290c3RyYXA0LmZyYW1ld29yayc7XG5pbXBvcnQge0Jvb3RzdHJhcDRGcmFtZXdvcmtDb21wb25lbnR9IGZyb20gJy4vYm9vdHN0cmFwNC1mcmFtZXdvcmsuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEpzb25TY2hlbWFGb3JtTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBXaWRnZXRMaWJyYXJ5TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCb290c3RyYXA0RnJhbWV3b3JrQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgSnNvblNjaGVtYUZvcm1Nb2R1bGUsXG4gICAgQm9vdHN0cmFwNEZyYW1ld29ya0NvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgSnNvblNjaGVtYUZvcm1TZXJ2aWNlLFxuICAgIEZyYW1ld29ya0xpYnJhcnlTZXJ2aWNlLFxuICAgIFdpZGdldExpYnJhcnlTZXJ2aWNlLFxuICAgIHtwcm92aWRlOiBGcmFtZXdvcmssIHVzZUNsYXNzOiBCb290c3RyYXA0RnJhbWV3b3JrLCBtdWx0aTogdHJ1ZX0sXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIEJvb3RzdHJhcDRGcmFtZXdvcmtDb21wb25lbnQsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwNEZyYW1ld29ya01vZHVsZSB7XG59XG4iXX0=
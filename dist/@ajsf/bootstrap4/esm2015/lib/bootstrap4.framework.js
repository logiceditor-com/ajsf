import { Injectable } from '@angular/core';
import { Framework } from '@ajsf/core';
import { Bootstrap4FrameworkComponent } from './bootstrap4-framework.component';
// Bootstrap 4 Framework
// https://github.com/ng-bootstrap/ng-bootstrap
export class Bootstrap4Framework extends Framework {
    constructor() {
        super(...arguments);
        this.name = 'bootstrap-4';
        this.framework = Bootstrap4FrameworkComponent;
        this.stylesheets = [];
        this.scripts = [];
    }
}
Bootstrap4Framework.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwNC5mcmFtZXdvcmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hanNmLWJvb3RzdHJhcDQvc3JjL2xpYi9ib290c3RyYXA0LmZyYW1ld29yay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFFOUUsd0JBQXdCO0FBQ3hCLCtDQUErQztBQUcvQyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsU0FBUztJQURsRDs7UUFFRSxTQUFJLEdBQUcsYUFBYSxDQUFDO1FBRXJCLGNBQVMsR0FBRyw0QkFBNEIsQ0FBQztRQUV6QyxnQkFBVyxHQUFHLEVBQ2IsQ0FBQztRQUVGLFlBQU8sR0FBRyxFQUNULENBQUM7SUFDSixDQUFDOzs7WUFYQSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RnJhbWV3b3JrfSBmcm9tICdAYWpzZi9jb3JlJztcbmltcG9ydCB7Qm9vdHN0cmFwNEZyYW1ld29ya0NvbXBvbmVudH0gZnJvbSAnLi9ib290c3RyYXA0LWZyYW1ld29yay5jb21wb25lbnQnO1xuXG4vLyBCb290c3RyYXAgNCBGcmFtZXdvcmtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9uZy1ib290c3RyYXAvbmctYm9vdHN0cmFwXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCb290c3RyYXA0RnJhbWV3b3JrIGV4dGVuZHMgRnJhbWV3b3JrIHtcbiAgbmFtZSA9ICdib290c3RyYXAtNCc7XG5cbiAgZnJhbWV3b3JrID0gQm9vdHN0cmFwNEZyYW1ld29ya0NvbXBvbmVudDtcblxuICBzdHlsZXNoZWV0cyA9IFtcbiAgXTtcblxuICBzY3JpcHRzID0gW1xuICBdO1xufVxuIl19
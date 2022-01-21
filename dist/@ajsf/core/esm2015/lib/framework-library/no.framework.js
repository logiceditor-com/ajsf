import { Injectable } from '@angular/core';
import { Framework } from './framework';
import { NoFrameworkComponent } from './no-framework.component';
// No framework - plain HTML controls (styles from form layout only)
export class NoFramework extends Framework {
    constructor() {
        super(...arguments);
        this.name = 'no-framework';
        this.framework = NoFrameworkComponent;
    }
}
NoFramework.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8uZnJhbWV3b3JrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWpzZi1jb3JlL3NyYy9saWIvZnJhbWV3b3JrLWxpYnJhcnkvbm8uZnJhbWV3b3JrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxvRUFBb0U7QUFHcEUsTUFBTSxPQUFPLFdBQVksU0FBUSxTQUFTO0lBRDFDOztRQUVFLFNBQUksR0FBRyxjQUFjLENBQUM7UUFFdEIsY0FBUyxHQUFHLG9CQUFvQixDQUFDO0lBQ25DLENBQUM7OztZQUxBLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGcmFtZXdvcmsgfSBmcm9tICcuL2ZyYW1ld29yayc7XG5pbXBvcnQgeyBOb0ZyYW1ld29ya0NvbXBvbmVudCB9IGZyb20gJy4vbm8tZnJhbWV3b3JrLmNvbXBvbmVudCc7XG4vLyBObyBmcmFtZXdvcmsgLSBwbGFpbiBIVE1MIGNvbnRyb2xzIChzdHlsZXMgZnJvbSBmb3JtIGxheW91dCBvbmx5KVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm9GcmFtZXdvcmsgZXh0ZW5kcyBGcmFtZXdvcmsge1xuICBuYW1lID0gJ25vLWZyYW1ld29yayc7XG5cbiAgZnJhbWV3b3JrID0gTm9GcmFtZXdvcmtDb21wb25lbnQ7XG59XG4iXX0=
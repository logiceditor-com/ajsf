import { Framework } from './framework';
import { hasOwn } from '../shared/utility.functions';
import { Inject, Injectable } from '@angular/core';
import { WidgetLibraryService } from '../widget-library/widget-library.service';
import * as i0 from "@angular/core";
import * as i1 from "./framework";
import * as i2 from "../widget-library/widget-library.service";
// Possible future frameworks:
// - Foundation 6:
//   http://justindavis.co/2017/06/15/using-foundation-6-in-angular-4/
//   https://github.com/zurb/foundation-sites
// - Semantic UI:
//   https://github.com/edcarroll/ng2-semantic-ui
//   https://github.com/vladotesanovic/ngSemantic
export class FrameworkLibraryService {
    constructor(frameworks, widgetLibrary) {
        this.frameworks = frameworks;
        this.widgetLibrary = widgetLibrary;
        this.activeFramework = null;
        this.loadExternalAssets = false;
        this.frameworkLibrary = {};
        this.frameworks.forEach(framework => this.frameworkLibrary[framework.name] = framework);
        this.defaultFramework = this.frameworks[0].name;
        this.setFramework(this.defaultFramework);
    }
    setLoadExternalAssets(loadExternalAssets = true) {
        this.loadExternalAssets = !!loadExternalAssets;
    }
    setFramework(framework = this.defaultFramework, loadExternalAssets = this.loadExternalAssets) {
        this.activeFramework =
            typeof framework === 'string' && this.hasFramework(framework) ?
                this.frameworkLibrary[framework] :
                typeof framework === 'object' && hasOwn(framework, 'framework') ?
                    framework :
                    this.frameworkLibrary[this.defaultFramework];
        return this.registerFrameworkWidgets(this.activeFramework);
    }
    registerFrameworkWidgets(framework) {
        return hasOwn(framework, 'widgets') ?
            this.widgetLibrary.registerFrameworkWidgets(framework.widgets) :
            this.widgetLibrary.unRegisterFrameworkWidgets();
    }
    hasFramework(type) {
        return hasOwn(this.frameworkLibrary, type);
    }
    getFramework() {
        if (!this.activeFramework) {
            this.setFramework('default', true);
        }
        return this.activeFramework.framework;
    }
    getFrameworkWidgets() {
        return this.activeFramework.widgets || {};
    }
    getFrameworkStylesheets(load = this.loadExternalAssets) {
        return (load && this.activeFramework.stylesheets) || [];
    }
    getFrameworkScripts(load = this.loadExternalAssets) {
        return (load && this.activeFramework.scripts) || [];
    }
}
FrameworkLibraryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FrameworkLibraryService_Factory() { return new FrameworkLibraryService(i0.ɵɵinject(i1.Framework), i0.ɵɵinject(i2.WidgetLibraryService)); }, token: FrameworkLibraryService, providedIn: "root" });
FrameworkLibraryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
FrameworkLibraryService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [Framework,] }] },
    { type: WidgetLibraryService, decorators: [{ type: Inject, args: [WidgetLibraryService,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWV3b3JrLWxpYnJhcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fqc2YtY29yZS9zcmMvbGliL2ZyYW1ld29yay1saWJyYXJ5L2ZyYW1ld29yay1saWJyYXJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7QUFFaEYsOEJBQThCO0FBQzlCLGtCQUFrQjtBQUNsQixzRUFBc0U7QUFDdEUsNkNBQTZDO0FBQzdDLGlCQUFpQjtBQUNqQixpREFBaUQ7QUFDakQsaURBQWlEO0FBS2pELE1BQU0sT0FBTyx1QkFBdUI7SUFRbEMsWUFDNkIsVUFBaUIsRUFDTixhQUFtQztRQUQ5QyxlQUFVLEdBQVYsVUFBVSxDQUFPO1FBQ04sa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBVDNFLG9CQUFlLEdBQWMsSUFBSSxDQUFDO1FBR2xDLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUUzQixxQkFBZ0IsR0FBa0MsRUFBRSxDQUFDO1FBTW5ELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUNsRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLHFCQUFxQixDQUFDLGtCQUFrQixHQUFHLElBQUk7UUFDcEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztJQUNqRCxDQUFDO0lBRU0sWUFBWSxDQUNqQixZQUE4QixJQUFJLENBQUMsZ0JBQWdCLEVBQ25ELGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0I7UUFFNUMsSUFBSSxDQUFDLGVBQWU7WUFDbEIsT0FBTyxTQUFTLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDN0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLE9BQU8sU0FBUyxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQy9ELFNBQVMsQ0FBQyxDQUFDO29CQUNYLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNqRCxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELHdCQUF3QixDQUFDLFNBQW9CO1FBQzNDLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFTSxZQUFZLENBQUMsSUFBWTtRQUM5QixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLFlBQVk7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUFFO1FBQ2xFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUVNLG1CQUFtQjtRQUN4QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRU0sdUJBQXVCLENBQUMsT0FBZ0IsSUFBSSxDQUFDLGtCQUFrQjtRQUNwRSxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFELENBQUM7SUFFTSxtQkFBbUIsQ0FBQyxPQUFnQixJQUFJLENBQUMsa0JBQWtCO1FBQ2hFLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEQsQ0FBQzs7OztZQWhFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozt3Q0FVSSxNQUFNLFNBQUMsU0FBUztZQXRCWixvQkFBb0IsdUJBdUJ4QixNQUFNLFNBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhbWV3b3JrIH0gZnJvbSAnLi9mcmFtZXdvcmsnO1xuaW1wb3J0IHsgaGFzT3duIH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxpdHkuZnVuY3Rpb25zJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2lkZ2V0TGlicmFyeVNlcnZpY2UgfSBmcm9tICcuLi93aWRnZXQtbGlicmFyeS93aWRnZXQtbGlicmFyeS5zZXJ2aWNlJztcblxuLy8gUG9zc2libGUgZnV0dXJlIGZyYW1ld29ya3M6XG4vLyAtIEZvdW5kYXRpb24gNjpcbi8vICAgaHR0cDovL2p1c3RpbmRhdmlzLmNvLzIwMTcvMDYvMTUvdXNpbmctZm91bmRhdGlvbi02LWluLWFuZ3VsYXItNC9cbi8vICAgaHR0cHM6Ly9naXRodWIuY29tL3p1cmIvZm91bmRhdGlvbi1zaXRlc1xuLy8gLSBTZW1hbnRpYyBVSTpcbi8vICAgaHR0cHM6Ly9naXRodWIuY29tL2VkY2Fycm9sbC9uZzItc2VtYW50aWMtdWlcbi8vICAgaHR0cHM6Ly9naXRodWIuY29tL3ZsYWRvdGVzYW5vdmljL25nU2VtYW50aWNcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEZyYW1ld29ya0xpYnJhcnlTZXJ2aWNlIHtcbiAgYWN0aXZlRnJhbWV3b3JrOiBGcmFtZXdvcmsgPSBudWxsO1xuICBzdHlsZXNoZWV0czogKEhUTUxTdHlsZUVsZW1lbnR8SFRNTExpbmtFbGVtZW50KVtdO1xuICBzY3JpcHRzOiBIVE1MU2NyaXB0RWxlbWVudFtdO1xuICBsb2FkRXh0ZXJuYWxBc3NldHMgPSBmYWxzZTtcbiAgZGVmYXVsdEZyYW1ld29yazogc3RyaW5nO1xuICBmcmFtZXdvcmtMaWJyYXJ5OiB7IFtuYW1lOiBzdHJpbmddOiBGcmFtZXdvcmsgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRnJhbWV3b3JrKSBwcml2YXRlIGZyYW1ld29ya3M6IGFueVtdLFxuICAgIEBJbmplY3QoV2lkZ2V0TGlicmFyeVNlcnZpY2UpIHByaXZhdGUgd2lkZ2V0TGlicmFyeTogV2lkZ2V0TGlicmFyeVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5mcmFtZXdvcmtzLmZvckVhY2goZnJhbWV3b3JrID0+XG4gICAgICB0aGlzLmZyYW1ld29ya0xpYnJhcnlbZnJhbWV3b3JrLm5hbWVdID0gZnJhbWV3b3JrXG4gICAgKTtcbiAgICB0aGlzLmRlZmF1bHRGcmFtZXdvcmsgPSB0aGlzLmZyYW1ld29ya3NbMF0ubmFtZTtcbiAgICB0aGlzLnNldEZyYW1ld29yayh0aGlzLmRlZmF1bHRGcmFtZXdvcmspO1xuICB9XG5cbiAgcHVibGljIHNldExvYWRFeHRlcm5hbEFzc2V0cyhsb2FkRXh0ZXJuYWxBc3NldHMgPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkRXh0ZXJuYWxBc3NldHMgPSAhIWxvYWRFeHRlcm5hbEFzc2V0cztcbiAgfVxuXG4gIHB1YmxpYyBzZXRGcmFtZXdvcmsoXG4gICAgZnJhbWV3b3JrOiBzdHJpbmd8RnJhbWV3b3JrID0gdGhpcy5kZWZhdWx0RnJhbWV3b3JrLFxuICAgIGxvYWRFeHRlcm5hbEFzc2V0cyA9IHRoaXMubG9hZEV4dGVybmFsQXNzZXRzXG4gICk6IGJvb2xlYW4ge1xuICAgIHRoaXMuYWN0aXZlRnJhbWV3b3JrID1cbiAgICAgIHR5cGVvZiBmcmFtZXdvcmsgPT09ICdzdHJpbmcnICYmIHRoaXMuaGFzRnJhbWV3b3JrKGZyYW1ld29yaykgP1xuICAgICAgICB0aGlzLmZyYW1ld29ya0xpYnJhcnlbZnJhbWV3b3JrXSA6XG4gICAgICB0eXBlb2YgZnJhbWV3b3JrID09PSAnb2JqZWN0JyAmJiBoYXNPd24oZnJhbWV3b3JrLCAnZnJhbWV3b3JrJykgP1xuICAgICAgICBmcmFtZXdvcmsgOlxuICAgICAgICB0aGlzLmZyYW1ld29ya0xpYnJhcnlbdGhpcy5kZWZhdWx0RnJhbWV3b3JrXTtcbiAgICByZXR1cm4gdGhpcy5yZWdpc3RlckZyYW1ld29ya1dpZGdldHModGhpcy5hY3RpdmVGcmFtZXdvcmspO1xuICB9XG5cbiAgcmVnaXN0ZXJGcmFtZXdvcmtXaWRnZXRzKGZyYW1ld29yazogRnJhbWV3b3JrKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGhhc093bihmcmFtZXdvcmssICd3aWRnZXRzJykgP1xuICAgICAgdGhpcy53aWRnZXRMaWJyYXJ5LnJlZ2lzdGVyRnJhbWV3b3JrV2lkZ2V0cyhmcmFtZXdvcmsud2lkZ2V0cykgOlxuICAgICAgdGhpcy53aWRnZXRMaWJyYXJ5LnVuUmVnaXN0ZXJGcmFtZXdvcmtXaWRnZXRzKCk7XG4gIH1cblxuICBwdWJsaWMgaGFzRnJhbWV3b3JrKHR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBoYXNPd24odGhpcy5mcmFtZXdvcmtMaWJyYXJ5LCB0eXBlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGcmFtZXdvcmsoKTogYW55IHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlRnJhbWV3b3JrKSB7IHRoaXMuc2V0RnJhbWV3b3JrKCdkZWZhdWx0JywgdHJ1ZSk7IH1cbiAgICByZXR1cm4gdGhpcy5hY3RpdmVGcmFtZXdvcmsuZnJhbWV3b3JrO1xuICB9XG5cbiAgcHVibGljIGdldEZyYW1ld29ya1dpZGdldHMoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVGcmFtZXdvcmsud2lkZ2V0cyB8fCB7fTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGcmFtZXdvcmtTdHlsZXNoZWV0cyhsb2FkOiBib29sZWFuID0gdGhpcy5sb2FkRXh0ZXJuYWxBc3NldHMpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIChsb2FkICYmIHRoaXMuYWN0aXZlRnJhbWV3b3JrLnN0eWxlc2hlZXRzKSB8fCBbXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGcmFtZXdvcmtTY3JpcHRzKGxvYWQ6IGJvb2xlYW4gPSB0aGlzLmxvYWRFeHRlcm5hbEFzc2V0cyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gKGxvYWQgJiYgdGhpcy5hY3RpdmVGcmFtZXdvcmsuc2NyaXB0cykgfHwgW107XG4gIH1cbn1cbiJdfQ==
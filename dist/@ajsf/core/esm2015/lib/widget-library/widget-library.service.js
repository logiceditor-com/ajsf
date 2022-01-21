import { AddReferenceComponent } from './add-reference.component';
import { ButtonComponent } from './button.component';
import { CheckboxComponent } from './checkbox.component';
import { CheckboxesComponent } from './checkboxes.component';
import { FileComponent } from './file.component';
import { hasOwn } from '../shared/utility.functions';
import { Injectable } from '@angular/core';
import { InputComponent } from './input.component';
import { MessageComponent } from './message.component';
import { NoneComponent } from './none.component';
import { NumberComponent } from './number.component';
import { OneOfComponent } from './one-of.component';
import { RadiosComponent } from './radios.component';
import { RootComponent } from './root.component';
import { SectionComponent } from './section.component';
import { SelectComponent } from './select.component';
import { SelectFrameworkComponent } from './select-framework.component';
import { SelectWidgetComponent } from './select-widget.component';
import { SubmitComponent } from './submit.component';
import { TabsComponent } from './tabs.component';
import { TemplateComponent } from './template.component';
import { TextareaComponent } from './textarea.component';
import * as i0 from "@angular/core";
export class WidgetLibraryService {
    constructor() {
        this.defaultWidget = 'text';
        this.widgetLibrary = {
            // Angular JSON Schema Form administrative widgets
            'none': NoneComponent,
            'root': RootComponent,
            'select-framework': SelectFrameworkComponent,
            'select-widget': SelectWidgetComponent,
            '$ref': AddReferenceComponent,
            // Free-form text HTML 'input' form control widgets <input type="...">
            'email': 'text',
            'integer': 'number',
            'number': NumberComponent,
            'password': 'text',
            'search': 'text',
            'tel': 'text',
            'text': InputComponent,
            'url': 'text',
            // Controlled text HTML 'input' form control widgets <input type="...">
            'color': 'text',
            'date': 'text',
            'datetime': 'text',
            'datetime-local': 'text',
            'month': 'text',
            'range': 'number',
            'time': 'text',
            'week': 'text',
            // Non-text HTML 'input' form control widgets <input type="...">
            // 'button': <input type="button"> not used, use <button> instead
            'checkbox': CheckboxComponent,
            'file': FileComponent,
            'hidden': 'text',
            'image': 'text',
            'radio': 'radios',
            'reset': 'submit',
            'submit': SubmitComponent,
            // Other (non-'input') HTML form control widgets
            'button': ButtonComponent,
            'select': SelectComponent,
            // 'option': automatically generated by select widgets
            // 'optgroup': automatically generated by select widgets
            'textarea': TextareaComponent,
            // HTML form control widget sets
            'checkboxes': CheckboxesComponent,
            'checkboxes-inline': 'checkboxes',
            'checkboxbuttons': 'checkboxes',
            'radios': RadiosComponent,
            'radios-inline': 'radios',
            'radiobuttons': 'radios',
            // HTML Layout widgets
            // 'label': automatically added to data widgets
            // 'legend': automatically added to fieldsets
            'section': SectionComponent,
            'div': 'section',
            'fieldset': 'section',
            'flex': 'section',
            // Non-HTML layout widgets
            'one-of': OneOfComponent,
            // TODO: Finish 'one-of' widget
            'array': 'section',
            'tabarray': 'tabs',
            'tab': 'section',
            'tabs': TabsComponent,
            'message': MessageComponent,
            'help': 'message',
            'msg': 'message',
            'html': 'message',
            'template': TemplateComponent,
            // Widgets included for compatibility with JSON Form API
            'advancedfieldset': 'section',
            'authfieldset': 'section',
            'optionfieldset': 'one-of',
            'selectfieldset': 'one-of',
            'conditional': 'section',
            'actions': 'section',
            'tagsinput': 'section',
            // See: http://ulion.github.io/jsonform/playground/?example=fields-checkboxbuttons
            // Widgets included for compatibility with React JSON Schema Form API
            'updown': 'number',
            'date-time': 'datetime-local',
            'alt-datetime': 'datetime-local',
            'alt-date': 'date',
            // Widgets included for compatibility with Angular Schema Form API
            'wizard': 'section',
            // Widgets included for compatibility with other libraries
            'textline': 'text',
        };
        this.registeredWidgets = {};
        this.frameworkWidgets = {};
        this.activeWidgets = {};
        this.setActiveWidgets();
    }
    setActiveWidgets() {
        this.activeWidgets = Object.assign({}, this.widgetLibrary, this.frameworkWidgets, this.registeredWidgets);
        for (const widgetName of Object.keys(this.activeWidgets)) {
            let widget = this.activeWidgets[widgetName];
            // Resolve aliases
            if (typeof widget === 'string') {
                const usedAliases = [];
                while (typeof widget === 'string' && !usedAliases.includes(widget)) {
                    usedAliases.push(widget);
                    widget = this.activeWidgets[widget];
                }
                if (typeof widget !== 'string') {
                    this.activeWidgets[widgetName] = widget;
                }
            }
        }
        return true;
    }
    setDefaultWidget(type) {
        if (!this.hasWidget(type)) {
            return false;
        }
        this.defaultWidget = type;
        return true;
    }
    hasWidget(type, widgetSet = 'activeWidgets') {
        if (!type || typeof type !== 'string') {
            return false;
        }
        return hasOwn(this[widgetSet], type);
    }
    hasDefaultWidget(type) {
        return this.hasWidget(type, 'widgetLibrary');
    }
    registerWidget(type, widget) {
        if (!type || !widget || typeof type !== 'string') {
            return false;
        }
        this.registeredWidgets[type] = widget;
        return this.setActiveWidgets();
    }
    unRegisterWidget(type) {
        if (!hasOwn(this.registeredWidgets, type)) {
            return false;
        }
        delete this.registeredWidgets[type];
        return this.setActiveWidgets();
    }
    unRegisterAllWidgets(unRegisterFrameworkWidgets = true) {
        this.registeredWidgets = {};
        if (unRegisterFrameworkWidgets) {
            this.frameworkWidgets = {};
        }
        return this.setActiveWidgets();
    }
    registerFrameworkWidgets(widgets) {
        if (widgets === null || typeof widgets !== 'object') {
            widgets = {};
        }
        this.frameworkWidgets = widgets;
        return this.setActiveWidgets();
    }
    unRegisterFrameworkWidgets() {
        if (Object.keys(this.frameworkWidgets).length) {
            this.frameworkWidgets = {};
            return this.setActiveWidgets();
        }
        return false;
    }
    getWidget(type, widgetSet = 'activeWidgets') {
        if (this.hasWidget(type, widgetSet)) {
            return this[widgetSet][type];
        }
        else if (this.hasWidget(this.defaultWidget, widgetSet)) {
            return this[widgetSet][this.defaultWidget];
        }
        else {
            return null;
        }
    }
    getAllWidgets() {
        return {
            widgetLibrary: this.widgetLibrary,
            registeredWidgets: this.registeredWidgets,
            frameworkWidgets: this.frameworkWidgets,
            activeWidgets: this.activeWidgets,
        };
    }
}
WidgetLibraryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function WidgetLibraryService_Factory() { return new WidgetLibraryService(); }, token: WidgetLibraryService, providedIn: "root" });
WidgetLibraryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
WidgetLibraryService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LWxpYnJhcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Fqc2YtY29yZS9zcmMvbGliL3dpZGdldC1saWJyYXJ5L3dpZGdldC1saWJyYXJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLHdC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LENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTztZQUNMLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1lBQ3pDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQ2xDLENBQUM7SUFDSixDQUFDOzs7O1lBak5GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFkZFJlZmVyZW5jZUNvbXBvbmVudCB9IGZyb20gJy4vYWRkLXJlZmVyZW5jZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tib3hlc0NvbXBvbmVudCB9IGZyb20gJy4vY2hlY2tib3hlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsZUNvbXBvbmVudCB9IGZyb20gJy4vZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgaGFzT3duIH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxpdHkuZnVuY3Rpb25zJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vbWVzc2FnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm9uZUNvbXBvbmVudCB9IGZyb20gJy4vbm9uZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi9udW1iZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE9uZU9mQ29tcG9uZW50IH0gZnJvbSAnLi9vbmUtb2YuY29tcG9uZW50JztcbmltcG9ydCB7IFJhZGlvc0NvbXBvbmVudCB9IGZyb20gJy4vcmFkaW9zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb290Q29tcG9uZW50IH0gZnJvbSAnLi9yb290LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9zZWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0RnJhbWV3b3JrQ29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QtZnJhbWV3b3JrLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC13aWRnZXQuY29tcG9uZW50JztcbmltcG9ydCB7IFN1Ym1pdENvbXBvbmVudCB9IGZyb20gJy4vc3VibWl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJzQ29tcG9uZW50IH0gZnJvbSAnLi90YWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vdGVtcGxhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRhcmVhQ29tcG9uZW50IH0gZnJvbSAnLi90ZXh0YXJlYS5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgV2lkZ2V0TGlicmFyeVNlcnZpY2Uge1xuXG4gIGRlZmF1bHRXaWRnZXQgPSAndGV4dCc7XG4gIHdpZGdldExpYnJhcnk6IGFueSA9IHtcblxuICAvLyBBbmd1bGFyIEpTT04gU2NoZW1hIEZvcm0gYWRtaW5pc3RyYXRpdmUgd2lkZ2V0c1xuICAgICdub25lJzogTm9uZUNvbXBvbmVudCwgLy8gUGxhY2Vob2xkZXIsIGZvciBkZXZlbG9wbWVudCAtIGRpc3BsYXlzIG5vdGhpbmdcbiAgICAncm9vdCc6IFJvb3RDb21wb25lbnQsIC8vIEZvcm0gcm9vdCwgcmVuZGVycyBhIGNvbXBsZXRlIGxheW91dFxuICAgICdzZWxlY3QtZnJhbWV3b3JrJzogU2VsZWN0RnJhbWV3b3JrQ29tcG9uZW50LCAvLyBBcHBsaWVzIHRoZSBzZWxlY3RlZCBmcmFtZXdvcmsgdG8gYSBzcGVjaWZpZWQgd2lkZ2V0XG4gICAgJ3NlbGVjdC13aWRnZXQnOiBTZWxlY3RXaWRnZXRDb21wb25lbnQsIC8vIERpc3BsYXlzIGEgc3BlY2lmaWVkIHdpZGdldFxuICAgICckcmVmJzogQWRkUmVmZXJlbmNlQ29tcG9uZW50LCAvLyBCdXR0b24gdG8gYWRkIGEgbmV3IGFycmF5IGl0ZW0gb3IgJHJlZiBlbGVtZW50XG5cbiAgLy8gRnJlZS1mb3JtIHRleHQgSFRNTCAnaW5wdXQnIGZvcm0gY29udHJvbCB3aWRnZXRzIDxpbnB1dCB0eXBlPVwiLi4uXCI+XG4gICAgJ2VtYWlsJzogJ3RleHQnLFxuICAgICdpbnRlZ2VyJzogJ251bWJlcicsIC8vIE5vdGU6ICdpbnRlZ2VyJyBpcyBub3QgYSByZWNvZ25pemVkIEhUTUwgaW5wdXQgdHlwZVxuICAgICdudW1iZXInOiBOdW1iZXJDb21wb25lbnQsXG4gICAgJ3Bhc3N3b3JkJzogJ3RleHQnLFxuICAgICdzZWFyY2gnOiAndGV4dCcsXG4gICAgJ3RlbCc6ICd0ZXh0JyxcbiAgICAndGV4dCc6IElucHV0Q29tcG9uZW50LFxuICAgICd1cmwnOiAndGV4dCcsXG5cbiAgLy8gQ29udHJvbGxlZCB0ZXh0IEhUTUwgJ2lucHV0JyBmb3JtIGNvbnRyb2wgd2lkZ2V0cyA8aW5wdXQgdHlwZT1cIi4uLlwiPlxuICAgICdjb2xvcic6ICd0ZXh0JyxcbiAgICAnZGF0ZSc6ICd0ZXh0JyxcbiAgICAnZGF0ZXRpbWUnOiAndGV4dCcsXG4gICAgJ2RhdGV0aW1lLWxvY2FsJzogJ3RleHQnLFxuICAgICdtb250aCc6ICd0ZXh0JyxcbiAgICAncmFuZ2UnOiAnbnVtYmVyJyxcbiAgICAndGltZSc6ICd0ZXh0JyxcbiAgICAnd2Vlayc6ICd0ZXh0JyxcblxuICAvLyBOb24tdGV4dCBIVE1MICdpbnB1dCcgZm9ybSBjb250cm9sIHdpZGdldHMgPGlucHV0IHR5cGU9XCIuLi5cIj5cbiAgICAvLyAnYnV0dG9uJzogPGlucHV0IHR5cGU9XCJidXR0b25cIj4gbm90IHVzZWQsIHVzZSA8YnV0dG9uPiBpbnN0ZWFkXG4gICAgJ2NoZWNrYm94JzogQ2hlY2tib3hDb21wb25lbnQsIC8vIFRPRE86IFNldCB0ZXJuYXJ5ID0gdHJ1ZSBmb3IgMy1zdGF0ZSA/P1xuICAgICdmaWxlJzogRmlsZUNvbXBvbmVudCwgLy8gVE9ETzogRmluaXNoICdmaWxlJyB3aWRnZXRcbiAgICAnaGlkZGVuJzogJ3RleHQnLFxuICAgICdpbWFnZSc6ICd0ZXh0JywgLy8gVE9ETzogRmlndXJlIG91dCBob3cgdG8gaGFuZGxlIHRoZXNlXG4gICAgJ3JhZGlvJzogJ3JhZGlvcycsXG4gICAgJ3Jlc2V0JzogJ3N1Ym1pdCcsIC8vIFRPRE86IEZpZ3VyZSBvdXQgaG93IHRvIGhhbmRsZSB0aGVzZVxuICAgICdzdWJtaXQnOiBTdWJtaXRDb21wb25lbnQsXG5cbiAgLy8gT3RoZXIgKG5vbi0naW5wdXQnKSBIVE1MIGZvcm0gY29udHJvbCB3aWRnZXRzXG4gICAgJ2J1dHRvbic6IEJ1dHRvbkNvbXBvbmVudCxcbiAgICAnc2VsZWN0JzogU2VsZWN0Q29tcG9uZW50LFxuICAgIC8vICdvcHRpb24nOiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBzZWxlY3Qgd2lkZ2V0c1xuICAgIC8vICdvcHRncm91cCc6IGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IHNlbGVjdCB3aWRnZXRzXG4gICAgJ3RleHRhcmVhJzogVGV4dGFyZWFDb21wb25lbnQsXG5cbiAgLy8gSFRNTCBmb3JtIGNvbnRyb2wgd2lkZ2V0IHNldHNcbiAgICAnY2hlY2tib3hlcyc6IENoZWNrYm94ZXNDb21wb25lbnQsIC8vIEdyb3VwZWQgbGlzdCBvZiBjaGVja2JveGVzXG4gICAgJ2NoZWNrYm94ZXMtaW5saW5lJzogJ2NoZWNrYm94ZXMnLCAvLyBDaGVja2JveGVzIGluIG9uZSBsaW5lXG4gICAgJ2NoZWNrYm94YnV0dG9ucyc6ICdjaGVja2JveGVzJywgLy8gQ2hlY2tib3hlcyBhcyBodG1sIGJ1dHRvbnNcbiAgICAncmFkaW9zJzogUmFkaW9zQ29tcG9uZW50LCAvLyBHcm91cGVkIGxpc3Qgb2YgcmFkaW8gYnV0dG9uc1xuICAgICdyYWRpb3MtaW5saW5lJzogJ3JhZGlvcycsIC8vIFJhZGlvIGNvbnRyb2xzIGluIG9uZSBsaW5lXG4gICAgJ3JhZGlvYnV0dG9ucyc6ICdyYWRpb3MnLCAvLyBSYWRpbyBjb250cm9scyBhcyBodG1sIGJ1dHRvbnNcblxuICAvLyBIVE1MIExheW91dCB3aWRnZXRzXG4gICAgLy8gJ2xhYmVsJzogYXV0b21hdGljYWxseSBhZGRlZCB0byBkYXRhIHdpZGdldHNcbiAgICAvLyAnbGVnZW5kJzogYXV0b21hdGljYWxseSBhZGRlZCB0byBmaWVsZHNldHNcbiAgICAnc2VjdGlvbic6IFNlY3Rpb25Db21wb25lbnQsIC8vIEp1c3QgYSBkaXYgPGRpdj5cbiAgICAnZGl2JzogJ3NlY3Rpb24nLCAvLyBTdGlsbCBqdXN0IGEgZGl2IDxkaXY+XG4gICAgJ2ZpZWxkc2V0JzogJ3NlY3Rpb24nLCAvLyBBIGZpZWxkc2V0LCB3aXRoIGFuIG9wdGlvbmFsIGxlZ2VuZCA8ZmllbGRzZXQ+XG4gICAgJ2ZsZXgnOiAnc2VjdGlvbicsIC8vIEEgZmxleGJveCBjb250YWluZXIgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXhcIj5cblxuICAvLyBOb24tSFRNTCBsYXlvdXQgd2lkZ2V0c1xuICAgICdvbmUtb2YnOiBPbmVPZkNvbXBvbmVudCwgLy8gQSBzZWxlY3QgYm94IHRoYXQgY2hhbmdlcyBhbm90aGVyIGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBGaW5pc2ggJ29uZS1vZicgd2lkZ2V0XG4gICAgJ2FycmF5JzogJ3NlY3Rpb24nLCAvLyBBIGxpc3QgeW91IGNhbiBhZGQsIHJlbW92ZSBhbmQgcmVvcmRlciA8ZmllbGRzZXQ+XG4gICAgJ3RhYmFycmF5JzogJ3RhYnMnLCAvLyBBIHRhYmJlZCB2ZXJzaW9uIG9mIGFycmF5XG4gICAgJ3RhYic6ICdzZWN0aW9uJywgLy8gQSB0YWIgZ3JvdXAsIHNpbWlsYXIgdG8gYSBmaWVsZHNldCBvciBzZWN0aW9uIDxmaWVsZHNldD5cbiAgICAndGFicyc6IFRhYnNDb21wb25lbnQsIC8vIEEgdGFiYmVkIHNldCBvZiBwYW5lbHMgd2l0aCBkaWZmZXJlbnQgY29udHJvbHNcbiAgICAnbWVzc2FnZSc6IE1lc3NhZ2VDb21wb25lbnQsIC8vIEluc2VydCBhcmJpdHJhcnkgaHRtbFxuICAgICdoZWxwJzogJ21lc3NhZ2UnLCAvLyBJbnNlcnQgYXJiaXRyYXJ5IGh0bWxcbiAgICAnbXNnJzogJ21lc3NhZ2UnLCAvLyBJbnNlcnQgYXJiaXRyYXJ5IGh0bWxcbiAgICAnaHRtbCc6ICdtZXNzYWdlJywgLy8gSW5zZXJ0IGFyYml0cmFyeSBodG1sXG4gICAgJ3RlbXBsYXRlJzogVGVtcGxhdGVDb21wb25lbnQsIC8vIEluc2VydCBhIGN1c3RvbSBBbmd1bGFyIGNvbXBvbmVudFxuXG4gIC8vIFdpZGdldHMgaW5jbHVkZWQgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBKU09OIEZvcm0gQVBJXG4gICAgJ2FkdmFuY2VkZmllbGRzZXQnOiAnc2VjdGlvbicsIC8vIEFkZHMgJ0FkdmFuY2VkIHNldHRpbmdzJyB0aXRsZSA8ZmllbGRzZXQ+XG4gICAgJ2F1dGhmaWVsZHNldCc6ICdzZWN0aW9uJywgLy8gQWRkcyAnQXV0aGVudGljYXRpb24gc2V0dGluZ3MnIHRpdGxlIDxmaWVsZHNldD5cbiAgICAnb3B0aW9uZmllbGRzZXQnOiAnb25lLW9mJywgLy8gT3B0aW9uIGNvbnRyb2wsIGRpc3BsYXlzIHNlbGVjdGVkIHN1Yi1pdGVtIDxmaWVsZHNldD5cbiAgICAnc2VsZWN0ZmllbGRzZXQnOiAnb25lLW9mJywgLy8gU2VsZWN0IGNvbnRyb2wsIGRpc3BsYXlzIHNlbGVjdGVkIHN1Yi1pdGVtIDxmaWVsZHNldD5cbiAgICAnY29uZGl0aW9uYWwnOiAnc2VjdGlvbicsIC8vIElkZW50aWNhbCB0byAnc2VjdGlvbicgKGRlcGVjaWF0ZWQpIDxkaXY+XG4gICAgJ2FjdGlvbnMnOiAnc2VjdGlvbicsIC8vIEhvcml6b250YWwgYnV0dG9uIGxpc3QsIGNhbiBvbmx5IHN1Ym1pdCwgdXNlcyBidXR0b25zIGFzIGl0ZW1zIDxkaXY+XG4gICAgJ3RhZ3NpbnB1dCc6ICdzZWN0aW9uJywgLy8gRm9yIGVudGVyaW5nIHNob3J0IHRleHQgdGFncyA8ZGl2PlxuICAgIC8vIFNlZTogaHR0cDovL3VsaW9uLmdpdGh1Yi5pby9qc29uZm9ybS9wbGF5Z3JvdW5kLz9leGFtcGxlPWZpZWxkcy1jaGVja2JveGJ1dHRvbnNcblxuICAvLyBXaWRnZXRzIGluY2x1ZGVkIGZvciBjb21wYXRpYmlsaXR5IHdpdGggUmVhY3QgSlNPTiBTY2hlbWEgRm9ybSBBUElcbiAgICAndXBkb3duJzogJ251bWJlcicsXG4gICAgJ2RhdGUtdGltZSc6ICdkYXRldGltZS1sb2NhbCcsXG4gICAgJ2FsdC1kYXRldGltZSc6ICdkYXRldGltZS1sb2NhbCcsXG4gICAgJ2FsdC1kYXRlJzogJ2RhdGUnLFxuXG4gIC8vIFdpZGdldHMgaW5jbHVkZWQgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFNjaGVtYSBGb3JtIEFQSVxuICAgICd3aXphcmQnOiAnc2VjdGlvbicsIC8vIFRPRE86IFNlcXVlbnRpYWwgcGFuZWxzIHdpdGggXCJOZXh0XCIgYW5kIFwiUHJldmlvdXNcIiBidXR0b25zXG5cbiAgLy8gV2lkZ2V0cyBpbmNsdWRlZCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG90aGVyIGxpYnJhcmllc1xuICAgICd0ZXh0bGluZSc6ICd0ZXh0JyxcblxuICAvLyBSZWNvbW1lbmRlZCAzcmQtcGFydHkgYWRkLW9uIHdpZGdldHMgKFRPRE86IGNyZWF0ZSB3cmFwcGVycyBmb3IgdGhlc2UuLi4pXG4gICAgLy8gJ25nMi1zZWxlY3QnOiBTZWxlY3QgY29udHJvbCByZXBsYWNlbWVudCAtIGh0dHA6Ly92YWxvci1zb2Z0d2FyZS5jb20vbmcyLXNlbGVjdC9cbiAgICAvLyAnZmxhdHBpY2tyJzogRmxhdHBpY2tyIGRhdGUgcGlja2VyIC0gaHR0cHM6Ly9naXRodWIuY29tL2NobWxuL2ZsYXRwaWNrclxuICAgIC8vICdwaWthZGF5JzogUGlrYWRheSBkYXRlIHBpY2tlciAtIGh0dHBzOi8vZ2l0aHViLmNvbS9kYnVzaGVsbC9QaWthZGF5XG4gICAgLy8gJ3NwZWN0cnVtJzogU3BlY3RydW0gY29sb3IgcGlja2VyIC0gaHR0cDovL2Jncmlucy5naXRodWIuaW8vc3BlY3RydW1cbiAgICAvLyAnYm9vdHN0cmFwLXNsaWRlcic6IEJvb3RzdHJhcCBTbGlkZXIgcmFuZ2UgY29udHJvbCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWl5cmlhL2Jvb3RzdHJhcC1zbGlkZXJcbiAgICAvLyAnYWNlJzogQUNFIGNvZGUgZWRpdG9yIC0gaHR0cHM6Ly9hY2UuYzkuaW9cbiAgICAvLyAnY2tlZGl0b3InOiBDS0VkaXRvciBIVE1MIC8gcmljaCB0ZXh0IGVkaXRvciAtIGh0dHA6Ly9ja2VkaXRvci5jb21cbiAgICAvLyAndGlueW1jZSc6IFRpbnlNQ0UgSFRNTCAvIHJpY2ggdGV4dCBlZGl0b3IgLSBodHRwczovL3d3dy50aW55bWNlLmNvbVxuICAgIC8vICdpbWFnZXNlbGVjdCc6IEJvb3RzdHJhcCBkcm9wLWRvd24gaW1hZ2Ugc2VsZWN0b3IgLSBodHRwOi8vc2lsdmlvbW9yZXRvLmdpdGh1Yi5pby9ib290c3RyYXAtc2VsZWN0XG4gICAgLy8gJ3d5c2lodG1sNSc6IEhUTUwgZWRpdG9yIC0gaHR0cDovL2pob2xsaW5nd29ydGguZ2l0aHViLmlvL2Jvb3RzdHJhcC13eXNpaHRtbDVcbiAgICAvLyAncXVpbGwnOiBRdWlsbCBIVE1MIC8gcmljaCB0ZXh0IGVkaXRvciAoPykgLSBodHRwczovL3F1aWxsanMuY29tXG4gIH07XG4gIHJlZ2lzdGVyZWRXaWRnZXRzOiBhbnkgPSB7IH07XG4gIGZyYW1ld29ya1dpZGdldHM6IGFueSA9IHsgfTtcbiAgYWN0aXZlV2lkZ2V0czogYW55ID0geyB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2V0QWN0aXZlV2lkZ2V0cygpO1xuICB9XG5cbiAgc2V0QWN0aXZlV2lkZ2V0cygpOiBib29sZWFuIHtcbiAgICB0aGlzLmFjdGl2ZVdpZGdldHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgeyB9LCB0aGlzLndpZGdldExpYnJhcnksIHRoaXMuZnJhbWV3b3JrV2lkZ2V0cywgdGhpcy5yZWdpc3RlcmVkV2lkZ2V0c1xuICAgICk7XG4gICAgZm9yIChjb25zdCB3aWRnZXROYW1lIG9mIE9iamVjdC5rZXlzKHRoaXMuYWN0aXZlV2lkZ2V0cykpIHtcbiAgICAgIGxldCB3aWRnZXQ6IGFueSA9IHRoaXMuYWN0aXZlV2lkZ2V0c1t3aWRnZXROYW1lXTtcbiAgICAgIC8vIFJlc29sdmUgYWxpYXNlc1xuICAgICAgaWYgKHR5cGVvZiB3aWRnZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IHVzZWRBbGlhc2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICB3aGlsZSAodHlwZW9mIHdpZGdldCA9PT0gJ3N0cmluZycgJiYgIXVzZWRBbGlhc2VzLmluY2x1ZGVzKHdpZGdldCkpIHtcbiAgICAgICAgICB1c2VkQWxpYXNlcy5wdXNoKHdpZGdldCk7XG4gICAgICAgICAgd2lkZ2V0ID0gdGhpcy5hY3RpdmVXaWRnZXRzW3dpZGdldF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aWRnZXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVXaWRnZXRzW3dpZGdldE5hbWVdID0gd2lkZ2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2V0RGVmYXVsdFdpZGdldCh0eXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuaGFzV2lkZ2V0KHR5cGUpKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIHRoaXMuZGVmYXVsdFdpZGdldCA9IHR5cGU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBoYXNXaWRnZXQodHlwZTogc3RyaW5nLCB3aWRnZXRTZXQgPSAnYWN0aXZlV2lkZ2V0cycpOiBib29sZWFuIHtcbiAgICBpZiAoIXR5cGUgfHwgdHlwZW9mIHR5cGUgIT09ICdzdHJpbmcnKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIHJldHVybiBoYXNPd24odGhpc1t3aWRnZXRTZXRdLCB0eXBlKTtcbiAgfVxuXG4gIGhhc0RlZmF1bHRXaWRnZXQodHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaGFzV2lkZ2V0KHR5cGUsICd3aWRnZXRMaWJyYXJ5Jyk7XG4gIH1cblxuICByZWdpc3RlcldpZGdldCh0eXBlOiBzdHJpbmcsIHdpZGdldDogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKCF0eXBlIHx8ICF3aWRnZXQgfHwgdHlwZW9mIHR5cGUgIT09ICdzdHJpbmcnKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIHRoaXMucmVnaXN0ZXJlZFdpZGdldHNbdHlwZV0gPSB3aWRnZXQ7XG4gICAgcmV0dXJuIHRoaXMuc2V0QWN0aXZlV2lkZ2V0cygpO1xuICB9XG5cbiAgdW5SZWdpc3RlcldpZGdldCh0eXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIWhhc093bih0aGlzLnJlZ2lzdGVyZWRXaWRnZXRzLCB0eXBlKSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICBkZWxldGUgdGhpcy5yZWdpc3RlcmVkV2lkZ2V0c1t0eXBlXTtcbiAgICByZXR1cm4gdGhpcy5zZXRBY3RpdmVXaWRnZXRzKCk7XG4gIH1cblxuICB1blJlZ2lzdGVyQWxsV2lkZ2V0cyh1blJlZ2lzdGVyRnJhbWV3b3JrV2lkZ2V0cyA9IHRydWUpOiBib29sZWFuIHtcbiAgICB0aGlzLnJlZ2lzdGVyZWRXaWRnZXRzID0geyB9O1xuICAgIGlmICh1blJlZ2lzdGVyRnJhbWV3b3JrV2lkZ2V0cykgeyB0aGlzLmZyYW1ld29ya1dpZGdldHMgPSB7IH07IH1cbiAgICByZXR1cm4gdGhpcy5zZXRBY3RpdmVXaWRnZXRzKCk7XG4gIH1cblxuICByZWdpc3RlckZyYW1ld29ya1dpZGdldHMod2lkZ2V0czogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKHdpZGdldHMgPT09IG51bGwgfHwgdHlwZW9mIHdpZGdldHMgIT09ICdvYmplY3QnKSB7IHdpZGdldHMgPSB7IH07IH1cbiAgICB0aGlzLmZyYW1ld29ya1dpZGdldHMgPSB3aWRnZXRzO1xuICAgIHJldHVybiB0aGlzLnNldEFjdGl2ZVdpZGdldHMoKTtcbiAgfVxuXG4gIHVuUmVnaXN0ZXJGcmFtZXdvcmtXaWRnZXRzKCk6IGJvb2xlYW4ge1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmZyYW1ld29ya1dpZGdldHMpLmxlbmd0aCkge1xuICAgICAgdGhpcy5mcmFtZXdvcmtXaWRnZXRzID0geyB9O1xuICAgICAgcmV0dXJuIHRoaXMuc2V0QWN0aXZlV2lkZ2V0cygpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRXaWRnZXQodHlwZT86IHN0cmluZywgd2lkZ2V0U2V0ID0gJ2FjdGl2ZVdpZGdldHMnKTogYW55IHtcbiAgICBpZiAodGhpcy5oYXNXaWRnZXQodHlwZSwgd2lkZ2V0U2V0KSkge1xuICAgICAgcmV0dXJuIHRoaXNbd2lkZ2V0U2V0XVt0eXBlXTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGFzV2lkZ2V0KHRoaXMuZGVmYXVsdFdpZGdldCwgd2lkZ2V0U2V0KSkge1xuICAgICAgcmV0dXJuIHRoaXNbd2lkZ2V0U2V0XVt0aGlzLmRlZmF1bHRXaWRnZXRdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBnZXRBbGxXaWRnZXRzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZGdldExpYnJhcnk6IHRoaXMud2lkZ2V0TGlicmFyeSxcbiAgICAgIHJlZ2lzdGVyZWRXaWRnZXRzOiB0aGlzLnJlZ2lzdGVyZWRXaWRnZXRzLFxuICAgICAgZnJhbWV3b3JrV2lkZ2V0czogdGhpcy5mcmFtZXdvcmtXaWRnZXRzLFxuICAgICAgYWN0aXZlV2lkZ2V0czogdGhpcy5hY3RpdmVXaWRnZXRzLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
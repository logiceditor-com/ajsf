(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@ajsf/core'), require('lodash/cloneDeep'), require('lodash/map')) :
    typeof define === 'function' && define.amd ? define('@ajsf/bootstrap4', ['exports', '@angular/core', '@angular/common', '@ajsf/core', 'lodash/cloneDeep', 'lodash/map'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ajsf = global.ajsf || {}, global.ajsf.bootstrap4 = {}), global.ng.core, global.ng.common, global['@ajsf/core'], global['lodash-es'], global['lodash-es']));
}(this, (function (exports, core$1, common, core, cloneDeep, map) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var cloneDeep__default = /*#__PURE__*/_interopDefaultLegacy(cloneDeep);
    var map__default = /*#__PURE__*/_interopDefaultLegacy(map);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * Bootstrap 4 framework for Angular JSON Schema Form.
     *
     */
    var Bootstrap4FrameworkComponent = /** @class */ (function () {
        function Bootstrap4FrameworkComponent(changeDetector, jsf) {
            this.changeDetector = changeDetector;
            this.jsf = jsf;
            this.frameworkInitialized = false;
            this.formControl = null;
            this.debugOutput = '';
            this.debug = '';
            this.parentArray = null;
            this.isOrderable = false;
        }
        Object.defineProperty(Bootstrap4FrameworkComponent.prototype, "showRemoveButton", {
            get: function () {
                if (!this.options.removable || this.options.readonly ||
                    this.layoutNode.type === '$ref') {
                    return false;
                }
                if (this.layoutNode.recursiveReference) {
                    return true;
                }
                if (!this.layoutNode.arrayItem || !this.parentArray) {
                    return false;
                }
                // If array length <= minItems, don't allow removing any items
                return this.parentArray.items.length - 1 <= this.parentArray.options.minItems ? false :
                    // For removable list items, allow removing any item
                    this.layoutNode.arrayItemType === 'list' ? true :
                        // For removable tuple items, only allow removing last item in list
                        this.layoutIndex[this.layoutIndex.length - 1] === this.parentArray.items.length - 2;
            },
            enumerable: false,
            configurable: true
        });
        Bootstrap4FrameworkComponent.prototype.ngOnInit = function () {
            this.initializeFramework();
            if (this.layoutNode.arrayItem && this.layoutNode.type !== '$ref') {
                this.parentArray = this.jsf.getParentNode(this);
                if (this.parentArray) {
                    this.isOrderable = this.layoutNode.arrayItemType === 'list' &&
                        !this.options.readonly && this.parentArray.options.orderable;
                }
            }
        };
        Bootstrap4FrameworkComponent.prototype.ngOnChanges = function () {
            if (!this.frameworkInitialized) {
                this.initializeFramework();
            }
        };
        Bootstrap4FrameworkComponent.prototype.initializeFramework = function () {
            var _this = this;
            if (this.layoutNode) {
                this.options = cloneDeep__default['default'](this.layoutNode.options);
                this.widgetLayoutNode = Object.assign(Object.assign({}, this.layoutNode), { options: cloneDeep__default['default'](this.layoutNode.options) });
                this.widgetOptions = this.widgetLayoutNode.options;
                this.formControl = this.jsf.getFormControl(this);
                this.options.isInputWidget = core.inArray(this.layoutNode.type, [
                    'button', 'checkbox', 'checkboxes-inline', 'checkboxes', 'color',
                    'date', 'datetime-local', 'datetime', 'email', 'file', 'hidden',
                    'image', 'integer', 'month', 'number', 'password', 'radio',
                    'radiobuttons', 'radios-inline', 'radios', 'range', 'reset', 'search',
                    'select', 'submit', 'tel', 'text', 'textarea', 'time', 'url', 'week'
                ]);
                this.options.title = this.setTitle();
                this.options.htmlClass =
                    core.addClasses(this.options.htmlClass, 'schema-form-' + this.layoutNode.type);
                this.options.htmlClass =
                    this.layoutNode.type === 'array' ?
                        core.addClasses(this.options.htmlClass, 'list-group') :
                        this.layoutNode.arrayItem && this.layoutNode.type !== '$ref' ?
                            core.addClasses(this.options.htmlClass, 'list-group-item') :
                            core.addClasses(this.options.htmlClass, 'form-group');
                this.widgetOptions.htmlClass = '';
                this.options.labelHtmlClass =
                    core.addClasses(this.options.labelHtmlClass, 'control-label');
                this.widgetOptions.activeClass =
                    core.addClasses(this.widgetOptions.activeClass, 'active');
                this.options.fieldAddonLeft =
                    this.options.fieldAddonLeft || this.options.prepend;
                this.options.fieldAddonRight =
                    this.options.fieldAddonRight || this.options.append;
                // Add asterisk to titles if required
                if (this.options.title && this.layoutNode.type !== 'tab' &&
                    !this.options.notitle && this.options.required &&
                    !this.options.title.includes('*')) {
                    this.options.title += ' <strong class="text-danger">*</strong>';
                }
                // Set miscelaneous styles and settings for each control type
                switch (this.layoutNode.type) {
                    // Checkbox controls
                    case 'checkbox':
                    case 'checkboxes':
                        this.widgetOptions.htmlClass = core.addClasses(this.widgetOptions.htmlClass, 'checkbox');
                        break;
                    case 'checkboxes-inline':
                        this.widgetOptions.htmlClass = core.addClasses(this.widgetOptions.htmlClass, 'checkbox');
                        this.widgetOptions.itemLabelHtmlClass = core.addClasses(this.widgetOptions.itemLabelHtmlClass, 'checkbox-inline');
                        break;
                    // Radio controls
                    case 'radio':
                    case 'radios':
                        this.widgetOptions.htmlClass = core.addClasses(this.widgetOptions.htmlClass, 'radio');
                        break;
                    case 'radios-inline':
                        this.widgetOptions.htmlClass = core.addClasses(this.widgetOptions.htmlClass, 'radio');
                        this.widgetOptions.itemLabelHtmlClass = core.addClasses(this.widgetOptions.itemLabelHtmlClass, 'radio-inline');
                        break;
                    // Button sets - checkboxbuttons and radiobuttons
                    case 'checkboxbuttons':
                    case 'radiobuttons':
                        this.widgetOptions.htmlClass = core.addClasses(this.widgetOptions.htmlClass, 'btn-group');
                        this.widgetOptions.itemLabelHtmlClass = core.addClasses(this.widgetOptions.itemLabelHtmlClass, 'btn');
                        this.widgetOptions.itemLabelHtmlClass = core.addClasses(this.widgetOptions.itemLabelHtmlClass, this.options.style || 'btn-default');
                        this.widgetOptions.fieldHtmlClass = core.addClasses(this.widgetOptions.fieldHtmlClass, 'sr-only');
                        break;
                    // Single button controls
                    case 'button':
                    case 'submit':
                        this.widgetOptions.fieldHtmlClass = core.addClasses(this.widgetOptions.fieldHtmlClass, 'btn');
                        this.widgetOptions.fieldHtmlClass = core.addClasses(this.widgetOptions.fieldHtmlClass, this.options.style || 'btn-info');
                        break;
                    // Containers - arrays and fieldsets
                    case 'array':
                    case 'fieldset':
                    case 'section':
                    case 'conditional':
                    case 'advancedfieldset':
                    case 'authfieldset':
                    case 'selectfieldset':
                    case 'optionfieldset':
                        this.options.messageLocation = 'top';
                        break;
                    case 'tabarray':
                    case 'tabs':
                        this.widgetOptions.htmlClass = core.addClasses(this.widgetOptions.htmlClass, 'tab-content');
                        this.widgetOptions.fieldHtmlClass = core.addClasses(this.widgetOptions.fieldHtmlClass, 'tab-pane');
                        this.widgetOptions.labelHtmlClass = core.addClasses(this.widgetOptions.labelHtmlClass, 'nav nav-tabs');
                        break;
                    // 'Add' buttons - references
                    case '$ref':
                        this.widgetOptions.fieldHtmlClass = core.addClasses(this.widgetOptions.fieldHtmlClass, 'btn pull-right');
                        this.widgetOptions.fieldHtmlClass = core.addClasses(this.widgetOptions.fieldHtmlClass, this.options.style || 'btn-default');
                        this.options.icon = 'glyphicon glyphicon-plus';
                        break;
                    // Default - including regular inputs
                    default:
                        this.widgetOptions.fieldHtmlClass = core.addClasses(this.widgetOptions.fieldHtmlClass, 'form-control');
                }
                if (this.formControl) {
                    this.updateHelpBlock(this.formControl.status);
                    this.formControl.statusChanges.subscribe(function (status) { return _this.updateHelpBlock(status); });
                    if (this.options.debug) {
                        var vars = [];
                        this.debugOutput = map__default['default'](vars, function (thisVar) { return JSON.stringify(thisVar, null, 2); }).join('\n');
                    }
                }
                this.frameworkInitialized = true;
            }
        };
        Bootstrap4FrameworkComponent.prototype.updateHelpBlock = function (status) {
            this.options.helpBlock = status === 'INVALID' &&
                this.options.enableErrorState && this.formControl.errors &&
                (this.formControl.dirty || this.options.feedbackOnRender) ?
                this.jsf.formatErrors(this.formControl.errors, this.options.validationMessages) :
                this.options.description || this.options.help || null;
        };
        Bootstrap4FrameworkComponent.prototype.setTitle = function () {
            switch (this.layoutNode.type) {
                case 'button':
                case 'checkbox':
                case 'section':
                case 'help':
                case 'msg':
                case 'submit':
                case 'message':
                case 'tabarray':
                case 'tabs':
                case '$ref':
                    return null;
                case 'advancedfieldset':
                    this.widgetOptions.expandable = true;
                    this.widgetOptions.title = 'Advanced options';
                    return null;
                case 'authfieldset':
                    this.widgetOptions.expandable = true;
                    this.widgetOptions.title = 'Authentication settings';
                    return null;
                case 'fieldset':
                    this.widgetOptions.title = this.options.title;
                    return null;
                default:
                    this.widgetOptions.title = null;
                    return this.jsf.setItemTitle(this);
            }
        };
        Bootstrap4FrameworkComponent.prototype.removeItem = function () {
            this.jsf.removeItem(this);
        };
        return Bootstrap4FrameworkComponent;
    }());
    Bootstrap4FrameworkComponent.decorators = [
        { type: core$1.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'bootstrap-4-framework',
                    template: "<div\n  [class]=\"options?.htmlClass || ''\"\n  [class.has-feedback]=\"options?.feedback && options?.isInputWidget &&\n        (formControl?.dirty || options?.feedbackOnRender)\"\n  [class.has-error]=\"options?.enableErrorState && formControl?.errors &&\n        (formControl?.dirty || options?.feedbackOnRender)\"\n  [class.has-success]=\"options?.enableSuccessState && !formControl?.errors &&\n        (formControl?.dirty || options?.feedbackOnRender)\">\n\n  <button *ngIf=\"showRemoveButton\"\n          class=\"close pull-right\"\n          type=\"button\"\n          (click)=\"removeItem()\">\n    <span aria-hidden=\"true\">&times;</span>\n    <span class=\"sr-only\">Close</span>\n  </button>\n  <div *ngIf=\"options?.messageLocation === 'top'\">\n    <p *ngIf=\"options?.helpBlock\"\n       class=\"help-block\"\n       [innerHTML]=\"options?.helpBlock\"></p>\n  </div>\n\n  <label *ngIf=\"options?.title && layoutNode?.type !== 'tab'\"\n         [attr.for]=\"'control' + layoutNode?._id\"\n         [class]=\"options?.labelHtmlClass || ''\"\n         [class.sr-only]=\"options?.notitle\"\n         [innerHTML]=\"options?.title\"></label>\n  <p *ngIf=\"layoutNode?.type === 'submit' && jsf?.formOptions?.fieldsRequired\">\n    <strong class=\"text-danger\">*</strong> = required fields\n  </p>\n  <div [class.input-group]=\"options?.fieldAddonLeft || options?.fieldAddonRight\">\n        <span *ngIf=\"options?.fieldAddonLeft\"\n              class=\"input-group-addon\"\n              [innerHTML]=\"options?.fieldAddonLeft\"></span>\n\n    <select-widget-widget\n      [layoutNode]=\"widgetLayoutNode\"\n      [dataIndex]=\"dataIndex\"\n      [layoutIndex]=\"layoutIndex\"></select-widget-widget>\n\n    <span *ngIf=\"options?.fieldAddonRight\"\n          class=\"input-group-addon\"\n          [innerHTML]=\"options?.fieldAddonRight\"></span>\n  </div>\n\n  <span *ngIf=\"options?.feedback && options?.isInputWidget &&\n          !options?.fieldAddonRight && !layoutNode.arrayItem &&\n          (formControl?.dirty || options?.feedbackOnRender)\"\n        [class.glyphicon-ok]=\"options?.enableSuccessState && !formControl?.errors\"\n        [class.glyphicon-remove]=\"options?.enableErrorState && formControl?.errors\"\n        aria-hidden=\"true\"\n        class=\"form-control-feedback glyphicon\"></span>\n  <div *ngIf=\"options?.messageLocation !== 'top'\">\n    <p *ngIf=\"options?.helpBlock\"\n       class=\"help-block\"\n       [innerHTML]=\"options?.helpBlock\"></p>\n  </div>\n</div>\n\n<div *ngIf=\"debug && debugOutput\">debug:\n  <pre>{{debugOutput}}</pre>\n</div>\n",
                    styles: [":host ::ng-deep .list-group-item .form-control-feedback{top:40px}:host ::ng-deep .checkbox,:host ::ng-deep .radio{margin-top:0;margin-bottom:0}:host ::ng-deep .checkbox-inline,:host ::ng-deep .checkbox-inline+.checkbox-inline,:host ::ng-deep .checkbox-inline+.radio-inline,:host ::ng-deep .radio-inline,:host ::ng-deep .radio-inline+.checkbox-inline,:host ::ng-deep .radio-inline+.radio-inline{margin-left:0;margin-right:10px}:host ::ng-deep .checkbox-inline:last-child,:host ::ng-deep .radio-inline:last-child{margin-right:0}:host ::ng-deep .ng-invalid.ng-touched{border:1px solid #f44336}"]
                },] }
    ];
    Bootstrap4FrameworkComponent.ctorParameters = function () { return [
        { type: core$1.ChangeDetectorRef },
        { type: core.JsonSchemaFormService }
    ]; };
    Bootstrap4FrameworkComponent.propDecorators = {
        layoutNode: [{ type: core$1.Input }],
        layoutIndex: [{ type: core$1.Input }],
        dataIndex: [{ type: core$1.Input }]
    };

    // Bootstrap 4 Framework
    // https://github.com/ng-bootstrap/ng-bootstrap
    var Bootstrap4Framework = /** @class */ (function (_super) {
        __extends(Bootstrap4Framework, _super);
        function Bootstrap4Framework() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.name = 'bootstrap-4';
            _this.framework = Bootstrap4FrameworkComponent;
            _this.stylesheets = [];
            _this.scripts = [];
            return _this;
        }
        return Bootstrap4Framework;
    }(core.Framework));
    Bootstrap4Framework.decorators = [
        { type: core$1.Injectable }
    ];

    var Bootstrap4FrameworkModule = /** @class */ (function () {
        function Bootstrap4FrameworkModule() {
        }
        return Bootstrap4FrameworkModule;
    }());
    Bootstrap4FrameworkModule.decorators = [
        { type: core$1.NgModule, args: [{
                    imports: [
                        core.JsonSchemaFormModule,
                        common.CommonModule,
                        core.WidgetLibraryModule,
                    ],
                    declarations: [
                        Bootstrap4FrameworkComponent,
                    ],
                    exports: [
                        core.JsonSchemaFormModule,
                        Bootstrap4FrameworkComponent,
                    ],
                    providers: [
                        core.JsonSchemaFormService,
                        core.FrameworkLibraryService,
                        core.WidgetLibraryService,
                        { provide: core.Framework, useClass: Bootstrap4Framework, multi: true },
                    ],
                    entryComponents: [
                        Bootstrap4FrameworkComponent,
                    ]
                },] }
    ];

    /*
     * Public API Surface of @ajsf/bootstrap4
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Bootstrap4Framework = Bootstrap4Framework;
    exports.Bootstrap4FrameworkComponent = Bootstrap4FrameworkComponent;
    exports.Bootstrap4FrameworkModule = Bootstrap4FrameworkModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ajsf-bootstrap4.umd.js.map

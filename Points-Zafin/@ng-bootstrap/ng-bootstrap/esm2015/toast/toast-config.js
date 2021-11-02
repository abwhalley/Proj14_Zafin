import { Injectable } from '@angular/core';
import { NgbConfig } from '../ngb-config';
import * as i0 from "@angular/core";
import * as i1 from "../ngb-config";
/**
 * Configuration service for the NgbToast component. You can inject this service, typically in your root component,
 * and customize the values of its properties in order to provide default values for all the toasts used in the
 * application.
 *
 * @since 5.0.0
 */
export class NgbToastConfig {
    constructor(_ngbConfig) {
        this._ngbConfig = _ngbConfig;
        this.autohide = true;
        this.delay = 500;
        this.ariaLive = 'polite';
    }
    get animation() { return (this._animation === undefined) ? this._ngbConfig.animation : this._animation; }
    set animation(animation) { this._animation = animation; }
}
NgbToastConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbToastConfig_Factory() { return new NgbToastConfig(i0.ɵɵinject(i1.NgbConfig)); }, token: NgbToastConfig, providedIn: "root" });
NgbToastConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
NgbToastConfig.ctorParameters = () => [
    { type: NgbConfig }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RvYXN0L3RvYXN0LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQTZCeEM7Ozs7OztHQU1HO0FBRUgsTUFBTSxPQUFPLGNBQWM7SUFPekIsWUFBb0IsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQU56QyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFVBQUssR0FBRyxHQUFHLENBQUM7UUFDWixhQUFRLEdBQXVCLFFBQVEsQ0FBQztJQUlJLENBQUM7SUFFN0MsSUFBSSxTQUFTLEtBQWMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNsSCxJQUFJLFNBQVMsQ0FBQyxTQUFrQixJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQzs7OztZQVhuRSxVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7WUFwQ3hCLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ2JDb25maWd9IGZyb20gJy4uL25nYi1jb25maWcnO1xuXG4vKipcbiAqIEludGVyZmFjZSB1c2VkIHRvIHR5cGUgYWxsIHRvYXN0IGNvbmZpZyBvcHRpb25zLiBTZWUgYE5nYlRvYXN0Q29uZmlnYC5cbiAqXG4gKiBAc2luY2UgNS4wLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ2JUb2FzdE9wdGlvbnMge1xuICAvKipcbiAgICogU3BlY2lmeSBpZiB0aGUgdG9hc3QgY29tcG9uZW50IHNob3VsZCBlbWl0IHRoZSBgaGlkZSgpYCBvdXRwdXRcbiAgICogYWZ0ZXIgYSBjZXJ0YWluIGBkZWxheWAgaW4gbXMuXG4gICAqL1xuICBhdXRvaGlkZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERlbGF5IGluIG1zIGFmdGVyIHdoaWNoIHRoZSBgaGlkZSgpYCBvdXRwdXQgc2hvdWxkIGJlIGVtaXR0ZWQuXG4gICAqL1xuICBkZWxheT86IG51bWJlcjtcblxuICAvKipcbiAgICogVHlwZSBvZiBhcmlhLWxpdmUgYXR0cmlidXRlIHRvIGJlIHVzZWQuXG4gICAqXG4gICAqIENvdWxkIGJlIG9uZSBvZiB0aGVzZSAyIHZhbHVlcyAoYXMgc3RyaW5nKTpcbiAgICogLSBgcG9saXRlYCAoZGVmYXVsdClcbiAgICogLSBgYWxlcnRgXG4gICAqL1xuICBhcmlhTGl2ZT86ICdwb2xpdGUnIHwgJ2FsZXJ0Jztcbn1cblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIHNlcnZpY2UgZm9yIHRoZSBOZ2JUb2FzdCBjb21wb25lbnQuIFlvdSBjYW4gaW5qZWN0IHRoaXMgc2VydmljZSwgdHlwaWNhbGx5IGluIHlvdXIgcm9vdCBjb21wb25lbnQsXG4gKiBhbmQgY3VzdG9taXplIHRoZSB2YWx1ZXMgb2YgaXRzIHByb3BlcnRpZXMgaW4gb3JkZXIgdG8gcHJvdmlkZSBkZWZhdWx0IHZhbHVlcyBmb3IgYWxsIHRoZSB0b2FzdHMgdXNlZCBpbiB0aGVcbiAqIGFwcGxpY2F0aW9uLlxuICpcbiAqIEBzaW5jZSA1LjAuMFxuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBOZ2JUb2FzdENvbmZpZyBpbXBsZW1lbnRzIE5nYlRvYXN0T3B0aW9ucyB7XG4gIGF1dG9oaWRlID0gdHJ1ZTtcbiAgZGVsYXkgPSA1MDA7XG4gIGFyaWFMaXZlOiAncG9saXRlJyB8ICdhbGVydCcgPSAncG9saXRlJztcblxuICBwcml2YXRlIF9hbmltYXRpb246IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdiQ29uZmlnOiBOZ2JDb25maWcpIHt9XG5cbiAgZ2V0IGFuaW1hdGlvbigpOiBib29sZWFuIHsgcmV0dXJuICh0aGlzLl9hbmltYXRpb24gPT09IHVuZGVmaW5lZCkgPyB0aGlzLl9uZ2JDb25maWcuYW5pbWF0aW9uIDogdGhpcy5fYW5pbWF0aW9uOyB9XG4gIHNldCBhbmltYXRpb24oYW5pbWF0aW9uOiBib29sZWFuKSB7IHRoaXMuX2FuaW1hdGlvbiA9IGFuaW1hdGlvbjsgfVxufVxuIl19
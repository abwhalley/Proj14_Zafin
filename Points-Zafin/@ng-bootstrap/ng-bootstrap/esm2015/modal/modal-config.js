import { Injectable } from '@angular/core';
import { NgbConfig } from '../ngb-config';
import * as i0 from "@angular/core";
import * as i1 from "../ngb-config";
/**
 * A configuration service for the [`NgbModal`](#/components/modal/api#NgbModal) service.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all modals used in the application.
*
* @since 3.1.0
*/
export class NgbModalConfig {
    constructor(_ngbConfig) {
        this._ngbConfig = _ngbConfig;
        this.backdrop = true;
        this.keyboard = true;
    }
    get animation() { return (this._animation === undefined) ? this._ngbConfig.animation : this._animation; }
    set animation(animation) { this._animation = animation; }
}
NgbModalConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbModalConfig_Factory() { return new NgbModalConfig(i0.ɵɵinject(i1.NgbConfig)); }, token: NgbModalConfig, providedIn: "root" });
NgbModalConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
NgbModalConfig.ctorParameters = () => [
    { type: NgbConfig }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZGFsL21vZGFsLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFXLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQTZHeEM7Ozs7Ozs7RUFPRTtBQUVGLE1BQU0sT0FBTyxjQUFjO0lBaUJ6QixZQUFvQixVQUFxQjtRQUFyQixlQUFVLEdBQVYsVUFBVSxDQUFXO1FBZHpDLGFBQVEsR0FBdUIsSUFBSSxDQUFDO1FBS3BDLGFBQVEsR0FBRyxJQUFJLENBQUM7SUFTNEIsQ0FBQztJQUU3QyxJQUFJLFNBQVMsS0FBYyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2xILElBQUksU0FBUyxDQUFDLFNBQWtCLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDOzs7O1lBckJuRSxVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7WUFySHhCLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIEluamVjdG9yfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdiQ29uZmlnfSBmcm9tICcuLi9uZ2ItY29uZmlnJztcblxuLyoqXG4gKiBPcHRpb25zIGF2YWlsYWJsZSB3aGVuIG9wZW5pbmcgbmV3IG1vZGFsIHdpbmRvd3Mgd2l0aCBgTmdiTW9kYWwub3BlbigpYCBtZXRob2QuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmdiTW9kYWxPcHRpb25zIHtcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgbW9kYWwgb3BlbmluZyBhbmQgY2xvc2luZyB3aWxsIGJlIGFuaW1hdGVkLlxuICAgKlxuICAgKiBAc2luY2UgOC4wLjBcbiAgICovXG4gIGFuaW1hdGlvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIGBhcmlhLWxhYmVsbGVkYnlgIGF0dHJpYnV0ZSB2YWx1ZSB0byBzZXQgb24gdGhlIG1vZGFsIHdpbmRvdy5cbiAgICpcbiAgICogQHNpbmNlIDIuMi4wXG4gICAqL1xuICBhcmlhTGFiZWxsZWRCeT86IHN0cmluZztcblxuICAvKipcbiAgICogYGFyaWEtZGVzY3JpYmVkYnlgIGF0dHJpYnV0ZSB2YWx1ZSB0byBzZXQgb24gdGhlIG1vZGFsIHdpbmRvdy5cbiAgICpcbiAgICogQHNpbmNlIDYuMS4wXG4gICAqL1xuICBhcmlhRGVzY3JpYmVkQnk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGJhY2tkcm9wIGVsZW1lbnQgd2lsbCBiZSBjcmVhdGVkIGZvciBhIGdpdmVuIG1vZGFsLlxuICAgKlxuICAgKiBBbHRlcm5hdGl2ZWx5LCBzcGVjaWZ5IGAnc3RhdGljJ2AgZm9yIGEgYmFja2Ryb3Agd2hpY2ggZG9lc24ndCBjbG9zZSB0aGUgbW9kYWwgb24gY2xpY2suXG4gICAqXG4gICAqIERlZmF1bHQgdmFsdWUgaXMgYHRydWVgLlxuICAgKi9cbiAgYmFja2Ryb3A/OiBib29sZWFuIHwgJ3N0YXRpYyc7XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHJpZ2h0IGJlZm9yZSB0aGUgbW9kYWwgd2lsbCBiZSBkaXNtaXNzZWQuXG4gICAqXG4gICAqIElmIHRoaXMgZnVuY3Rpb24gcmV0dXJuczpcbiAgICogKiBgZmFsc2VgXG4gICAqICogYSBwcm9taXNlIHJlc29sdmVkIHdpdGggYGZhbHNlYFxuICAgKiAqIGEgcHJvbWlzZSB0aGF0IGlzIHJlamVjdGVkXG4gICAqXG4gICAqIHRoZW4gdGhlIG1vZGFsIHdvbid0IGJlIGRpc21pc3NlZC5cbiAgICovXG4gIGJlZm9yZURpc21pc3M/OiAoKSA9PiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPjtcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbW9kYWwgd2lsbCBiZSBjZW50ZXJlZCB2ZXJ0aWNhbGx5LlxuICAgKlxuICAgKiBEZWZhdWx0IHZhbHVlIGlzIGBmYWxzZWAuXG4gICAqXG4gICAqIEBzaW5jZSAxLjEuMFxuICAgKi9cbiAgY2VudGVyZWQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgYWxsIG5ldyBtb2RhbCB3aW5kb3dzIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICogU2luY2UgdjUuMy4wIGl0IGlzIGFsc28gcG9zc2libGUgdG8gcGFzcyB0aGUgcmVmZXJlbmNlIHRvIGFuIGBIVE1MRWxlbWVudGAuXG4gICAqXG4gICAqIElmIG5vdCBzcGVjaWZpZWQsIHdpbGwgYmUgYGJvZHlgLlxuICAgKi9cbiAgY29udGFpbmVyPzogc3RyaW5nIHwgSFRNTEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIFRoZSBgSW5qZWN0b3JgIHRvIHVzZSBmb3IgbW9kYWwgY29udGVudC5cbiAgICovXG4gIGluamVjdG9yPzogSW5qZWN0b3I7XG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIG1vZGFsIHdpbGwgYmUgY2xvc2VkIHdoZW4gYEVzY2FwZWAga2V5IGlzIHByZXNzZWRcbiAgICpcbiAgICogRGVmYXVsdCB2YWx1ZSBpcyBgdHJ1ZWAuXG4gICAqL1xuICBrZXlib2FyZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNjcm9sbGFibGUgbW9kYWwgY29udGVudCAoZmFsc2UgYnkgZGVmYXVsdCkuXG4gICAqXG4gICAqIEBzaW5jZSA1LjAuMFxuICAgKi9cbiAgc2Nyb2xsYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNpemUgb2YgYSBuZXcgbW9kYWwgd2luZG93LlxuICAgKi9cbiAgc2l6ZT86ICdzbScgfCAnbGcnIHwgJ3hsJyB8IHN0cmluZztcblxuICAvKipcbiAgICogQSBjdXN0b20gY2xhc3MgdG8gYXBwZW5kIHRvIHRoZSBtb2RhbCB3aW5kb3cuXG4gICAqL1xuICB3aW5kb3dDbGFzcz86IHN0cmluZztcblxuICAvKipcbiAgICogQSBjdXN0b20gY2xhc3MgdG8gYXBwZW5kIHRvIHRoZSBtb2RhbCBkaWFsb2cuXG4gICAqXG4gICAqIEBzaW5jZSA5LjEuMFxuICAgKi9cbiAgbW9kYWxEaWFsb2dDbGFzcz86IHN0cmluZztcblxuICAvKipcbiAgICogQSBjdXN0b20gY2xhc3MgdG8gYXBwZW5kIHRvIHRoZSBtb2RhbCBiYWNrZHJvcC5cbiAgICpcbiAgICogQHNpbmNlIDEuMS4wXG4gICAqL1xuICBiYWNrZHJvcENsYXNzPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgY29uZmlndXJhdGlvbiBzZXJ2aWNlIGZvciB0aGUgW2BOZ2JNb2RhbGBdKCMvY29tcG9uZW50cy9tb2RhbC9hcGkjTmdiTW9kYWwpIHNlcnZpY2UuXG4gKlxuICogWW91IGNhbiBpbmplY3QgdGhpcyBzZXJ2aWNlLCB0eXBpY2FsbHkgaW4geW91ciByb290IGNvbXBvbmVudCwgYW5kIGN1c3RvbWl6ZSB0aGUgdmFsdWVzIG9mIGl0cyBwcm9wZXJ0aWVzIGluXG4gKiBvcmRlciB0byBwcm92aWRlIGRlZmF1bHQgdmFsdWVzIGZvciBhbGwgbW9kYWxzIHVzZWQgaW4gdGhlIGFwcGxpY2F0aW9uLlxuKlxuKiBAc2luY2UgMy4xLjBcbiovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBOZ2JNb2RhbENvbmZpZyBpbXBsZW1lbnRzIFJlcXVpcmVkPE5nYk1vZGFsT3B0aW9ucz4ge1xuICBhcmlhTGFiZWxsZWRCeTogc3RyaW5nO1xuICBhcmlhRGVzY3JpYmVkQnk6IHN0cmluZztcbiAgYmFja2Ryb3A6IGJvb2xlYW4gfCAnc3RhdGljJyA9IHRydWU7XG4gIGJlZm9yZURpc21pc3M6ICgpID0+IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+O1xuICBjZW50ZXJlZDogYm9vbGVhbjtcbiAgY29udGFpbmVyOiBzdHJpbmc7XG4gIGluamVjdG9yOiBJbmplY3RvcjtcbiAga2V5Ym9hcmQgPSB0cnVlO1xuICBzY3JvbGxhYmxlOiBib29sZWFuO1xuICBzaXplOiAnc20nIHwgJ2xnJyB8ICd4bCcgfCBzdHJpbmc7XG4gIHdpbmRvd0NsYXNzOiBzdHJpbmc7XG4gIG1vZGFsRGlhbG9nQ2xhc3M6IHN0cmluZztcbiAgYmFja2Ryb3BDbGFzczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2FuaW1hdGlvbjogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZ2JDb25maWc6IE5nYkNvbmZpZykge31cblxuICBnZXQgYW5pbWF0aW9uKCk6IGJvb2xlYW4geyByZXR1cm4gKHRoaXMuX2FuaW1hdGlvbiA9PT0gdW5kZWZpbmVkKSA/IHRoaXMuX25nYkNvbmZpZy5hbmltYXRpb24gOiB0aGlzLl9hbmltYXRpb247IH1cbiAgc2V0IGFuaW1hdGlvbihhbmltYXRpb246IGJvb2xlYW4pIHsgdGhpcy5fYW5pbWF0aW9uID0gYW5pbWF0aW9uOyB9XG59XG4iXX0=
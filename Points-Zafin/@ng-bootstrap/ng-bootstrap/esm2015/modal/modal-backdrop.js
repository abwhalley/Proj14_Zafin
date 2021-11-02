import { Component, ElementRef, Input, NgZone, ViewEncapsulation } from '@angular/core';
import { take } from 'rxjs/operators';
import { ngbRunTransition } from '../util/transition/ngbTransition';
import { reflow } from '../util/util';
export class NgbModalBackdrop {
    constructor(_el, _zone) {
        this._el = _el;
        this._zone = _zone;
    }
    ngOnInit() {
        this._zone.onStable.asObservable().pipe(take(1)).subscribe(() => {
            ngbRunTransition(this._zone, this._el.nativeElement, (element, animation) => {
                if (animation) {
                    reflow(element);
                }
                element.classList.add('show');
            }, { animation: this.animation, runningTransition: 'continue' });
        });
    }
    hide() {
        return ngbRunTransition(this._zone, this._el.nativeElement, ({ classList }) => classList.remove('show'), { animation: this.animation, runningTransition: 'stop' });
    }
}
NgbModalBackdrop.decorators = [
    { type: Component, args: [{
                selector: 'ngb-modal-backdrop',
                encapsulation: ViewEncapsulation.None,
                template: '',
                host: {
                    '[class]': '"modal-backdrop" + (backdropClass ? " " + backdropClass : "")',
                    '[class.show]': '!animation',
                    '[class.fade]': 'animation',
                    'style': 'z-index: 1050'
                }
            },] }
];
NgbModalBackdrop.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
NgbModalBackdrop.propDecorators = {
    animation: [{ type: Input }],
    backdropClass: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtYmFja2Ryb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kYWwvbW9kYWwtYmFja2Ryb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBVSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUc5RixPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGNBQWMsQ0FBQztBQWFwQyxNQUFNLE9BQU8sZ0JBQWdCO0lBSTNCLFlBQW9CLEdBQTRCLEVBQVUsS0FBYTtRQUFuRCxRQUFHLEdBQUgsR0FBRyxDQUF5QjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQVE7SUFBRyxDQUFDO0lBRTNFLFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUM5RCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsT0FBb0IsRUFBRSxTQUFrQixFQUFFLEVBQUU7Z0JBQ2hHLElBQUksU0FBUyxFQUFFO29CQUNiLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDakI7Z0JBQ0QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEMsQ0FBQyxFQUFFLEVBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJO1FBQ0YsT0FBTyxnQkFBZ0IsQ0FDbkIsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUMsU0FBUyxFQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQzdFLEVBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsRUFBRTtnQkFDWixJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLCtEQUErRDtvQkFDMUUsY0FBYyxFQUFFLFlBQVk7b0JBQzVCLGNBQWMsRUFBRSxXQUFXO29CQUMzQixPQUFPLEVBQUUsZUFBZTtpQkFDekI7YUFDRjs7O1lBbEJrQixVQUFVO1lBQVMsTUFBTTs7O3dCQW9CekMsS0FBSzs0QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBOZ1pvbmUsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7bmdiUnVuVHJhbnNpdGlvbn0gZnJvbSAnLi4vdXRpbC90cmFuc2l0aW9uL25nYlRyYW5zaXRpb24nO1xuaW1wb3J0IHtyZWZsb3d9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nYi1tb2RhbC1iYWNrZHJvcCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiAnJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3NdJzogJ1wibW9kYWwtYmFja2Ryb3BcIiArIChiYWNrZHJvcENsYXNzID8gXCIgXCIgKyBiYWNrZHJvcENsYXNzIDogXCJcIiknLFxuICAgICdbY2xhc3Muc2hvd10nOiAnIWFuaW1hdGlvbicsXG4gICAgJ1tjbGFzcy5mYWRlXSc6ICdhbmltYXRpb24nLFxuICAgICdzdHlsZSc6ICd6LWluZGV4OiAxMDUwJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE5nYk1vZGFsQmFja2Ryb3AgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBhbmltYXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgpIGJhY2tkcm9wQ2xhc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIHByaXZhdGUgX3pvbmU6IE5nWm9uZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl96b25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIG5nYlJ1blRyYW5zaXRpb24odGhpcy5fem9uZSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBhbmltYXRpb246IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYgKGFuaW1hdGlvbikge1xuICAgICAgICAgIHJlZmxvdyhlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgIH0sIHthbmltYXRpb246IHRoaXMuYW5pbWF0aW9uLCBydW5uaW5nVHJhbnNpdGlvbjogJ2NvbnRpbnVlJ30pO1xuICAgIH0pO1xuICB9XG5cbiAgaGlkZSgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmdiUnVuVHJhbnNpdGlvbihcbiAgICAgICAgdGhpcy5fem9uZSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgKHtjbGFzc0xpc3R9KSA9PiBjbGFzc0xpc3QucmVtb3ZlKCdzaG93JyksXG4gICAgICAgIHthbmltYXRpb246IHRoaXMuYW5pbWF0aW9uLCBydW5uaW5nVHJhbnNpdGlvbjogJ3N0b3AnfSk7XG4gIH1cbn1cbiJdfQ==
import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ToastComponent } from './toast/toast.component';

@Injectable({
    providedIn: 'root',
})
export class ToastService{
constructor(private _overlay: Overlay){

}
 public async showToast(): Promise<void> {
     return new Promise<any>((resolve)=>{
     const portal = new ComponentPortal(ToastComponent);
     const overlay = this._createOverlay();
     overlay.attach(portal);
     overlay.backdropClick().toPromise().then(resolve);
    alert("there must be toast ") 
     })
 }

 private _createOverlay(config: OverlayConfig = {}): OverlayRef {
    const defaultConfig = {
        backdropClass: 'custom-modal-backdrop',
        hasBackdrop: true,
        positionStrategy: this._overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically(),
        scrollStrategy: this._overlay.scrollStrategies.block(),
    } as OverlayConfig;
    return this._overlay.create({ ...defaultConfig, ...config });
}

}
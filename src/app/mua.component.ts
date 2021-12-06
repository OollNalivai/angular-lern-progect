import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {ModalComponent} from './modal/modal.component';
import {RefDirective} from './ref.directive';

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
})

export class MuaComponent {

  @ViewChild(RefDirective, {static: false}) refDir: RefDirective | undefined;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  showModal() {

    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent);
    this.refDir?.containerRef.clear();

    const component = this.refDir?.containerRef.createComponent(modalFactory);

    if (component) {
      component.instance.title = 'Dynamic title';
    }
    component?.instance.close.subscribe(() => {
      this.refDir?.containerRef.clear();
    });
  }
}


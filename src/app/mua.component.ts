import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {ModalComponent} from './modal/modal.component';
import {RefDirective} from './ref.directive';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'mua-root',
  templateUrl: './mua.component.html',
  styleUrls: ['./mua.component.scss'],
})

export class MuaComponent {

  @ViewChild(RefDirective) refDir: RefDirective | undefined;

  constructor(
    private resolver: ComponentFactoryResolver,
    private title: Title,
    private meta: Meta
  ) {
    this.title.setTitle(`Oh shit i'm sorry`);
    const t = title.getTitle();
    console.log(t);
    this.meta.addTags([
      {name: 'keywords', content: 'angular, react'},
      {name: 'description', content: 'this is Mua component'}
    ]);
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




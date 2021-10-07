import { TestBed, async } from '@angular/core/testing';
import { MuaComponent } from './mua.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MuaComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MuaComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'minin-udemy-angular-2021'`, () => {
  //   const fixture = TestBed.createComponent(MuaComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('minin-udemy-angular-2021');
  // });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MuaComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('minin-udemy-angular-2021 app is running!');
  });
});

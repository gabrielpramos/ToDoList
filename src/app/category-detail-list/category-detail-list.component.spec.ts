import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDetailListComponent } from './category-detail-list.component';

describe('CategoryDetailListComponent', () => {
  let component: CategoryDetailListComponent;
  let fixture: ComponentFixture<CategoryDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

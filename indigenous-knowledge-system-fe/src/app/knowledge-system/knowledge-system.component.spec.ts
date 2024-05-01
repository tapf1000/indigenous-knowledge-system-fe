import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeSystemComponent } from './knowledge-system.component';

describe('KnowledgeSystemComponent', () => {
  let component: KnowledgeSystemComponent;
  let fixture: ComponentFixture<KnowledgeSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowledgeSystemComponent]
    });
    fixture = TestBed.createComponent(KnowledgeSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

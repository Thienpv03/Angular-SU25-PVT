import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrandList } from './brand-list';

describe('BrandList', () => {
  let component: BrandList;
  let fixture: ComponentFixture<BrandList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandList] // Vì BrandList là standalone
    }).compileComponents();

    fixture = TestBed.createComponent(BrandList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have at least one brand', () => {
    expect(component.brands.length).toBeGreaterThan(0);
  });

  it('should contain "Manchester United" as a brand', () => {
    const brandNames = component.brands.map(b => b.name);
    expect(brandNames).toContain('Manchester United');
  });
});

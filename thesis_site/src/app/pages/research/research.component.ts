import { NavButtonsComponent } from '../nav-bar/nav-bar.component';
import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MathJaxService } from '../latex/math-jax.service';


@Component({
  selector: 'app-research',
  imports: [NavButtonsComponent],
  templateUrl: './research.component.html',
  styleUrl: './research.component.css',
})
export class ResearchComponent implements AfterViewInit {

  @ViewChild('mathParagraph', { static: true }) paragraphElement!: ElementRef<HTMLParagraphElement>;

  // Example LaTeX string
  mathString: string = 'Just testing how well a random equation \\(x^2 + y^2 = z^2\\) in the middle of a sentence works.';

  constructor(private mathJaxService: MathJaxService) {}

  ngAfterViewInit() {
    this.mathJaxService.getMathJaxLoadedPromise().then(() => {
      // Put the math string into the paragraph
      this.paragraphElement.nativeElement.innerHTML = this.mathString;

      // Render only this element
      this.mathJaxService.render(this.paragraphElement.nativeElement);
    });
  }

    scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
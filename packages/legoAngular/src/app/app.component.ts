import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'legoAngular';
  @ViewChild('test') myTestComponent?: ElementRef<any>;
  
  async onAction() {
    await this.myTestComponent!.nativeElement.testComponentMethod();
}
}

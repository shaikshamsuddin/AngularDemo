import { Component } from '@angular/core';
import {TabsComponentComponent} from '../app/components/tabs-component.component';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shaik';
  showFiller = false;
  isShowFields(){
    console.log("Next Button Clicked");
    this.showFiller = !this.showFiller;   
  }
  public navdata: Array<any> = [
    { navHeader: 'Attribute1' },
    { navHeader: 'Attribute2' },{ navHeader: 'Attribute3' },{ navHeader: 'Attribute4' },{ navHeader: 'Attribute5' },{ navHeader: 'Attribute6' },

  ];
 
}

import { Component } from '@angular/core';
import { JsonService } from '../service/service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interview';
  data: any;
  constructor(private jsonService: JsonService){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this.jsonService.getData().subscribe((data)=> {
      this.data = data;
      console.log(data);
      
    });
    
  }
}
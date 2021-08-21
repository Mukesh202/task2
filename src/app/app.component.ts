import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HCL Technology';
  name= "Mukesh Kumar";
  getName()
  {
    return this.name
  }
  obj={
    name:'TSG' , age:30,post: 'software engineer'
    }
  ary= ['mukesh' , 'ashok' , 'anil']
  a=20;
  b=30;
  siteUrl=window.location.href
}

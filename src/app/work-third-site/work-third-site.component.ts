import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-third-site',
  templateUrl: './work-third-site.component.html',
  styleUrls: ['./work-third-site.component.scss']
})
export class WorkThirdSiteComponent implements OnInit {

  constructor() { }
  
  checkpoint = false;
  ngOnInit(): void {
  }
  switchToAngular() {
    document.getElementById('angular_btn').classList.add('bg-primary');
    document.getElementById('all_btn').classList.remove('bg-primary');
    document.getElementById('javascript_btn').classList.remove('bg-primary');
    document.getElementById('second-project').classList.add('d-none');
    document.getElementById('first-project').classList.remove('d-none');
    this.checkpoint = true;


  }

  switchToJavaScript() {
    document.getElementById('angular_btn').classList.remove('bg-primary');
    document.getElementById('all_btn').classList.remove('bg-primary');
    document.getElementById('javascript_btn').classList.add('bg-primary');
    document.getElementById('second-project').classList.remove('d-none');
    document.getElementById('first-project').classList.add('d-none');
    this.checkpoint = true;

  }

  switchToAll() {
    document.getElementById('angular_btn').classList.remove('bg-primary');
    document.getElementById('all_btn').classList.add('bg-primary');
    document.getElementById('javascript_btn').classList.remove('bg-primary');
    this.checkpoint = false;
    document.getElementById('first-project').classList.add('d-none');
    document.getElementById('second-project').classList.add('d-none');


  }

  mouseover(number: any) {
    if (this.checkpoint) {
      return;
    } else {
      document.getElementById(number).classList.remove('d-none');
      
    }


  }


  mouseleave(number: any) {
    if (this.checkpoint) {
      return;
    } else { document.getElementById(number).classList.add('d-none'); }


  }
}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabmenu',
  templateUrl: './tabmenu.component.html',
  styleUrls: ['./tabmenu.component.css']
})
export class TabmenuComponent implements OnInit {

  items: MenuItem[];

  constructor(private route: Router) { }

  ngOnInit() {
    this.items = [
      {label: 'Component 1', routerLink: [{outlets: { abas: ['comp1']}}]},
      {label: 'Component 2', routerLink: [{outlets: { abas: ['comp2']}}]},
      {label: 'Component 3', routerLink: [{outlets: { abas: ['comp3']}}]},
      {label: 'Component 4', routerLink: [{outlets: { abas: ['comp4']}}]}
    ];

    this.route.navigate(['/menu', {outlets: {abas: ['comp1']}}]);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html'
})
export class AppShellComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

}


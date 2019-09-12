import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	constructor(private router: Router, private loginService: LoginService) {}

	ngOnInit() {
		if (this.loginService.getJwt()) {
			this.router.navigateByUrl('/lists');
		} else {
			console.log(!!this.loginService.getJwt());
			this.router.navigateByUrl('/login');
		}
	}
}

import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	private url = ' http://localhost:8000/user/';
	private jwt: string | undefined = undefined;
	private httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

	constructor(private http: HttpClient) {}

	login(username: string, password: string): Observable<Loginresponse> {
		return this.http.post<Loginresponse>(
			`${this.url}login`,
			{ username: username, password: password },
			this.httpOptions
		);
	}
	setJwt(jwt: string) {
		this.jwt = jwt;
		console.log(this.jwt);
	}
	getJwt(): string {
		return this.jwt;
	}
}

interface Loginresponse {
	jwt: string;
}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Config} from "../domain/config";

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    private backendUrl: string;

    constructor(private httpClient: HttpClient) {
    }

    getBackendUrl(): Observable<string> {
        let observable = new Observable<string>((observer) => {
            if (this.backendUrl) {
                console.log('Cached URL ', this.backendUrl);
                observer.next(this.backendUrl);
            } else {
                this.httpClient.get<Config>('assets/config/config.json')
                    .subscribe((value: Config) => {
                        this.backendUrl = value.backendUrl;
                        console.log('Fresh URL ', this.backendUrl);

                        return observer.next(value.backendUrl);
                    });
            }
        });

        return observable;
    }
}

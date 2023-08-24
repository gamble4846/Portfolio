import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from "./Modules/NavigationModule/navigation.module";
import { ConfigService } from './Modules/SharedModule/Services/config.service';

registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: NZ_I18N, useValue: en_US },
        { provide: APP_INITIALIZER, multi: true, deps: [ConfigService], useFactory: (ConfigService: ConfigService) => { return () => { return ConfigService.loadEverything(); }; }, },
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NavigationModule
    ]
})
export class AppModule { }

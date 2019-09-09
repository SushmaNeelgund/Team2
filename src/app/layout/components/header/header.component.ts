import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from '../../../shared/local-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    officeDashboard: boolean;
    adjusterDashboard: boolean;

    constructor(private translate: TranslateService, public router: Router, private LocalStorageService: LocalStorageService) {

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        // localStorage.removeItem('isLoggedin');
        this.LocalStorageService.removeAllExtItems();
      this.LocalStorageService.clearAllItem();
    //   this._router.navigate(['/login']);
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
    onClickOD() {
        this.officeDashboard =true;
        this.adjusterDashboard =false;
      }
      onClickAD() {
        this.adjusterDashboard = true ;
        this.officeDashboard = false;
      }
}

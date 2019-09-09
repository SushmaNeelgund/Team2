import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import {   MatExpansionModule, MatToolbar, MatMenu, MatMenuTrigger, MatTabsModule, MatMenuModule, MatIconModule, MatSelectModule, MatToolbarModule, MatTab } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MultiSelect } from '@syncfusion/ej2-dropdowns/src/multi-select';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';



@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        MatExpansionModule,
        HttpClientModule,
        MatToolbarModule,
        MatTabsModule, MatMenuModule,MatIconModule,
        MatSelectModule,NgbModule,
        NgbPaginationModule,
        MultiSelectAllModule


    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, MenuNavComponent]
})
export class LayoutModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { MatExpansionModule, MatTabsModule, MatMenuModule, MatIconModule,MatToolbarModule,MatCheckboxModule, MatAutocompleteModule } from '@angular/material';

import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ScheduleAllModule } from '@syncfusion/ej2-angular-schedule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,

        MatMenuModule,
        MatIconModule,
        MatTabsModule,
        MatToolbarModule,
        MatCheckboxModule,
        MultiSelectAllModule,
        AutoCompleteModule,
        MatExpansionModule,
        ScheduleAllModule,
        DatePickerModule,
        DatePickerAllModule,
        DateTimePickerAllModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModule






    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, MenuNavComponent]
})
export class LayoutModule {}

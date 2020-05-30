import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { I18nModule } from '@app/i18n';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

import { AppstoreOutline, UserOutline, LaptopOutline, NotificationOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [AppstoreOutline, UserOutline, LaptopOutline, NotificationOutline];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    I18nModule,
    RouterModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule.forRoot(icons),
  ],
  declarations: [BreadcrumbsComponent, HeaderComponent, ShellComponent],
})
export class ShellModule {}

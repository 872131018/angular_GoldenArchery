import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Admin } from './dashboard/admin.component';
import { Schedule } from './schedule/schedule.component';
import { Events } from './events/events.component';
import { Biographies } from './biographies/biographies.component';
import { Content } from './content/content.component';

const routes: Routes = [
    { path: '', redirectTo: '/admin', pathMatch: 'full' },
    { path: 'admin', component: Admin },
    { path: 'admin/schedule', component: Schedule },
    { path: 'admin/events', component: Events },
    { path: 'admin/biographies', component: Biographies },
    { path: 'admin/content', component: Content },
    { path: 'admin/files', component: FilesComponent },
    { path: 'admin/inquiries', component: InquiriesComponent },
    { path: 'logout', component: LogoutComponent },
    //{ path: 'detail/:id', component: HeroDetailComponent },
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'books', component: BookComponent },
    { path: 'detail/:id', component: BookDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
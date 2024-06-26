import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';

const routes: Routes = [
    {
        path:"admin/categories",
        component: CategoryListComponent
    },
    {
    path: 'admin/categories/add',
    component: AddCategoryComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
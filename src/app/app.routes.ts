import { Interpolation } from './comps/interpolation/interpolation';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { PropertyBinding } from './comps/property/property';
import { EventBinding } from './comps/event/event';
import { Home } from './comps/home/home';
import { TwoWayBinding } from './comps/two-way/two-way';
import { ProductsComponent } from './comps/products/products';
import { ProdListsComponent } from './comps/product-list/product-list';
import { ProductDetails } from './comps/product-details/product-details';
import { EditProductComponent} from './comps/edit-product/edit-product';
import { ViewDetailsComponent } from './comps/view-details/view-details';

export const routes: Routes = [

    {
        path: 'interpolation',
        component: Interpolation,
    },

    {
        path: 'property-binding',
        component: PropertyBinding
    },

    {
        path: 'event-binding',
        component: EventBinding
    },

    {
        path: 'home',
        component: Home
    },

     {
        path: 'two-way-binding',
        component: TwoWayBinding
    },

    {
        path: 'products',
        component: ProductsComponent
    },

    {
        path: 'product-list',
        component: ProdListsComponent
    },

    {
        path: 'product-details/:id',
        component: ProductDetails
    },

    {
        path: 'edit-product/:id',
        component: EditProductComponent
    },

    {
        path: 'view-details/:id',
        component: ViewDetailsComponent
    }

];


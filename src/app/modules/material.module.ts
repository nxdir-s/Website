import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatGridListModule,
        MatTabsModule,
        MatExpansionModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatGridListModule,
        MatTabsModule,
        MatExpansionModule
    ],
})

export class MaterialModule { }
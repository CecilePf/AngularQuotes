import { NgModule } from '@angular/core';
import { MatToolbarModule, MatTabsModule, MatListModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

// Création de module : décorateur NgModule qui prend un objet en paramètre
// exports : pour pouvoir les utiliser dans les components
@NgModule({
    exports: [MatTabsModule, MatToolbarModule, MatListModule, MatFormFieldModule, MatInputModule, MatButtonModule]
})

export class MaterialModule {

}
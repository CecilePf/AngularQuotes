import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuotesService } from '../../services/quotes.service';
import { Quote } from '../../../quote.interface';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {
    form: FormGroup;
    private active: boolean = true;

    @Output()
    create = new EventEmitter();

    @Output()
    update = new EventEmitter();

    isInEditMode = false;
    verb = 'Ajouter';

    constructor(private formBuilder: FormBuilder, 
        private router: Router, 
        private quotesService: QuotesService) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            firstname: [''],
            lastname: ['', Validators.required],
            quote: ['', Validators.required],
            key: ['']
        });

        // On s'abonne au sujet (pour éditer)
        this.quotesService.subject.subscribe(data => {
            this.isInEditMode = true;
            this.verb = 'Modifier';
            console.log('quote', data);
            this.form.get('firstname').patchValue((data as Quote).firstname);
            this.form.get('lastname').patchValue((data as Quote).lastname);
            this.form.get('quote').patchValue((data as Quote).text);
            this.form.get('key').patchValue((data as Quote).key);
        });
    }

    saveQuote() {
        // console.log('form valid', this.form.valid);
        if (!this.form.valid) {
            console.log('form NOT valid');
            return;
        }

        console.log('form valid');
        if (!this.isInEditMode) {
            this.verb = 'Ajouter';
            this.create.emit(this.form);
        } else if (this.isInEditMode) {
            this.update.emit(this.form);
            this.isInEditMode = false;
        }
        
        this.form.reset();

        // Old hack pour éviter les erreurs d'affichage après soumission du formulaire
        // Sans ça, les input required sont rouges après soumission car vides
        // Le formulaire ne s'affichera que quand active sera true (voir vue), cela permet de la regénérer
        this.active = false;
        setTimeout(() => this.active = true, 0);
        // Fin old hack

        this.verb = "Ajouter";
        // this.router.navigate(['']);
    }

    cancelEdit() {
        this.isInEditMode = false;
        this.verb = "Ajouter";
        this.form.reset();
    }

}

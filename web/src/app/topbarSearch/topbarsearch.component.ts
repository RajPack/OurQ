import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'app-topbar-search',
    templateUrl: './topbarsearch.component.html',
    styleUrls: ['./topbarsearch.component.css']
})

export class TopBarSearchComponent implements OnInit {
    topbarSearchForm: FormGroup;
    topbarLocationForm: FormGroup;
    @Input() showMinimalSearch: boolean;

    constructor(private fb: FormBuilder) {
        this.initiateForm();
        console.log('searchcomponrnt'+this.showMinimalSearch);
    }

    ngOnInit() {

    }

    onSubmit() {
        let location: string, searchVal: string;

        location = this.topbarLocationForm.get('location').value;
        searchVal = this.topbarSearchForm.get('search').value;
    }

    initiateForm() {
        this.topbarSearchForm = this.fb.group({
            search: ['', Validators.required]
        });

        this.topbarLocationForm = this.fb.group({
            location: ['', Validators.required]
        });
    }
}
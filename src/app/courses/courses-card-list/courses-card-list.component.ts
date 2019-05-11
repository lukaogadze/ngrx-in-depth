import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {CourseDialogComponent} from '../course-dialog/course-dialog.component';

@Component({
    selector: 'courses-card-list',
    templateUrl: './courses-card-list.component.html',
    styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit {

    @Input()
    readonly courses!: Course[];

    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {

    }

    editCourse(course: Course) {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '400px';

        dialogConfig.data = course;

        this.dialog.open(CourseDialogComponent,
            dialogConfig);


    }

}









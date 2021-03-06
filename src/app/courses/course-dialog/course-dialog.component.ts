import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Course} from '../model/course';
import {CoursesService} from '../services/courses.service';

@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {
    readonly courseId: number;
    form!: FormGroup;
    readonly description: string;

    constructor(
        private coursesService: CoursesService,
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<CourseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) course: Course) {

        this.courseId = course.id;

        this.description = course.description;


        this.buildForm(course);

    }

    private buildForm(course: Course) {
        this.form = this.fb.group({
            description: [course.description, Validators.required],
            category: [course.category, Validators.required],
            longDescription: [course.longDescription, Validators.required],
            promo: [course.promo, []]
        });
    }

    ngOnInit() {

    }


    save() {

        const changes = this.form.value;

        this.coursesService.saveCourse(this.courseId, changes)
            .subscribe(
                () => this.dialogRef.close()
            );
    }

    close() {
        this.dialogRef.close();
    }

}

import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material';
import {Course} from '../model/course';
import {CoursesService} from '../services/courses.service';
import {tap} from 'rxjs/operators';
import {LessonsDataSource} from '../services/lessons.datasource';


@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, AfterViewInit {

    course!: Course;

    dataSource!: LessonsDataSource;

    displayedColumns = ['seqNo', 'description', 'duration'];

    @ViewChild(MatPaginator) readonly paginator!: MatPaginator;


    constructor(private route: ActivatedRoute,
                private coursesService: CoursesService) {

    }

    ngOnInit() {

        this.course = this.route.snapshot.data['course'];

        this.dataSource = new LessonsDataSource(this.coursesService);

        this.dataSource.loadLessons(this.course.id, 0, 3);

    }

    ngAfterViewInit() {

        this.paginator.page
            .pipe(
                tap(() => this.loadLessonsPage())
            )
            .subscribe();

    }

    loadLessonsPage() {
        this.dataSource.loadLessons(
            this.course.id,
            this.paginator.pageIndex,
            this.paginator.pageSize);
    }


}

import {Component} from '@angular/core';
import {Experience} from "../experience-card/experience";
import {Education} from "../education-card/education";
import {Information} from "../information-card/information";

@Component({
    selector: 'app-resume',
    templateUrl: './resume-screen.component.html',
    styleUrls: ['./resume-screen.component.css']
})
export class ResumeScreenComponent {
    title = 'resume';
    progList = ['R', 'SQL', 'WhereScape']
    otherSkills = ['Git', 'Scrum']

    languages: { [key: string]: string } = {'German': 'C2', 'English': 'C2', 'French': 'C1'};

    aboutMeText = 'I want to contribute to our healthcare system by making the most out of our health data. Time and again, I am fascinated by all the steps and love for details needed in the process from collecting data to gaining valuable insights for patients.\n'

    experiences: Experience[] = [
        {
            imgSource: 'https://ipt.ch/static/img/logo_ipt.e41536c42e31.svg',
            jobTitle: 'Consultant',
            employer: 'ipt',
            employerLocation: 'Zürich',
            workload: 'Full Time',
            timespan: 'June 2019 – Present',
            jobDescription: 'Aut omnis voluptatem sit sequi. Voluptatem temporibus repellat voluptatem voluptatibus enim voluptas necessitatibus. Aut quasi sunt dolor. Commodi dolores saepe asperiores beatae voluptate corporis est ea voluptatem. Enim quo sed et sint aspernatur distinctio qui quam.',
            isLastItem: false
        },
        {
            imgSource: '/assets/postfinance.webp',
            jobTitle: 'ICT Test Engineer',
            employer: 'PostFinance',
            employerLocation: 'Bern',
            workload: 'Full Time',
            timespan: 'April 2022 – July 2023',
            jobDescription: 'Aut omnis voluptatem sit sequi. Voluptatem temporibus repellat voluptatem voluptatibus enim voluptas necessitatibus. Aut quasi sunt dolor. Commodi dolores saepe asperiores beatae voluptate corporis est ea voluptatem. Enim quo sed et sint aspernatur distinctio qui quam.',
            isLastItem: true
        }
        ]

    education: Education[] = [
        {
            imgSource: '/assets/logo_unibe.svg',
            studies: 'Master in Computer Sciences',
            school: 'University of Bern',
            schoolLocation: 'Bern, Fribourg',
            workload: 'Full Time',
            timespan: 'September 2019 – June 2022',
            educationDescription: 'Aut omnis voluptatem sit sequi. Voluptatem temporibus repellat voluptatem voluptatibus enim voluptas necessitatibus. Aut quasi sunt dolor. Commodi dolores saepe asperiores beatae voluptate corporis est ea voluptatem. Enim quo sed et sint aspernatur distinctio qui quam.',
            isLastItem: false
        },
        {
            imgSource: '/assets/logo_unibe.svg',
            studies: 'Bachelor in Mathematics',
            school: 'University of Bern',
            schoolLocation: 'Bern',
            workload: 'Full Time',
            timespan: 'September 2014 – June 2019',
            educationDescription: 'Aut omnis voluptatem sit sequi. Voluptatem temporibus repellat voluptatem voluptatibus enim voluptas necessitatibus. Aut quasi sunt dolor. Commodi dolores saepe asperiores beatae voluptate corporis est ea voluptatem. Enim quo sed et sint aspernatur distinctio qui quam.',
            isLastItem: false
        },
        {
            imgSource: '/assets/ksz.jpeg',
            studies: 'Matura',
            school: 'Kantonsschule Zofingen',
            schoolLocation: 'Zofingen',
            workload: 'Full Time',
            timespan: 'August 2010 - June 2013',
            educationDescription: 'Aut omnis voluptatem sit sequi. Voluptatem temporibus repellat voluptatem voluptatibus enim voluptas necessitatibus. Aut quasi sunt dolor. Commodi dolores saepe asperiores beatae voluptate corporis est ea voluptatem. Enim quo sed et sint aspernatur distinctio qui quam.',
            isLastItem: true
        }
    ]
    information: Information = {
        birthday:'09 January 1995',
        addressStreet: 'Sägestrasse 57',
        addressCity: '5600 Lenzburg',
        phoneNumber: '+4178 922 09 01',
        github:'skissling'
    }
}

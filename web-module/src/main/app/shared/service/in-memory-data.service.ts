/**
 * Created by jangrakul on 27/09/2016.
 */
import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let tasks = [
            {   id: 10000,
                headline: 'Setup the desktop',
                owner: 'Kuldeep',
                summary: 'Setup and arrange the desktops according to seating arrangement',
                detail: 'a. Tools list need to be identified.\n' +
                'b. Technologies need to be selected.\n' +
                'c. PoCs need to be performed.' +
                'd. The list to be provided to desktop build team.'
            },
            {   id: 10001,
                headline: 'Setup IDE for development of both Java and Java Script/Type Script projects',
                owner: 'Kritika',
                summary: 'Investigate various IDE options including IntelliJ and Eclipse',
                detail: 'a. Download IntelliJ UE, CE, Webstorm and Eclipse.\n' +
                'b. Install the downloaded IDEs.\n' +
                'c. Create the vanilla angular 2 js projects from templates.' +
                'd. Add Java code in it and write some new modules using type scripts in Angular project.'
            },
            {   id: 10001,
                headline: 'PoC for Angular App',
                owner: 'Kritika',
                summary: 'Write a new Angular 2 Hello World Application',
                detail: 'a. Add feature based modules.\n' +
                'b. Add new components in each module.\n' +
                'c. Add some routing files.' +
                'd. Add Html and CSS files.'
            },
        ];
        return {tasks};
    }
}

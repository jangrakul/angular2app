/**
 * Created by jangrakul on 27/09/2016.
 */
import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let employees = [
            {id: 10000, name: 'Kuldeep', role: 'Lead Developer', team: 'Team A', level: 'Scrum Team'},
            {id: 10001, name: 'Vikram', role: 'Developer In Test', team: 'Team A', level: 'Scrum Team'},
            {id: 10002, name: 'Paul', role: 'Developer In Test', team: 'Team A', level: 'Scrum Team'},
            {id: 10003, name: 'Disha', role: 'Developer', team: 'Team A', level: 'Scrum Team'},
            {id: 10004, name: 'Raghu', role: 'Developer', team: 'Team A', level: 'Scrum Team'},
            {id: 10005, name: 'Vinit', role: 'Developer', team: 'Team A', level: 'Scrum Team'},
            {id: 10006, name: 'Permeet', role: 'Developer', team: 'Team A', level: 'Scrum Team'},
            {id: 10007, name: 'Bill', role: 'Developer', team: 'Team A', level: 'Scrum Team'},
            {id: 10008, name: 'Christina', role: 'Programme Manager', team: 'Team A', level: 'Executive Team'},
            {id: 10009, name: 'Tony', role: 'Architect', team: 'Team A', level: 'Executive Team'},
            {id: 10010, name: 'Vijaya', role: 'Architect', team: 'Team B', level: 'Executive Team'},
            {id: 10011, name: 'Ishwar', role: 'Lead Developer', team: 'Team B', level: 'Scrum Team'},
            {id: 10012, name: 'Kritika', role: 'Developer', team: 'Team B', level: 'Scrum Team'}
        ];
        return {employees};
    }
}

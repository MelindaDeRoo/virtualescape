import { Team } from '../models/team';

export class AddTeam {
    static readonly type = '[Team] Add';

    constructor(public payload: Team){}
}
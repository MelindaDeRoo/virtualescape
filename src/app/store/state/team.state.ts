import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Team } from '../models/team';
import { AddTeam } from '../actions/team.action';

export class TeamStateModel {
    teams: Team[];
}

@State<TeamStateModel>({
    name: 'teams',
    defaults: {
        teams: []
    }
})

export class TeamState {
    @Selector()
    static getTeams(state: TeamStateModel){
        return state.teams;
    }

    @Action(AddTeam)
    add({getState, patchState }: StateContext<TeamStateModel>, { payload }: AddTeam) {
        const state = getState();
        patchState({
            teams: [...state.teams, payload]
        });
    }
}
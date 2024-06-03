import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
    assignments: assignments,
};

const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: newAssignment }) => {
            // const newAssignment: any = {
            //     _id: new Date().getTime().toString(),
            // newAssignment._id = new Date().getTime().toString();
            // const assignment = [...newAssignment, _id: new Date().getTime().toString()]
            state.assignments = [newAssignment, ...state.assignments];

        },

        deleteAssignment: (state, { payload: assignmentID }) => {
            state.assignments = state.assignments.filter((assignment: any) => assignment._id !== assignmentID);

        },

        updateAssignment: (state, {payload: newAssignment}) => {
            state.assignments = state.assignments.map((assignment: any) => assignment._id === newAssignment._id ? newAssignment : assignment );
        },

    },
});
export const {
    addAssignment,
    deleteAssignment,
    updateAssignment
} = assignmentSlice.actions;

export default assignmentSlice.reducer;
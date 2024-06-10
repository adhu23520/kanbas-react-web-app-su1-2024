import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";
const initialState = {
    assignments: [],
};

const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {

        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },


        addAssignment: (state, { payload: assignment }) => {
            // const newAssignmnet: any = {
            //     _id: new Date().getTime().toString(),
            //     lessons: [],
            //     name: module.name,
                
            //   };
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                course: assignment.course,
                title: assignment.title,
                description: assignment.description,
                // newAssignment._id = new Date().getTime().toString(),
            };
            // const assignment = [...newAssignment, _id: new Date().getTime().toString()]
            state.assignments = [newAssignment, ...state.assignments] as any;

        },

        deleteAssignment: (state, { payload: assignmentID }) => {
            state.assignments = state.assignments.filter((assignment: any) => assignment._id !== assignmentID);

        },

        updateAssignment: (state, { payload: newAssignment }) => {
            state.assignments = state.assignments.map((assignment: any) => assignment._id === newAssignment._id ? newAssignment : assignment) as any;
        },

    },
});
export const {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignments
} = assignmentSlice.actions;

export default assignmentSlice.reducer;
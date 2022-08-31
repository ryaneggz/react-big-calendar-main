import React from 'react';
import {
    MenuItem,
    Select,
    Chip,
    Grid
} from "@material-ui/core";
import ConfirmationModal from '../modals/ConfirmationModal';

import { useProjectContext } from "../../contexts/ProjectContext";

export default function SelectProject() {
    const {
        project,
		projects,
        setProject
	} = useProjectContext();

    const handleChange = (event) => {
        setProject(event.target.value);
        console.log('SelectProject.handleChange: ', event.target.value);
    };

  return (
    <>
        <Select
            fullWidth
            displayEmpty
            label="Project"
            variant="outlined"
            value={project}
            onChange={handleChange}
            renderValue={() => {
                if (
                    project._id === "" || 
                    project === "" || 
                    project === null &&
                    project.name === "" &&
                    project.color === ""
                ) {
                    return <em>Select Project</em>
                } else {
                    return <em>{project.name}</em>
                }
                
            }}
        >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {projects.map((project) => (
                <MenuItem
                    key={project._id}
                    value={project}
                >
                    <Grid container>
                        <Grid item xs={10}>
                            {project.name}
                        </Grid>
                        <Grid item xs={2}>
                            <Chip 
                                label={`${project.color}`} 
                                style={{ 
                                    backgroundColor: `${project.color}`, 
                                    color: "white"
                                }}
                            />
                        </Grid>
                    </Grid>
                </MenuItem>
            ))}
        </Select>
    </>
  );
}
import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBIcon, MDBBtn, MDBInput } from 'mdb-react-ui-kit';

const ProjectItem = ({ project, deleteProject }) => {
    return (
        <tr>
            <td>
                {project.project_name}
            </td>
            <td>
                {project.github_url}
            </td>
            <td>
                {project.users_involved}
            </td>
            <td>
                <MDBBtn onClick={() => deleteProject(project.id)} color='link'><MDBIcon fas icon="archive" /></MDBBtn>
            </td>
        </tr>
    )
}
const ProjectList = ({ projects, deleteProject }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        NAME_PROJECT
                    </th>
                    <th>
                        GITHUB
                    </th>
                    <th>
                        AUHTOR
                    </th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project) => <ProjectItem project={project} deleteProject={deleteProject}/>)}
            </tbody>
        </table>
    )
}
export default ProjectList

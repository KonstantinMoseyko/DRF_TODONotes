import React from 'react'


const ProjectItem = ({ project }) => {
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
        </tr>
    )
}
const ProjectList = ({ projects }) => {
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
                {projects.map((project) => <ProjectItem project={project} />)}
            </tbody>
        </table>
    )
}
export default ProjectList

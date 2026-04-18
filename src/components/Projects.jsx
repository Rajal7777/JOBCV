import { projects } from "../data/data";

export default function Projects(){

    return(
   <ul>
    {projects.map((project) => (
        <li>
            <h2>{project.name}</h2>
        </li>
    ))}
   </ul>
    )
}
import styles from './NewProject.module.css'

import ProjectForm from '../project/ProjectForm'

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depis adicionar os seus serviços</p>
            <ProjectForm />
        </div>
    )
}

export default NewProject
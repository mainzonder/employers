import "./employer-add-form.css"

const EmployersAddForm = () => {
    return (
        <div className="app-add-form">
            <h2>Добавьте нового сотрудника</h2>
            
             <form className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?" />

                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $" />

                <button className="btn btn-outline-light"> Добавить</button>
            </form>
        </div>


    )
}

export default EmployersAddForm
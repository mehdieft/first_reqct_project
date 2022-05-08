const TodoField = () => {
    return (
        <div className="d-flex flex-column w-80 ">
            <h2>
                todo field type
            </h2>
            <input type="text" className="mt-4 mb-4 form-control form-control-sm" />
            <div class="input-group">
                <div class="input-group-prepend">
                    
                </div>
                <textarea class="form-control my-4" aria-label="With textarea"></textarea>
            </div>

            <button className="btn btn-success" type="submit">
                add todo

            </button>

        </div>

    )
}
export default TodoField
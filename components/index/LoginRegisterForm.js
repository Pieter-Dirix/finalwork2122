
export default function RegisterForm() {

    let loginSelected = false;

    
    const nameInputs =  <div>
                            <div className="mb-3 row">
                                <label className="form-label" htmlFor="firstName">first name</label>
                                <input className="form-control" type="text" id="firstName" autoComplete="first name" required />
                            </div>
                            <div className="mb-3 row">
                                <label className="form-label" htmlFor="lastName">last name</label>
                                <input className="form-control" type="text" id="lastName" autoComplete="last name" required />
                            </div>
                        </div>

    const registerUser = event => {
        event.preventDefault();
    }

    return(
        <div className="formContainer card p-3">
            
            <form onSubmit={registerUser} className="card-body">
            <h2 className="card-title">{loginSelected? "Login" : "Register"}</h2>
            {
                !loginSelected && nameInputs
            }
            
            <div className="mb-3 row">
                <label className="form-label" htmlFor="email">email</label>
                <input className="form-control" type="text" id="email" autoComplete="email" required />
            </div>
            <div className="mb-3 row">
                <label className="form-label" htmlFor="password">password</label>
                <input className="form-control" type="password" id="password" autoComplete="password" required />
            </div>
                <button className="btn btn-primary mb-3">Next</button>        
            </form>
        </div>
    )   
}
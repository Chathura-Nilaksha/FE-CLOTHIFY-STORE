import ClothifyHeader from "./ClothifyHeader";
import HeaderCompo from "./HeaderCompo";


export default function Login() {

    return (

        <div>
            <div className="conrainer">
                <div className="raw text-center" >
                    <ClothifyHeader/>
                </div>
            </div>

            <div className="container">
                <div className="raw text-center text-capitalize">
                    <HeaderCompo />
                </div>
            </div>

            <div className="container">
                <div className="raw">
                    <h4 className="text-center"> Welcome to Clothify Store! Please Log in.</h4>
                    <main className="form-signin w-100 m-auto">
                        <form>

                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            <button className="btn btn-primary w-100 py-2 m-1 mb-3" type="submit" > Log in </button>

                        </form>
                    </main>
                    <p className="top-mg-5">If you do not have account, First Sign Up for Free here &nbsp; <button className="btn btn-primary w-8 py-1" type="submit" > Sign Up </button>
                    &nbsp; & then Log in</p>
                </div>
            </div>
        </div>
    );
}






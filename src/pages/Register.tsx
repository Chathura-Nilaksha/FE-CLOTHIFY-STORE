import ClothifyHeader from "./ClothifyHeader";
import HeaderCompo from "./HeaderCompo";
import '../App.css'

export default function Register() {


    return (
        <>
            <div className="conrainer">
                <div className="raw text-center" >
                    <ClothifyHeader />
                </div>
            </div>

            <div className="container">
                <div className="raw text-center text-capitalize">
                    <HeaderCompo />
                </div>
            </div>

            <div className="container">
                <div className="raw">
                    <body className="bg-body-tertiary">

                        <div className="container">
                            <main>
                                <div className="py-5 text-center">
                                    <h2><strong>User Registeration Form</strong></h2>
                                </div>

                                <div className="row g-5">

                                    <div className="col-md-7 col-lg-8">
                                        <form className="needs-validation" noValidate>
                                            <div className="row g-3">
                                                <div className="col-sm-6 form-floating">
                                                    <input type="text" className="form-control" id="firstName" placeholder="" required />
                                                    <label htmlFor="firstName" className="form-label">First name</label>
                                                    <div className="invalid-feedback">
                                                        First name is required.
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 form-floating">
                                                    <input type="text" className="form-control" id="lastName" placeholder="" required />
                                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                                    <div className="invalid-feedback">
                                                        Last name is required.
                                                    </div>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label htmlFor="phone-number-1" className="form-label">Phone Number 1 </label>
                                                    <input type="email" className="form-control" id="phone-number-1" placeholder="Example: 0771234567" required />
                                                    <div className="invalid-feedback">
                                                        Please enter a valid Phone Number for shipping updates.
                                                    </div>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label htmlFor="phone-number-2" className="form-label">Phone Number 2 <span className="text-body-secondary">(Optional)</span></label>
                                                    <input type="email" className="form-control" id="phone-number-2" placeholder="Example: 0771234567" />
                                                </div>

                                                <div className="col-12">
                                                    <label htmlFor="email" className="form-label">Email </label>
                                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                                                    <div className="invalid-feedback">
                                                        Please enter a valid email address for shipping updates.
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <label htmlFor="CreatePassword" className="form-label">Create Password </label>
                                                    <input type="password" className="form-control" id="CreatePassword" placeholder="Create Password" required />
                                                    <div className="invalid-feedback">
                                                        Please Create a Password.
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <label htmlFor="address" className="form-label">Address Line1</label>
                                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                                                    <div className="invalid-feedback">
                                                        Please enter your Address Line1.
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <label htmlFor="address2" className="form-label">Address Line2 <span className="text-body-secondary">(Optional)</span></label>
                                                    <input type="text" className="form-control" id="address2" placeholder="Colombo road" />
                                                </div>

                                                <div className="col-md-6">
                                                    <label htmlFor="country" className="form-label">City</label>
                                                    <select className="form-select" id="country" required>
                                                        <option value="">Choose...</option>
                                                        <option>United States</option>
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Please select valid City.
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <label htmlFor="state" className="form-label">District</label>
                                                    <select className="form-select" id="state" required>
                                                        <option value="">Choose...</option>
                                                        <option>California</option>
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Please provide District.
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <label htmlFor="birth" className="form-label">Year Of Birth</label>
                                                    <select className="form-select" id="birth" required>
                                                        <option value="">Choose...</option>
                                                        <option>California</option>
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Please provide Year Of Birth.
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="gender" className="form-label">Gender</label>
                                                    <select className="form-select" id="gender" required>
                                                        <option value="">Choose...</option>
                                                        <option>California</option>
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Please provide Gender.
                                                    </div>
                                                </div>
                                            </div>
                                            <button  className="btn btn-primary btn-lg mb-5 mt-4 py-1" type="submit"> <small>Submit the Registration Form</small></button>
                                        </form>
                                    </div>
                                </div>
                            </main>
                        </div>

                        <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
                        <script src="checkout.js"></script>

                    </body>

                </div>
            </div>
        </>
    );
}
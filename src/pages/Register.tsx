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
                                    <h2>User Registeration Form</h2>
                                </div>


                                <div className="row g-5">                                    
                                  
                                    <div className="col-md-7 col-lg-8">
                                        <form className="needs-validation" noValidate>
                                            <div className="row g-3">
                                                <div className="col-sm-6">
                                                    <label htmlFor="firstName" className="form-label">First name</label>
                                                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                                                    <div className="invalid-feedback">
                                                        Valid first name is required.
                                                    </div>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                                                    <div className="invalid-feedback">
                                                        Valid last name is required.
                                                    </div>
                                                </div>




                                                <div className="col-sm-6">
                                                    <label htmlFor="email" className="form-label">Phone Number 1 </label>
                                                    <input type="email" className="form-control" id="email" placeholder="0771234567" />
                                                    <div className="invalid-feedback">
                                                        Please enter a valid email address for shipping updates.
                                                    </div>
                                                </div>

                                                 <div className="col-sm-6">
                                                    <label htmlFor="email" className="form-label">Phone Number 2 <span className="text-body-secondary">(Optional)</span></label>
                                                    <input type="email" className="form-control" id="email" placeholder="0771234567" />
                                                    <div className="invalid-feedback">
                                                        Please enter a valid email address for shipping updates.
                                                    </div>
                                                </div>

                                                                                  
                                                <div className="col-12">
                                                    <label htmlFor="email" className="form-label">Email </label>
                                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                                    <div className="invalid-feedback">
                                                        Please enter a valid email address for shipping updates.
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <label htmlFor="address" className="form-label">Address Line1</label>
                                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                                                    <div className="invalid-feedback">
                                                        Please enter your shipping address.
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

                                                <div className="col-md-5">
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
                                                    <label htmlFor="state" className="form-label">Year Of Birth</label>
                                                    <select className="form-select" id="state" required>
                                                        <option value="">Choose...</option>
                                                        <option>California</option>
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Please provide Year Of Birth.
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="state" className="form-label">Gender</label>
                                                    <select className="form-select" id="state" required>
                                                        <option value="">Choose...</option>
                                                        <option>California</option>
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Please provide Gender.
                                                    </div>
                                                </div>

                                                
                                            </div>

                                            <hr className="my-7" />






                                            <h4 className="mb-3">Payment</h4>

                                            <div className="my-3">
                                                <div className="form-check">
                                                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required />
                                                    <label className="form-check-label" htmlFor="credit">Credit card</label>
                                                </div>
                                                <div className="form-check">
                                                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                                                    <label className="form-check-label" htmlFor="debit">Debit card</label>
                                                </div>
                                                <div className="form-check">
                                                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                                                    <label className="form-check-label" htmlFor="paypal">PayPal</label>
                                                </div>
                                            </div>

                                            <div className="row gy-3">
                                                <div className="col-md-6">
                                                    <label htmlFor="cc-name" className="form-label">Name on card</label>
                                                    <input type="text" className="form-control" id="cc-name" placeholder="" required />
                                                    <small className="text-body-secondary">Full name as displayed on card</small>
                                                    <div className="invalid-feedback">
                                                        Name on card is required
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <label htmlFor="cc-number" className="form-label">Credit card number</label>
                                                    <input type="text" className="form-control" id="cc-number" placeholder="" required />
                                                    <div className="invalid-feedback">
                                                        Credit card number is required
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                                                    <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                                                    <div className="invalid-feedback">
                                                        Expiration date required
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                                                    <div className="invalid-feedback">
                                                        Security code required
                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="my-4" />

                                            <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
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
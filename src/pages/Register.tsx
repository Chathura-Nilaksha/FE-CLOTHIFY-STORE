import ClothifyHeader from "./ClothifyHeader";
import HeaderCompo from "./HeaderCompo";
import '../App.css'
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

enum GenderEnum {
    female = "female",
    male = "male",
}
interface IFormInput {
    firstName: string,
    lastName: string,
    phoneNumber1: string,
    phoneNumber2: string,
    whatsappNumber: string,
    email: string,
    password: string,
    addressLine1: string,
    addressLine2: string,
    city: string,
    district: string,
    yearOfBirth: number,
    gender: GenderEnum
}

export default function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
    const submitForm: SubmitHandler<IFormInput> = (customerData) => {
        console.log(customerData);
        axios.post('http://localhost:8081/customer/save-details', customerData);
    }

    return (
        <div>
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

                        <form className="container">
                            <main>
                                <div className="py-5 text-center">
                                    <h2><strong>User Registeration Form</strong></h2>
                                </div>

                                <div className="row g-5">

                                    <div className="col-md-7 col-lg-8">
                                        <form className="needs-validation" noValidate>
                                            <div className="row g-3">
                                                <div className="col-sm-6 form-floating">
                                                    <input type="text"
                                                        {...register("firstName", { required: true })}
                                                        aria-invalid={errors.firstName ? "true" : "false"}
                                                        className="form-control" id="firstName" />

                                                    {errors.firstName?.type === "required" && (
                                                        <p role="alert">First name is required</p>
                                                    )}

                                                    <label htmlFor="firstName" className="form-label">First name &nbsp; (Required)</label>

                                                    {/* <input         // This unit taken from FORMHOOK site.
                                                        {...register("firstName", { required: true })}
                                                        aria-invalid={errors.firstName ? "true" : "false"}
                                                    />
                                                    {errors.firstName?.type === "required" && (
                                                        <p role="alert">First name is required</p>
                                                    )} */}

                                                </div>

                                                <div className="col-sm-6 form-floating">
                                                    <input type="text"
                                                        {...register("lastName", { required: true })}
                                                        aria-invalid={errors.lastName ? "true" : "false"}
                                                        className="form-control" id="lastName" />

                                                    {errors.lastName?.type === "required" && (
                                                        <p role="alert">Last name is required</p>
                                                    )}

                                                    <label htmlFor="lastName" className="form-label">Last name &nbsp; (Required)</label>
                                                </div>

                                                <div className="col-sm-4">
                                                    <label htmlFor="phone-number-1" className="form-label">Phone Number 1 </label>
                                                    <input type="text"
                                                        {...register("phoneNumber1", { required: true })}
                                                        aria-invalid={errors.phoneNumber1 ? "true" : "false"}
                                                        className="form-control" id="phone-number-1" placeholder="Example: 0771234567" />

                                                    {errors.phoneNumber1?.type === "required" && (
                                                        <p role="alert">Phone Number1 is required</p>
                                                    )}

                                                </div>

                                                <div className="col-sm-4">
                                                    <label htmlFor="phone-number-2" className="form-label">Phone Number 2 <span className="text-body-secondary">(Optional)</span></label>
                                                    <input type="text"
                                                        {...register("phoneNumber2")}
                                                        className="form-control" id="phone-number-2" placeholder="Example: 0771234567" />
                                                </div>

                                                <div className="col-sm-4">
                                                    <label htmlFor="whatsapp-number" className="form-label">Whatsapp Number <span className="text-body-secondary">(Optional)</span></label>
                                                    <input type="text"
                                                        {...register("whatsappNumber", { required: true })}
                                                        className="form-control" id="whatsapp-number" placeholder="Example: 0771234567" />
                                                </div>

                                                <div className="col-12">
                                                    <label htmlFor="email" className="form-label">Email </label>
                                                    <input type="email"
                                                        {...register("email", { required: true })}
                                                        aria-invalid={errors.email ? "true" : "false"}
                                                        className="form-control" id="email" placeholder="you@example.com" required />

                                                    {errors.email?.type === "required" && (
                                                        <p role="alert">Email is required</p>
                                                    )}

                                                </div>

                                                <div className="col-12">
                                                    <label htmlFor="createPassword" className="form-label">Create Password </label>
                                                    <input type="password"
                                                        {...register("password", { required: true })}
                                                        aria-invalid={errors.password ? "true" : "false"}
                                                        className="form-control" id="createPassword" placeholder="Create Password" required />

                                                    {errors.password?.type === "required" && (
                                                        <p role="alert">Please Create a Password.</p>
                                                    )}

                                                </div>

                                                <div className="col-12">
                                                    <label htmlFor="address1" className="form-label">Address Line1</label>
                                                    <input type="text"
                                                        {...register("addressLine1", { required: true })}
                                                        aria-invalid={errors.addressLine1 ? "true" : "false"}
                                                        className="form-control" id="address1" placeholder="1234 Main St" />

                                                    {errors.addressLine1?.type === "required" && (
                                                        <p role="alert">Please enter your Address.</p>
                                                    )}

                                                </div>

                                                <div className="col-12">
                                                    <label htmlFor="address2" className="form-label">Address Line2 <span className="text-body-secondary">(Optional)</span></label>
                                                    <input type="text"
                                                        {...register("addressLine2")}
                                                        className="form-control" id="address2" placeholder="Colombo road" />

                                                </div>

                                                <div className="col-md-6">
                                                    <label htmlFor="city" className="form-label">City</label>
                                                    <input type="text"
                                                        {...register("city", { required: true })}
                                                        aria-invalid={errors.city ? "true" : "false"}
                                                        className="form-control" id="city" placeholder="Moratuwa" />

                                                    {errors.city?.type === "required" && (
                                                        <p role="alert">Please enter your City.</p>
                                                    )}

                                                </div>

                                                <div className="col-md-6">
                                                    <label htmlFor="district" className="form-label">District</label>
                                                    <select
                                                        {...register("district", { required: true })}
                                                        aria-invalid={errors.district ? "true" : "false"}
                                                        className="form-select" id="district">
                                                        <option value="">Choose...</option>
                                                        <option>California</option>
                                                    </select>

                                                    {errors.district?.type === "required" && (
                                                        <p role="alert">Please Select your District.</p>
                                                    )}

                                                </div>

                                                <div className="col-md-3">
                                                    <label htmlFor="birth" className="form-label">Year Of Birth</label>
                                                    <select {...register("yearOfBirth", { required: true })}
                                                        aria-invalid={errors.yearOfBirth ? "true" : "false"}
                                                        className="form-select" id="birth" >
                                                        <option value="">Choose...</option>
                                                        <option>California</option>
                                                    </select>

                                                    {errors.yearOfBirth?.type === "required" && (
                                                        <p role="alert">Please Select your Birth Year.</p>
                                                    )}

                                                </div>

                                                <div className="col-md-3">
                                                    <label htmlFor="gender" className="form-label">Gender</label>

                                                    <select {...register("gender", { required: true })}
                                                        aria-invalid={errors.gender ? "true" : "false"}
                                                        className="form-select" id="gender">
                                                        <option>Select..</option>
                                                        <option value="female">Female</option>
                                                        <option value="male">Male</option>
                                                    </select>

                                                    {errors.gender?.type === "required" && (
                                                        <p role="alert">Please Select your Gender.</p>
                                                    )}

                                                </div>
                                            </div>
                                            <button onClick={handleSubmit(submitForm)} className="btn btn-primary btn-lg mb-5 mt-4 py-1" type="submit"> <small>Submit the Registration Form</small></button>
                                        </form>
                                    </div>
                                </div>
                            </main>
                        </form>

                        <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
                        <script src="checkout.js"></script>

                    </body>

                </div>
            </div>
        </div>
    );
}

import React, { useState } from 'react';
import { SignImg } from '../../utils';
import { TextField } from '@mui/material';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners'; // Import the spinner component

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false); // State to manage loading

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
        console.log('Form submitted');
    };

    const handleGoogleLogin = (response) => {
        console.log('Google login response:', response);
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='w-full h-screen flex  justify-between'>
            <div className='w-[40vw] h-full flex flex-col items-center overflow-auto p-8'>
                <h1 className='text-2xl mb-5'>Sign Up for useCoursia</h1>
                <div className="flex flex-col items-center my-3">
                    <button
                        onClick={handleGoogleLogin}
                        className="py-2 px-3 flex items-center gap-2 bg-blue text-white rounded-lg hover:bg-blue-700"
                    >
                        <FaGoogle /> Sign Up with Google
                    </button>
                    <p className='text-gray-300 text-xl my-2'>_________</p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className=" w-[70%] flex flex-col gap-4"
                >
                    <TextField
                        label="Name"
                        type="text"
                        fullWidth
                        required
                        variant="outlined"
                        className="text-base"
                    />
                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        required
                        variant="outlined"
                        className="text-base"
                    />
                    <TextField
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        fullWidth
                        required
                        variant="outlined"
                        className="text-base"
                        InputProps={{
                            endAdornment: (
                                <button
                                    type="button"
                                    onClick={handleTogglePassword}
                                    className="flex items-center"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            ),
                        }}
                    />
                    <TextField
                        label="Confirm Password"
                        type={showPassword ? "text" : "password"}
                        fullWidth
                        required
                        variant="outlined"
                        className="text-base"
                        InputProps={{
                            endAdornment: (
                                <button
                                    type="button"
                                    onClick={handleTogglePassword}
                                    className="flex items-center"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            ),
                        }}
                    />
                    <div className="flex items-center mt-2">
                        <input
                            type="checkbox"
                            id="termsAndConditions"
                            className="mr-2"
                            required
                        />
                        <label htmlFor="termsAndConditions" className="text-gray-600">I agree to the Terms and Conditions</label>
                    </div>
                    <button
                        type="submit"
                        className="py-2 mt-4 bg-blue text-white rounded-lg hover:bg-blue-700 flex items-center justify-center"
                        disabled={loading}
                    >
                        {loading ? (
                            <ClipLoader color="#ffffff" size={20} />
                        ) : (
                            'Sign Up'
                        )}
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p>Already have an account? <a href="/sign-in" className="text-blue font-semibold hover:underline">Sign In</a></p>
                </div>
            </div>
            <div className='w-[60vw] h-full'>
                <img src={SignImg} className='w-full h-full object-cover' alt="Sign Up" />
            </div>
        </div>
    );
};

export default SignUp;

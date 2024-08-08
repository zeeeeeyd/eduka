import React, { useState } from 'react';
import { SignImg } from '../../utils';
import { TextField } from '@mui/material';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners'; 

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
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
        <div className='w-full h-full flex justify-between'>
            <div className='w-[55vw] h-screen'>
                <img src={SignImg} className='w-full h-full object-cover' alt="Sign In" />
            </div>
            <div className='w-[25vw] mx-auto my-auto'>
                <h1 className='flex-center text-2xl mb-10'>Sign In to useCoursia</h1>
                <div className="flex flex-col items-center mt-4">
                    <button
                        onClick={handleGoogleLogin}
                        className="py-2 px-3 flex items-center gap-2 bg-blue text-white rounded-lg hover:bg-blue-700"
                    >
                        <FaGoogle /> Sign In with Google
                    </button>
                    <p className='text-gray-300 text-xl mb-5'>_________</p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >
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
                    <div className="flex items-center mt-2">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            className="mr-2"
                        />
                        <label htmlFor="rememberMe" className="text-gray-600">Remember me</label>
                    </div>
                    <button
                        type="submit"
                        className="py-2 mt-4 bg-blue text-white rounded-lg hover:bg-blue-700 flex items-center justify-center"
                        disabled={loading}
                    >
                        {loading ? (
                            <ClipLoader color="#ffffff" size={20} />
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p>Haven't an account? <a href="/sign-up" className="text-blue font-semibold hover:underline">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

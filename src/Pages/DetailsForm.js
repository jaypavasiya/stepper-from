import { useState } from 'react';
import { Paper, Step, StepLabel, Stepper } from '@mui/material';
import { paperStyle } from './../common/styleObjects';
import FirstStep from '../components/FirstStep';
import SecondStep from '../components/SecondStep';
import ThirdStep from '../components/ThirdStep';
import Completed from '../components/Completed';
import { Box } from '@mui/system';

const steps = ['Step 1', 'Step 2', 'Step 3'];
const isText = /^[a-zA-Z ]+$/i;
const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const isNumber = /^\d+$/;

export default function DetailsForm() {
    const [activeStep, setActiveStep] = useState(0);
    const [formValues, setFormValues] = useState({
        firstName: '', lastName: '', email: '', gender: '', city: '', zip: '', date: new Date(), phone: '', agreenemt: false
    })
    const [formValidation, setFormValidation] = useState({
        firstName: '', lastName: '', email: '', gender: '', city: '',  zip: '',date: '', phone: '', agreenemt: false
    })


    const checkFormValidation = (e) => {
        const { name, value, required, checked } = e.target
        let error = ''
        let validate = { firstName: 'text', lastName: 'text', email: 'email', gender: 'select', city: 'text', phone: 'number', agreenemt: 'checkbox' }
        if (required && !value) return error = "This field is required"
        if (required && value) {
            switch (validate[name]) {
                case "text":
                    if (value && !isText.test(value))
                        error = "This field accepts text only.";
                    break;

                case "number":
                    if (value && !isNumber.test(value))
                        error = "This field accepts numbers only.";
                    break;

                case "email":
                    if (value && !isEmail.test(value))
                        error = "Please enter a valid email address.";
                    break;

                case "checkbox":
                    if (!checked) error = "Please provide a valid value.";
                    break;

                case "select":
                    if (!value) error = "Please select a value.";
                    break;

                default:
                    break;
            }
            return error
        }
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormValues({
            ...formValues,
            [name]: type === 'checkbox' ? checked : value
        })
        setFormValidation({
            ...formValidation,
            [name]: checkFormValidation(e)
        })
        console.log(':::::', formValidation);
    }
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setFormValues({ firstName: '', lastName: '', email: '', gender: '', city: '', zip: '', date: new Date(), phone: '', agreenemt: false })
        setFormValidation({ firstName: '', lastName: '', email: '', gender: '', city: '', zip: '', date: '', phone: '', agreenemt: false })
    };

    return (

        <Box className='multistepsform'>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <>

                    <Paper
                        variant="outlined"
                        sx={paperStyle}
                    >
                        <Completed handleReset={handleReset} />
                    </Paper>
                </>
            ) : (
                <>
                    <Paper
                        variant="outlined"
                        sx={paperStyle}
                    >
                        {activeStep === 0 ? <FirstStep
                            formValues={formValues}
                            handleNext={handleNext}
                            formValidation={formValidation}
                            handleChange={handleChange} />
                            : activeStep === 1 ? <SecondStep
                                formValues={formValues}
                                handleNext={handleNext}
                                handleBack={handleBack}
                                formValidation={formValidation}
                                handleChange={handleChange} />
                                : <ThirdStep
                                    formValues={formValues}
                                    handleNext={handleNext}
                                    handleBack={handleBack} />}
                    </Paper>
                </>
            )}
        </Box>
    );
}
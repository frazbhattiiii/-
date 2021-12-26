import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './sponsorForm.css';
import Axios from 'axios';

const SponsorForm = () => {
  const history = useHistory();

  const routeChange = () => {

    let path = `/creditCard`;
    history.push(path);
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });

  };
  const toastifyError = () => {
    toast('Amount Can not be negative or 0', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyErrorToast'
    });
  };


  const check = (number) => {
    console.log(number);
    if (number <= 0) {


      return false;

    } else {
      return true;
    }
  }
  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message, number, company } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        number,
        subject,
        company,
        message
      };
      Axios.post("http://localhost:3001/api/update/user/sponsor",
        {
          amount: data.number
        })
        .then((response) => {
          console.log(response)
          if (response.data.affectedRows != 0) {
            toastifySuccess();

            // Reset contact form fields after submission
            reset();
            // Display success toast

            // Re-enable form submission
            setDisabled(false);
            console.log(number);
            if (check(number)) {
              toastifySuccess();

              // Reset contact form fields after submission
              reset();
              // Display success toast

              // Re-enable form submission
              setDisabled(false);
              alert('Click Ok to enter Card Details!!');
              routeChange();
            }
            else {
              toastifyError();
              reset();
              // Display success toast

              // Re-enable form submission
              setDisabled(false);
            }
          }
        })


    }
    catch (e) {
      console.log(e);
    }


  };

  return (
    <body className='fullBody'>
      <div className='ContactForm'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <div className='contactForm'>
                <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                  {/* Row 1 of form */}
                  <div className='row formRow'>
                    <div className='col-6'>
                      <h1 id='main-Heading'>Sponsor Form</h1>
                      <input
                        type='text'
                        name='name'
                        {...register('name', {
                          required: {
                            value: true,
                            message: 'Please enter your name'
                          },
                          maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less'
                          }
                        })}
                        className='form-control sponsorFormInput'
                        placeholder='Name'
                      ></input>
                      {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                    </div>

                    <div className='col-6'>

                      <input
                        type='number'

                        name='number'
                        {...register('number', {
                          required: {
                            value: true,
                            message: 'Please Enter the amount($)'
                          },

                          maxLength: {
                            value: 10,
                            message: 'Enter some valid amount'
                          }
                        })}
                        className='form-control sponsorFormInput'
                        placeholder='Enter amount you want to sponsor($)'
                        onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57"
                      ></input>
                      {errors.number && <span className='errorMessage'>{errors.number.message}</span>}
                    </div>

                    <div className='col-6'>

                      <input
                        type='brand'

                        name='brand'
                        {...register('company', {
                          required: {
                            value: true,
                            message: 'Enter your Company name'
                          },

                          maxLength: {
                            value: 10,
                            message: 'Enter some valid amount'
                          }
                        })}
                        className='form-control sponsorFormInput'
                        placeholder='Enter Your company name'

                      ></input>
                      {errors.number && <span className='errorMessage'>{errors.number.message}</span>}
                    </div>

                    <div className='col-6'>
                      <input
                        type='email'
                        name='email'
                        {...register('email', {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        })}
                        className='form-control sponsorFormInput'
                        placeholder='Email address'
                      ></input>
                      {errors.email && (
                        <span className='errorMessage'>Please enter a valid email address</span>
                      )}
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className='row formRow'>
                    <div className='col'>
                      <input
                        type='text'
                        name='subject'
                        {...register('subject', {
                          required: {
                            value: true,
                            message: 'Please enter a subject'
                          },
                          maxLength: {
                            value: 75,
                            message: 'Subject cannot exceed 75 characters'
                          }
                        })}
                        className='form-control sponsorFormInput'
                        placeholder='Purpose of sponsoring'
                      ></input>
                      {errors.subject && (
                        <span className='errorMessage'>{errors.subject.message}</span>
                      )}
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className='row formRow'>
                    <div className='col'>
                      <textarea
                        rows={3}
                        name='message'
                        {...register('Description', {
                          required: true
                        })}
                        className='form-control sponsorFormInput'
                        placeholder='Feedback'
                      ></textarea>
                      {errors.message && <span className='errorMessage'>Please enter a message</span>}
                    </div>
                  </div>

                  <button className='sponsor-submit-btn' disabled={disabled} type='submit'>
                    Submit
                  </button>
                </form>
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default SponsorForm;